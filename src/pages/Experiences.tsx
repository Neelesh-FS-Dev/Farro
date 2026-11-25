import { useRef } from "react";
import { experiences, pages, site } from "../content/farro";
import { photos, reels, stills, type Photo } from "../content/media";
import { ReelVideo } from "../components/ReelVideo";
import { PageIntro } from "../components/PageIntro";
import { Picture } from "../components/Picture";
import { Section } from "../components/Section";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

// Only events with a photograph that clearly belongs to them. Others stay text-only.
const pastPhotos: Record<string, Photo> = {
  "Four hands dinner with Chef Vicky Ratnani": photos.chefsCooking,
  "Farro ki Diwali": stills.family,
};

export function Experiences() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.experiences.title, pages.experiences.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  return (
    <div ref={root}>
      <PageIntro
        label="Experiences"
        title="Brunch, collaborations and celebrations."
        lead="Past experiences are listed below. Upcoming dates are shared only once they are confirmed."
      />

      <Section no="01" label="Upcoming" labelledBy="upcoming-title">
        <h2 id="upcoming-title" className="visually-hidden">
          Upcoming
        </h2>
        {experiences.upcoming.length === 0 ? (
          <p className="empty">
            No upcoming experiences are confirmed yet.{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
              Ask on WhatsApp
            </a>{" "}
            to hear about the next one first.
          </p>
        ) : null}
      </Section>

      <Section no="02" label="Past" labelledBy="past-title">
        <h2 id="past-title" className="visually-hidden">
          Past experiences
        </h2>
        <ol>
          {experiences.past.map((e) => {
            const photo = pastPhotos[e.title];
            return (
              <li key={e.title} className={`event${photo ? "" : " event--no-photo"}`} data-reveal>
                {photo && (
                  <div className="event__photo">
                    <Picture photo={photo} sizes="(min-width: 1024px) 30vw, 100vw" />
                  </div>
                )}
                <div className="event__text">
                  <p className="label">{e.kind}</p>
                  <h3>{e.title}</h3>
                  <p className="body">{e.body}</p>
                </div>
                <p className="event__when">{e.when}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section no="03" label="Private bookings" tone="dark" labelledBy="private-title">
        <div className="split">
          <ReelVideo reel={reels.diners} />
          <div className="stack">
            <h2 id="private-title" className="h2">
              Planning something of your own?
            </h2>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
              Enquire about a private booking
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
