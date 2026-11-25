import { Link } from "react-router-dom";
import { Picture } from "../components/Picture";
import { business, dishesSeen, photos } from "../content/farro";

// No verified menu data was supplied, so prices and descriptions are not shown.
// Dishes below are only those named in Farro's published posts.
export function Menu() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="chapter" style={{ paddingBottom: "2rem" }} aria-labelledby="menu-title">
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div style={{ gridColumn: "1 / span 7" }}>
            <p className="chapter-index">The menu</p>
            <h1 id="menu-title">The table, in order.</h1>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              Contemporary Indian, Mediterranean and Middle Eastern influences, with dishes that change over time.
            </p>
          </div>
          <div style={{ gridColumn: "9 / span 4" }}>
            <div className="frame" style={{ margin: 0 }}>
              <Picture photo={photos.dumplings} priority sizes="(min-width: 1080px) 30vw, 92vw" />
            </div>
          </div>
        </div>
      </section>

      <nav className="menu-page__cats" aria-label="Menu sections">
        <div className="wrap">
          <ul>
            <li>
              <a href="#dishes">Dishes</a>
            </li>
            <li>
              <a href="#beverages">Beverages</a>
            </li>
            <li>
              <a href="#confirm">Full menu</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="menu-section wrap" id="dishes" aria-labelledby="dishes-title">
        <h2 id="dishes-title">Dishes from Farro&apos;s posts</h2>
        <p className="caption" style={{ maxWidth: "60ch" }}>
          Named in Farro&apos;s published Instagram material. Being named here does not mean a dish is on the
          current menu. Please confirm before you visit.
        </p>
        <ul>
          {dishesSeen.map((name) => (
            <li key={name}>
              <span>{name}</span>
              <span>Availability to confirm</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="menu-section wrap" id="beverages" aria-labelledby="beverages-title">
        <h2 id="beverages-title">Beverages</h2>
        <p className="measure">
          Cocktails and beverages from Farro&apos;s bar, including the Sip Through Origins series seen in published
          material. A verified beverage list has not been provided for this site.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="text-link" to="/#bar">
            See the bar chapter
          </Link>
        </p>
      </section>

      <section className="menu-section wrap" id="confirm" aria-labelledby="confirm-title" style={{ borderBottom: 0 }}>
        <h2 id="confirm-title">Full menu, prices and dietary information</h2>
        <p className="measure">
          Prices, descriptions and dietary details have not been verified for this site, so none are shown. Please
          use the restaurant listing, which has the current menu.
        </p>
        <p style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
            Open restaurant listing
          </a>
          <a className="btn" href={business.phoneHref}>
            Call the restaurant
          </a>
        </p>
      </section>
    </main>
  );
}
