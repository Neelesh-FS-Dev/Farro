import { useRef } from "react";
import { Link } from "react-router-dom";
import { home, pages, story } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";
import { maskReveal, revealOnScroll, useGsap } from "../lib/motion";

export function Story() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.story.title, pages.story.description);
  useGsap(root, () => {
    if (root.current) {
      revealOnScroll(root.current);
      maskReveal(root.current);
    }
  });

  return (
    <div ref={root}>
      <header className="page-intro">
        <p className="eyebrow">Our story</p>
        <h1>{story.opener}</h1>
      </header>

      <section className="section section--tight" aria-label="Philosophy">
        <div className="wrap chapters">
          <div className="chapters__title">
            <p className="eyebrow">Philosophy</p>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              {home.intro.body}
            </p>
          </div>
          <div>
            {story.chapters.map((c, i) => (
              <article key={c.label} className="chapter" data-reveal>
                <span className="chapter__no">0{i + 1}</span>
                <p className="eyebrow">{c.label}</p>
                <h2 className="display-m">{c.headline}</h2>
                <p className="body-copy">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="people-title">
        <div className="wrap split">
          <div className="split__media" data-mask>
            <img
              src="/media/still-staff.jpg"
              alt="A member of the Farro team carries plates through the pass"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="split__text">
            <p className="eyebrow" data-reveal>
              {story.people.label}
            </p>
            <h2 id="people-title" className="display-l" data-reveal>
              {story.people.headline}
            </h2>
            <p className="body-copy" data-reveal>
              {story.people.body}
            </p>
            <Link to="/menu" className="text-link" data-reveal>
              See what is cooking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
