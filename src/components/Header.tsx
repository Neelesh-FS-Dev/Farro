import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business } from "../content/farro";
import { setScrollLocked } from "../lib/motion";

const leftLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
];
const rightLinks = [
  { to: "/experiences", label: "Experiences" },
  { to: "/visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const [shownPath, setShownPath] = useState(location.pathname);

  // Close the sheet after navigation (state adjusted during render, not in an effect).
  if (shownPath !== location.pathname) {
    setShownPath(location.pathname);
    setOpen(false);
  }

  // Compact masthead after the first scroll. Class change only, so no layout shift in the grid.
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock, Escape to close, focus trap and focus restoration.
  useEffect(() => {
    if (!open) return;
    setScrollLocked(true);
    const toggle = toggleRef.current;
    const sheet = sheetRef.current;
    const focusables = () =>
      Array.from(sheet?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      setScrollLocked(false);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header className={`masthead${compact ? " is-compact" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap masthead__inner">
        <nav className="masthead__left" aria-label="Primary">
          {leftLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="wordmark">
          FARRO
          <span>फ़ारो</span>
        </Link>

        <nav className="masthead__right" aria-label="Secondary">
          {rightLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
          <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
            Reserve a Table
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-sheet"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-sheet" ref={sheetRef} className="sheet" hidden={!open} aria-label="Site contents">
        <nav aria-label="Mobile">
          {[...leftLinks, ...rightLinks].map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/">Home</Link>
        </nav>
        <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
          Reserve a Table
        </a>
        <p className="sheet__note">
          {business.address}
          <br />
          <a href={business.phoneHref}>{business.phone}</a>
        </p>
      </div>

      <a className="btn btn--primary reserve-mobile" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
        Reserve a Table
      </a>
    </header>
  );
}
