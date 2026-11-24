import { useRef } from "react";
import { contact, pages, site } from "../content/farro";
import { ReservationForm } from "../components/ReservationForm";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

export function Contact() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.contact.title, pages.contact.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  return (
    <div ref={root}>
      <header className="page-intro">
        <p className="eyebrow">Contact & reservations</p>
        <h1>Come hungry.</h1>
        <p className="note">{contact.note}</p>
      </header>

      <div className="contact-grid">
        <section aria-labelledby="enquiry-title">
          <h2 id="enquiry-title" className="display-m" style={{ marginBottom: "2rem" }}>
            Request a table
          </h2>
          <ReservationForm />
        </section>

        <aside aria-label="Contact details">
          <dl className="contact-details">
            <div>
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd className="tbc">To be confirmed</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd className="tbc">To be confirmed</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
                  {contact.whatsappLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
                  {contact.instagramLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt>Directions</dt>
              <dd>
                <a href={site.directions} target="_blank" rel="noopener noreferrer" className="text-link">
                  Open in Maps
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
