import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../content/farro";

export function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  return (
    <footer className="site-footer">
      <p className="site-footer__mark" aria-hidden="true">
        Farro
      </p>
      <div className="site-footer__grid">
        <nav aria-label="Footer">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p>{site.location}</p>
          <p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            {" · "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </div>
      <p className="site-footer__legal">
        © {year} Farro. {site.disclosure}
      </p>
    </footer>
  );
}
