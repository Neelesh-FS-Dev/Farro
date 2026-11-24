import { useMemo, useRef, useState } from "react";
import { gallery, pages, site } from "../content/farro";
import { photos, reels, type Photo } from "../content/media";
import { ReelVideo } from "../components/ReelVideo";
import { PageIntro } from "../components/PageIntro";
import { Picture } from "../components/Picture";
import { Section } from "../components/Section";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

type Item = { photo?: keyof typeof photos; reel?: keyof typeof reels; category: string; caption: string };

// Full-size source for the lightbox: the 1600px variant of each post crop.
function fullSource(p: Photo): string {
  return p.srcSet ? p.src.replace("-800.jpg", "-1600.jpg") : p.src;
}

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<{ photo: Photo; caption: string } | null>(null);
  useDocumentMeta(pages.gallery.title, pages.gallery.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  // Offer only categories that have items, so a filter never leads to an empty page.
  const items = gallery.items as readonly Item[];
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const visible = items.filter((i) => filter === "All" || i.category === filter);

  function open(photo: Photo, caption: string) {
    setActive({ photo, caption });
    dialog.current?.showModal();
  }

  return (
    <div ref={root}>
      <PageIntro label="Gallery" title="A visual journal." lead="Moments from the kitchen, the bar and the dining room. More is added as clean, approved photography is shared." />

      <Section no="01" label="Photographs" labelledBy="photos-title">
        <h2 id="photos-title" className="visually-hidden">
          Photographs
        </h2>
        <div className="filters" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
              <span className="filters__count">{c === "All" ? items.length : items.filter((i) => i.category === c).length}</span>
            </button>
          ))}
        </div>

        <ul className="gallery" aria-live="polite">
          {visible.map((item) => {
            if (item.reel) {
              return (
                <li key={item.reel} className="gallery__item">
                  <ReelVideo reel={reels[item.reel]} caption={item.caption} />
                  <p className="picture__caption">
                    <span>{item.caption}</span>
                    <span>{item.category}</span>
                  </p>
                </li>
              );
            }
            const photo = photos[item.photo!];
            return (
              <li key={item.photo} className="gallery__item">
                <button type="button" className="gallery__button" onClick={() => open(photo, item.caption)} aria-haspopup="dialog">
                  <Picture photo={photo} sizes="(min-width: 1024px) 30vw, (min-width: 720px) 45vw, 100vw" />
                  <span className="visually-hidden">Open larger: {item.caption}</span>
                </button>
                <p className="picture__caption">
                  <span>{item.caption}</span>
                  <span>{item.category}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={active?.caption ?? "Image"}
        onClick={(e) => {
          // A click on the backdrop lands on the dialog element itself.
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        {active && (
          <>
            <img src={fullSource(active.photo)} alt={active.photo.alt} />
            <div className="lightbox__bar">
              <span>{active.caption}</span>
              <button type="button" className="lightbox__close" onClick={() => dialog.current?.close()}>
                Close
              </button>
            </div>
          </>
        )}
      </dialog>

      <Section label="Instagram" labelledBy="insta-title">
        <h2 id="insta-title" className="h2">
          See more on Instagram.
        </h2>
        <div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
            @farro.pune
          </a>
        </div>
      </Section>
    </div>
  );
}
