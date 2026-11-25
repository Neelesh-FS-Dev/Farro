import { useRef } from "react";
import { Link } from "react-router-dom";
import { home, pages, story } from "../content/farro";
import { photos } from "../content/media";
import { PageIntro } from "../components/PageIntro";
import { Picture } from "../components/Picture";
import { Section } from "../components/Section";
import { useDocumentMeta } from "../lib/seo";
import { maskReveal, parallax, revealOnScroll, scrubWords, useGsap } from "../lib/motion";

// One photograph per chapter, in order.
const chapterPhotos = [photos.marketGreens, photos.spacesPlant, photos.peopleMixer];

export function Story() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.story.title, pages.story.description);
  useGsap(root, () => {
    if (!root.current) return;
    revealOnScroll(root.current);
    maskReveal(root.current);
    scrubWords(root.current);
    parallax(root.current);
  });

  return (
    <div ref={root}>
      <PageIntro label="Our story" title={story.opener} lead={home.intro.body} />

      {story.chapters.map((c, i) => (
        <Section key={c.label} no={`0${i + 1}`} label={c.label} labelledBy={`chapter-${i}`}>
          <Picture photo={chapterPhotos[i]} sizes="(min-width: 1024px) 75vw, 100vw" />
          <div className="pair">
            <h2 id={`chapter-${i}`} className="h2" data-reveal>
              {c.headline}
            </h2>
            <p className="body" data-reveal>
              {c.body}
            </p>
          </div>
        </Section>
      ))}

      <Section no="04" label={story.people.label} tone="dark" labelledBy="people-title">
        <div className="people-top">
          <Picture photo={photos.chefPortrait} sizes="(min-width: 1024px) 40vw, 100vw" caption="Chef Vardaan Marwah" />
          <div className="people-top__text">
            <h2 id="people-title" className="h2">
              {story.people.headline}
            </h2>
            <p className="body">{story.people.body}</p>
            <Link to="/menu" className="text-link">
              See what is cooking
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
