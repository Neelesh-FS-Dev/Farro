import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../content/farro";

export function Footer() {
  // Read once per mount and kept in state, so render stays pure.
  const [year] = useState(() => new Date().getFullYear());
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__mark" aria-hidden="true">
          Farro
        </p>
        <div className="grid12 site-footer__cols">
          <div className="site-footer__col site-footer__col--brand">
            <h2>Farro</h2>
            <p>{site.tagline}</p>
          </div>
          <nav className="site-footer__col site-footer__col--nav" aria-label="Footer">
            <h2>Pages</h2>
            {nav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="site-footer__col site-footer__col--visit">
            <h2>Visit</h2>
            <p>{site.location}</p>
            <a href={site.directions} target="_blank" rel="noopener noreferrer">
              Directions
            </a>
          </div>
          <div className="site-footer__col site-footer__col--contact">
            <h2>Contact</h2>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <p className="site-footer__legal">
          © {year} Farro. {site.disclosure}
        </p>
      </div>
    </footer>
  );
}
