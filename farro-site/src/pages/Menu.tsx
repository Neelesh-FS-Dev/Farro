import { useRef } from "react";
import { Link } from "react-router-dom";
import { contact, menu, pages, site } from "../content/farro";
import { photos, reels } from "../content/media";
import { ReelVideo } from "../components/ReelVideo";
import { PageIntro } from "../components/PageIntro";
import { Picture } from "../components/Picture";
import { Section } from "../components/Section";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

// Index links point at the section ids below. Keep the two lists in step.
const index = [
  { id: "food", no: "01", label: "Food" },
  { id: "drinks", no: "02", label: "Drinks" },
  { id: "brunch", no: "03", label: "Brunch" },
  { id: "shared", no: "04", label: "Shared" },
] as const;

export function Menu() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.menu.title, pages.menu.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  return (
    <div ref={root}>
      <PageIntro label="Menu" title="Featured dishes and drinks." lead="Dishes and drinks change with the season." />

      <div className="wrap">
        <nav className="menu-index" aria-label="On this page">
          {index.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <span>{s.no}</span>
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <Section id="food" no="01" label="Food" labelledBy="food-title">
        <h2 id="food-title" className="visually-hidden">
          Food
        </h2>
        <div className="split">
          <ReelVideo reel={reels.menu} />
          <div className="dishes dishes--single">
            {menu.food.map((dish) => (
              <article key={dish.name} className="dish" data-reveal>
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
                <span className="source">{dish.source}</span>
              </article>
            ))}
          </div>
        </div>
        <p className="note">{menu.note}</p>
      </Section>

      <Section id="drinks" no="02" label="Drinks" tone="dark" labelledBy="drinks-title">
        <h2 id="drinks-title" className="visually-hidden">
          Drinks
        </h2>
        <div className="split">
          <Picture photo={photos.drinkGlass} sizes="(min-width: 1024px) 40vw, 100vw" />
          <div className="drink-list">
            {menu.drinks.map((d) => (
              <article key={d.name} className="item" data-reveal>
                <h3>{d.name}</h3>
                <p>{d.detail}</p>
                <span className="source">{d.source}</span>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="brunch" no="03" label="Brunch" labelledBy="brunch-title" tone="paper">
        <h2 id="brunch-title" className="h2">
          {menu.brunch.name}.
        </h2>
        <p className="lead">{menu.brunch.detail}</p>
      </Section>

      <Section id="shared" no="04" label="Shared" labelledBy="shared-title">
        <div className="split">
          <ReelVideo reel={reels.diners} />
          <div className="stack">
            <h2 id="shared-title" className="h2">
              {menu.shared.name}
            </h2>
            <p className="body">{menu.shared.detail}</p>
          </div>
        </div>
      </Section>

      <Section label="Ask for the current menu" tone="green" labelledBy="ask-title">
        <h2 id="ask-title" className="h2">
          Ask for the current menu.
        </h2>
        <p className="lead">Dishes and drinks change with the season. Send us a message and we will share what is on today.</p>
        <div className="actions">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            {contact.whatsappLabel}
          </a>
          <Link to="/contact" className="text-link">
            Reserve a table
          </Link>
        </div>
      </Section>
    </div>
  );
}
