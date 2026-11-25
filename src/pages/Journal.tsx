import { Link, useParams } from "react-router-dom";
import { Picture } from "../components/Picture";
import { findJournal, journal } from "../content/journal";

// Journal index: one feature and two supporting entries with different proportions (brief §21),
// not three identical cards.
export function Journal() {
  const [feature, ...rest] = journal;
  return (
    <main id="main" tabIndex={-1}>
      <section className="chapter" aria-labelledby="journal-title">
        <div className="wrap">
          <p className="chapter-index">The journal</p>
          <h1 id="journal-title">Stories from the table.</h1>
          <p className="lede measure" style={{ marginTop: "1.5rem" }}>
            Notes from Farro&apos;s posts. Each entry is a draft until the team confirms it.
          </p>

          <div className="journal-grid">
            <article className="journal-feature">
              <figure className="frame" style={{ margin: 0 }}>
                <Picture photo={feature.photo} sizes="(min-width: 1080px) 56vw, 92vw" />
              </figure>
              <p className="kicker">{feature.kicker}</p>
              <h2>
                <Link to={`/journal/${feature.slug}`}>{feature.title}</Link>
              </h2>
              <p className="lede">{feature.standfirst}</p>
              <p className="caption">Draft · needs confirmation</p>
            </article>
            {rest.map((j, i) => (
              <article key={j.slug} className={`journal-side journal-side--${i}`}>
                <figure className="frame" style={{ margin: 0 }}>
                  <Picture photo={j.photo} sizes="(min-width: 1080px) 26vw, 92vw" />
                </figure>
                <p className="kicker">{j.kicker}</p>
                <h3>
                  <Link to={`/journal/${j.slug}`}>{j.title}</Link>
                </h3>
                <p className="caption">Draft · needs confirmation</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function JournalEntryPage() {
  const { slug } = useParams();
  const entry = findJournal(slug);
  if (!entry) {
    return (
      <main id="main" tabIndex={-1} className="wrap not-found">
        <h1>That journal entry is not here.</h1>
        <p>
          <Link className="text-link" to="/journal">
            Back to the journal
          </Link>
        </p>
      </main>
    );
  }
  return (
    <main id="main" tabIndex={-1}>
      <article className="chapter">
        <div className="wrap journal-entry">
          <p className="kicker">{entry.kicker}</p>
          <h1>{entry.title}</h1>
          {entry.dates ? <p className="caption">{entry.dates}</p> : null}
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            {entry.standfirst}
          </p>
          <figure className="frame" style={{ margin: "2.5rem 0 0" }}>
            <Picture photo={entry.photo} priority sizes="(min-width: 1080px) 60vw, 92vw" />
          </figure>
          <div className="measure journal-entry__body">
            {entry.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="caption">Source: {entry.source}.</p>
          </div>
          <p style={{ marginTop: "2.5rem" }}>
            <Link className="text-link" to="/journal">
              Return to the journal
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
