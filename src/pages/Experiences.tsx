import { Link } from "react-router-dom";
import { business, experiences } from "../content/farro";

// Only experiences named in Farro's published posts are listed, as an archive. No upcoming dates
// are invented, and there are no registrations on this site.
export function Experiences() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="chapter" aria-labelledby="exp-title">
        <div className="wrap">
          <p className="chapter-index">The shared table</p>
          <h1 id="exp-title">Food is better when shared.</h1>
          <p className="lede measure" style={{ marginTop: "1.5rem" }}>
            Brunches, chef collaborations and festive dinners from Farro&apos;s published calendar. This is an
            archive, not a list of upcoming events.
          </p>

          <ol className="archive" aria-label="Archived experiences">
            {experiences.map((e) => (
              <li key={e.title}>
                <p className="tag">{e.kind}</p>
                <div>
                  <h2 style={{ fontSize: "clamp(1.6rem, 1.2rem + 1.2vw, 2.2rem)" }}>{e.title}</h2>
                  <p style={{ marginTop: "0.5rem", color: "var(--ink)" }}>{e.dates}</p>
                </div>
                <p>{e.note}</p>
              </li>
            ))}
          </ol>

          <div style={{ marginTop: "3rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Ask about upcoming experiences
            </a>
            <a className="btn" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
            <Link className="btn" to="/visit">
              Reserve or visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
