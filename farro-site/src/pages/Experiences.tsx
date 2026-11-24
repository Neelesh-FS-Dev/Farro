import { useRef } from "react";
import { experiences, pages, site } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

export function Experiences() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.experiences.title, pages.experiences.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  return (
    <div ref={root}>
      <header className="page-intro">
        <p className="eyebrow">Experiences</p>
        <h1>Brunch, collaborations and celebrations.</h1>
        <p className="lead">
          Past experiences are listed below. Upcoming dates are shared only once they are confirmed.
        </p>
      </header>

      <section className="section section--tight" aria-labelledby="upcoming-title">
        <div className="wrap">
          <h2 id="upcoming-title" className="display-m">
            Upcoming
          </h2>
          {experiences.upcoming.length === 0 ? (
            <p className="empty" style={{ marginTop: "1.5rem" }}>
              No upcoming experiences are confirmed yet.{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
                Ask on WhatsApp
              </a>{" "}
              to hear about the next one first.
            </p>
          ) : null}
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="past-title">
        <div className="wrap">
          <h2 id="past-title" className="display-m">
            Past experiences
          </h2>
          <ol className="experience-list" style={{ marginTop: "2rem" }}>
            {experiences.past.map((e) => (
              <li key={e.title} className="experience" data-reveal>
                <p className="eyebrow">{e.kind}</p>
                <div>
                  <h3 className="display-m">{e.title}</h3>
                  <p className="body-copy" style={{ marginTop: "0.9rem" }}>
                    {e.body}
                  </p>
                </div>
                <p className="experience__when">{e.when}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: "3rem" }}>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
              Enquire about a private booking
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
