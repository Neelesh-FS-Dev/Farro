import { LazyVideo } from "../components/LazyVideo";
import { business, clips } from "../content/farro";

// Only verified contact and reservation destinations are linked. No availability, no date picker,
// no embedded map (a plain directions link instead), and no invented opening hours.
export function Visit() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="chapter" aria-labelledby="visit-page-title">
        <div className="wrap grid-12 visit__grid">
          <div className="visit__head">
            <p className="chapter-index">Visit</p>
            <h1 id="visit-page-title">There is always a story at the table.</h1>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              Reserve through the restaurant listing, message on WhatsApp, or call. Please confirm the details below
              before you come.
            </p>

            <dl style={{ margin: "2.5rem 0 0" }}>
              <div className="visit__card">
                <dt>Address</dt>
                <dd>{business.address}</dd>
              </div>
              <div className="visit__card">
                <dt>Telephone</dt>
                <dd>
                  <a href={business.phoneHref}>{business.phone}</a>
                </dd>
              </div>
              <div className="visit__card">
                <dt>Hours</dt>
                <dd>{business.hours}</dd>
              </div>
              <div className="visit__card">
                <dt>Instagram</dt>
                <dd>
                  <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                    @farro.pune
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="visit__actions">
            <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
              Reserve a Table (District listing)
            </a>
            <a className="btn" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
            <a className="btn" href={business.phoneHref}>
              Call the restaurant
            </a>
            <a className="btn" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
            <p className="visit__note">
              Reservations are handled by the external listing and the restaurant. This site does not confirm
              availability.
            </p>
          </div>

          <figure className="visit__media frame" style={{ margin: 0 }}>
            <LazyVideo slug={clips.table.slug} alt={clips.table.alt} />
          </figure>
        </div>
      </section>
    </main>
  );
}
