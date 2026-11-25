import { Link } from "react-router-dom";
import { business } from "../content/farro";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="colophon">
      <div className="wrap">
        <p className="colophon__wordmark" aria-hidden="true">
          FARRO
        </p>
        <div className="colophon__grid">
          <div>
            <h2>A table of stories</h2>
            <p>New Age cuisine inspired by culture, journeys &amp; shared traditions.</p>
            <p>Koregaon Park, Pune, Maharashtra, India.</p>
          </div>
          <div>
            <h2>Visit</h2>
            <p>{business.address}</p>
            <p>
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
            <p>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </p>
          </div>
          <div>
            <h2>Reserve &amp; follow</h2>
            <p>
              <a href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
                Reserve on District
              </a>
            </p>
            <p>
              <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
            <p>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram @farro.pune
              </a>
            </p>
            <p>
              <Link to="/journal">The journal</Link>
            </p>
          </div>
        </div>
        <div className="colophon__legal">
          <span>© {year} Farro. Independent concept website by Codevirel Studio, not commissioned by Farro.</span>
          <span>Private presentation concept · not for public indexing</span>
        </div>
      </div>
    </footer>
  );
}
