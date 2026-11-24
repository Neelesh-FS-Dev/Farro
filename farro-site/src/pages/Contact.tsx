import { useRef } from "react";
import { contact, pages, site } from "../content/farro";
import { photos } from "../content/media";
import { PageIntro } from "../components/PageIntro";
import { Picture } from "../components/Picture";
import { ReservationForm } from "../components/ReservationForm";
import { Section } from "../components/Section";
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
      <PageIntro label="Contact" title="Come hungry." lead={contact.note} />

      <Section no="01" label="Request a table" labelledBy="enquiry-title">
        <div className="split">
          <div>
            <h2 id="enquiry-title" className="visually-hidden">
              Request a table
            </h2>
            <ReservationForm />
          </div>
          <div className="stack">
            <Picture photo={photos.spacesPlant} sizes="(min-width: 1024px) 35vw, 100vw" />
            <dl className="details">
              <div className="detail">
                <dt>Location</dt>
                <dd>{site.location}</dd>
              </div>
              <div className="detail">
                <dt>Address</dt>
                <dd className="tbc">To be confirmed</dd>
              </div>
              <div className="detail">
                <dt>Hours</dt>
                <dd className="tbc">To be confirmed</dd>
              </div>
              <div className="detail">
                <dt>WhatsApp</dt>
                <dd>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
                    {contact.whatsappLabel}
                  </a>
                </dd>
              </div>
              <div className="detail">
                <dt>Instagram</dt>
                <dd>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
                    {contact.instagramLabel}
                  </a>
                </dd>
              </div>
              <div className="detail">
                <dt>Directions</dt>
                <dd>
                  <a href={site.directions} target="_blank" rel="noopener noreferrer" className="text-link">
                    Open in Maps
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
    </div>
  );
}
