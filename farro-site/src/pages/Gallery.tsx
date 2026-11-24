import { useMemo, useRef, useState } from "react";
import { gallery, pages, site } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";
import { revealOnScroll, useGsap } from "../lib/motion";

type Item = (typeof gallery.items)[number];

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Item | null>(null);
  useDocumentMeta(pages.gallery.title, pages.gallery.description);
  useGsap(root, () => {
    if (root.current) revealOnScroll(root.current);
  });

  // Only offer categories that have items, so filters never lead to an empty page.
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gallery.items.map((i) => i.category)))],
    [],
  );
  const items = gallery.items.filter((i) => filter === "All" || i.category === filter);

  function open(item: Item) {
    setActive(item);
    dialog.current?.showModal();
  }

  return (
    <div ref={root}>
      <header className="page-intro">
        <p className="eyebrow">Gallery</p>
        <h1>A visual journal.</h1>
        <p className="lead">
          Moments from the dining room, the kitchen and the people who make Farro. More is added as clean, approved photography is shared.
        </p>
        <div className="filters" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
      </header>

      <ul className="gallery-grid" aria-live="polite">
        {items.map((item) => (
          <li key={item.src} data-reveal>
            <button type="button" onClick={() => open(item)} aria-haspopup="dialog">
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              <span className="visually-hidden">Open {item.caption}</span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={active?.caption ?? "Image"}
        onClick={(e) => {
          // Close when the backdrop (the dialog element itself) is clicked.
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        {active && (
          <>
            <img src={active.src} alt={active.alt} />
            <div className="lightbox__bar">
              <span>{active.caption}</span>
              <button type="button" className="lightbox__close" onClick={() => dialog.current?.close()}>
                Close
              </button>
            </div>
          </>
        )}
      </dialog>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="body-copy">
            See more on{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
              Instagram @farro.pune
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
