import { useRef } from "react";
import { Link } from "react-router-dom";
import { contact, menu, pages, site } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

// Sections are data-driven from content/farro.ts. Add items there, not here.
const sections = [
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "brunch", label: "Brunch" },
  { id: "shared", label: "Shared" },
] as const;

export function Menu() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.menu.title, pages.menu.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  return (
    <div ref={root}>
      <header className="page-intro">
        <p className="eyebrow">Menu</p>
        <h1>Featured dishes and drinks.</h1>
        <p className="note">{menu.note}</p>
      </header>

      <nav className="menu-nav" aria-label="Menu categories">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap" style={{ padding: "0 var(--gutter)" }}>
        <section id="food" className="menu-block">
          <h2>Food</h2>
          <ul className="dish-list" data-reveal>
            {menu.food.map((dish) => (
              <li key={dish.name}>
                <h3>{dish.name}</h3>
                <p>
                  {dish.detail}
                  <span className="dish-list__source">{dish.source}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="drinks" className="menu-block">
          <h2>Drinks</h2>
          <div>
            {menu.drinks.map((d) => (
              <article key={d.name} className="drink" style={{ borderColor: "var(--line-light)" }} data-reveal>
                <h3>{d.name}</h3>
                <p style={{ color: "var(--fg-light-2)" }}>{d.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="brunch" className="menu-block menu-block--brunch">
          <h2>Brunch</h2>
          <p className="body-copy" data-reveal>
            <strong style={{ fontWeight: 600 }}>{menu.brunch.name}.</strong> {menu.brunch.detail}
          </p>
        </section>

        <section id="shared" className="menu-block">
          <h2>Shared</h2>
          <div data-reveal>
            <h3 className="display-m">{menu.shared.name}</h3>
            <p className="body-copy" style={{ marginTop: "1rem" }}>
              {menu.shared.detail}
            </p>
          </div>
        </section>
      </div>

      <section className="section section--dark" aria-labelledby="enquire-title">
        <div className="wrap" style={{ display: "grid", gap: "1.5rem", justifyItems: "start" }}>
          <h2 id="enquire-title" className="display-m">
            Ask for the current menu.
          </h2>
          <p className="lead">
            Dishes and drinks change with the season. Send us a message and we will share what is on today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button button--primary">
              {contact.whatsappLabel}
            </a>
            <Link to="/contact" className="text-link">
              Reserve a table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
