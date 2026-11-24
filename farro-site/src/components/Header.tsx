import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, site } from "../content/farro";
import { scrollControl } from "../lib/smooth-scroll";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function pastHero() {
  return window.scrollY > window.innerHeight * 0.6;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Solid background after the hero. Re-renders only when the boolean flips.
  const solid = useSyncExternalStore(subscribeToScroll, pastHero, () => false);

  // Close the overlay on navigation. Adjusting state during render avoids an extra effect pass.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setOpen(false);
  }

  // Scroll lock, focus management and keyboard handling for the overlay.
  useEffect(() => {
    if (!open) return;
    scrollControl.stop();
    const toggle = toggleRef.current;
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button"));
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      scrollControl.start();
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}${open ? " is-hidden" : ""}`}>
        <Link to="/" className="wordmark" aria-label="Farro, home">
          Farro
        </Link>
        <div className="site-header__actions">
          <Link to="/contact" className="header-cta">
            Reserve
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="menu-toggle__bars" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`menu-overlay${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav className="menu-overlay__nav" aria-label="Primary">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-overlay__meta">
          <p>{site.location}</p>
          <p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp enquiries
            </a>
          </p>
          <p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram @farro.pune
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
