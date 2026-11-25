import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Picture } from "../components/Picture";
import { LazyVideo } from "../components/LazyVideo";
import { business, clips, dishesSeen, photos } from "../content/farro";
import { gsap, prefersReducedMotion, ScrollTrigger } from "../lib/motion";

const dishFrames = [photos.heroDish, photos.croquette, photos.cake, photos.carrot];
const dishTitles = ["Featured plate", "A second course", "A sweet course", "A fresh course"];

export function Home() {
  const root = useRef<HTMLElement>(null);

  // Hero sequence (prompt §13). Skipped under reduced motion; content is visible without it.
  useEffect(() => {
    if (prefersReducedMotion() || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero='meta']", { opacity: 0, duration: 0.3 })
        .from("[data-hero='line']", { yPercent: 105, duration: 0.9, stagger: 0.12 }, 0.2)
        // Clip-only reveal on the main image: it stays painted, so it can be the LCP element.
        .from("[data-hero='main']", { clipPath: "inset(12% 0 0 0)", duration: 0.9 }, 0.2)
        .from("[data-hero='side']", { opacity: 0, y: 24, duration: 0.7 }, 0.35)
        .from("[data-hero='actions']", { opacity: 0, y: 12, duration: 0.5 }, 0.7);

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.95,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
      });
      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main id="main" ref={root} tabIndex={-1}>
      {/* 01 — The invitation */}
      <section className="chapter hero" id="invitation" aria-labelledby="hero-title">
        <div className="wrap grid-12 hero__grid">
          <div className="hero__copy">
            <p className="hero__meta" data-hero="meta">
              Koregaon Park · Pune
            </p>
            <h1 id="hero-title">
              <span className="line" data-hero="line">
                Every plate
              </span>
              <span className="line" data-hero="line">
                begins somewhere.
              </span>
            </h1>
            <p className="lede" data-hero="actions">
              {business.tagline}
            </p>
            <div className="hero__actions" data-hero="actions">
              <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
                Reserve a Table
              </a>
              <Link className="btn" to="/menu">
                Explore the Menu
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <figure className="frame frame--main" data-hero="main" style={{ margin: 0 }}>
              <Picture photo={photos.heroDish} priority sizes="(min-width: 1080px) 46vw, 92vw" />
            </figure>
            <figure className="frame frame--side" data-hero="side" style={{ margin: 0 }}>
              <Picture photo={photos.heroSide} sizes="(min-width: 1080px) 16vw, 36vw" />
            </figure>
          </div>
        </div>
      </section>

      {/* 02 — The philosophy */}
      <section className="chapter chapter--lime" id="philosophy" aria-labelledby="philosophy-title">
        <div className="wrap grid-12 philosophy__grid">
          <div className="philosophy__label">
            <p className="chapter-index">02 — The philosophy</p>
          </div>
          <div className="philosophy__head" data-reveal>
            <h2 id="philosophy-title">Rooted in many places.</h2>
          </div>
          <div className="philosophy__body measure" data-reveal>
            <p className="lede">
              Farro draws on contemporary Indian, Mediterranean and Middle Eastern influences. Its name comes
              from farro, emmer or khapli, an ancient grain.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              <Link className="text-link" to="/our-story">
                Read our story
              </Link>
            </p>
          </div>
          <figure className="frame philosophy__image" data-reveal style={{ margin: 0 }}>
            <Picture photo={photos.plating} sizes="(min-width: 1080px) 22vw, 92vw" />
          </figure>
        </div>
      </section>

      {/* 03 — The kitchen */}
      <section className="chapter" id="kitchen" aria-labelledby="kitchen-title">
        <div className="wrap grid-12 kitchen__grid">
          <figure className="kitchen__portrait frame" data-reveal style={{ margin: 0 }}>
            <Picture photo={photos.chef} sizes="(min-width: 1080px) 36vw, 92vw" />
            <figcaption className="caption">Chef Vardaan Marwah, Farro.</figcaption>
          </figure>
          <div className="kitchen__text" data-reveal>
            <p className="chapter-index">03 — The kitchen</p>
            <h2 id="kitchen-title">Good food begins with good questions.</h2>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              Chef Vardaan Marwah and the Farro team at work. The kitchen is where each plate is made.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="text-link" to="/our-story">
                Meet the people behind Farro
              </Link>
            </p>
          </div>
          <div className="kitchen__film" data-reveal>
            <figure className="frame" style={{ margin: 0 }}>
              <LazyVideo slug={clips.mixing.slug} alt={clips.mixing.alt} ratio="16 / 9" />
            </figure>
            <p className="caption">Muted kitchen footage. Use the controls to play or pause.</p>
          </div>
        </div>
      </section>

      {/* 04 — The food */}
      <DishJournal />

      {/* Menu preview */}
      <MenuPreview />

      {/* 05 — The bar */}
      <section className="chapter chapter--dark" id="bar" aria-labelledby="bar-title">
        <div className="wrap grid-12 bar__grid">
          <div className="bar__text" data-reveal>
            <p className="chapter-index">05 — The bar</p>
            <h2 id="bar-title">Stories, poured.</h2>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              An evening chapter for cocktails and beverages, with close-up preparation from Farro&apos;s bar.
              Current drinks are listed on the menu page or the restaurant listing.
            </p>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn" to="/menu#beverages">
                Explore the drinks menu
              </Link>
            </p>
          </div>
          <figure className="bar__media frame" data-reveal style={{ margin: 0 }}>
            <Picture photo={photos.bar} sizes="(min-width: 1080px) 42vw, 92vw" />
          </figure>
          <div className="bar__clip" data-reveal>
            <figure className="frame" style={{ margin: 0 }}>
              <LazyVideo slug={clips.pour.slug} alt={clips.pour.alt} />
            </figure>
          </div>
        </div>
      </section>

      {/* 06 — The shared table */}
      <section className="chapter" id="shared-table" aria-labelledby="shared-title">
        <div className="wrap">
          <div className="shared__head" data-reveal>
            <div>
              <p className="chapter-index">06 — The shared table</p>
              <h2 id="shared-title">Food is better when shared.</h2>
            </div>
            <Link className="btn" to="/experiences">
              Discover experiences
            </Link>
          </div>
          <div className="shared__strip">
            <figure className="frame" data-reveal style={{ margin: 0 }}>
              <Picture photo={photos.dumplings} sizes="(min-width: 820px) 36vw, 92vw" />
            </figure>
            <figure className="frame" data-reveal style={{ margin: 0 }}>
              <Picture photo={photos.shredded} sizes="(min-width: 820px) 32vw, 92vw" />
            </figure>
            <figure className="frame" data-reveal style={{ margin: 0 }}>
              <Picture photo={photos.team} sizes="(min-width: 820px) 28vw, 92vw" />
            </figure>
          </div>
        </div>
      </section>

      {/* 07 — The space */}
      <section className="chapter chapter--lime" id="space" aria-labelledby="space-title">
        <div className="wrap grid-12 space__grid">
          <figure className="space__image frame frame--arch" data-reveal style={{ margin: 0 }}>
            <LazyVideo slug={clips.dining.slug} alt={clips.dining.alt} ratio="4 / 5" />
          </figure>
          <div className="space__text" data-reveal>
            <p className="chapter-index">07 — The space</p>
            <h2 id="space-title">A place to stay a little longer.</h2>
            <p className="lede" style={{ marginTop: "1.5rem" }}>
              Lime-plastered walls, curved forms, terracotta, teak, plants and warm earthy materials make up
              Farro&apos;s interior identity.
            </p>
            <p style={{ marginTop: "2rem" }}>
              <Link className="text-link" to="/visit">
                Plan your visit
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 08 — Return to Farro */}
      <section className="chapter" id="visit" aria-labelledby="visit-title">
        <div className="wrap" data-reveal>
          <p className="chapter-index">08 — Return to Farro</p>
          <h2 id="visit-title">There is always a story at the table.</h2>
          <p className="lede" style={{ marginTop: "1.5rem" }}>
            {business.address}
          </p>
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <a className="btn btn--primary" href={business.reserveUrl} target="_blank" rel="noopener noreferrer">
              Reserve a Table
            </a>
            <a className="btn" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <Link className="btn" to="/visit">
              Visit details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// 04 — The food. Signature editorial dish journal: buttons and a keyboard-accessible index,
// no autoplay, adjacent images only are shown, and a static fallback layout on mobile.
function DishJournal() {
  const [active, setActive] = useState(0);
  const total = dishFrames.length;
  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(total - 1, i + 1));

  return (
    <section className="chapter" id="food" aria-labelledby="food-title">
      <div className="wrap">
        <p className="chapter-index">04 — The food</p>
        <h2 id="food-title" style={{ maxWidth: "16ch" }}>
          Find something to remember.
        </h2>
        <div className="dishes__stage" style={{ marginTop: "3rem" }}>
          <div className="dishes__media" aria-live="polite">
            {dishFrames.map((photo, i) => (
              <figure
                key={photo.slug}
                className="frame"
                aria-hidden={i !== active}
                style={{ margin: 0 }}
              >
                <Picture photo={photo} priority={i === 0} sizes="(min-width: 820px) 58vw, 92vw" alt={i === active ? photo.alt : ""} />
                <span className="visually-hidden">{dishTitles[i]}</span>
              </figure>
            ))}
          </div>
          <div className="dishes__text">
            <p className="dishes__counter">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3>{dishTitles[active]}</h3>
            <p className="caption">
              Photographed in Farro&apos;s published material. Dish names and availability are confirmed when you
              visit or book.
            </p>
            <div className="dishes__nav">
              <button type="button" onClick={prev} disabled={active === 0} aria-label="Previous plate">
                Previous
              </button>
              <button type="button" onClick={next} disabled={active === total - 1} aria-label="Next plate">
                Next
              </button>
              <ol className="dishes__index" aria-label="Choose a plate">
                {dishFrames.map((_, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      aria-current={i === active ? "true" : undefined}
                      onClick={() => setActive(i)}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <p style={{ marginTop: "2rem" }}>
              <Link className="text-link" to="/menu">
                Explore the menu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu preview: a title-led category-style index (no verified menu data, so these are dishes
// photographed on Instagram, not an official list).
function MenuPreview() {
  const [selected, setSelected] = useState(0);
  const images = [photos.tofu, photos.dumplings, photos.carrot, photos.cake, photos.bar];

  return (
    <section className="chapter chapter--lime" aria-labelledby="menu-preview-title">
      <div className="wrap grid-12 menu-preview__grid">
        <div className="menu-preview__index" data-reveal>
          <p className="chapter-index">Menu preview</p>
          <h2 id="menu-preview-title">Dishes from our kitchen.</h2>
          <ul className="menu-index" aria-label="Dishes seen in Farro material" style={{ marginTop: "2rem" }}>
            {dishesSeen.map((name, i) => (
              <li key={name}>
                <button type="button" aria-pressed={i === selected} onClick={() => setSelected(i)}>
                  <span>{name}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="caption">
            Named from Farro&apos;s Instagram posts. Availability is not confirmed on this site.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn" to="/menu">
              View full menu
            </Link>
          </p>
        </div>
        <figure className="menu-preview__media frame" data-reveal style={{ margin: 0 }}>
          <Picture photo={images[selected % images.length]} sizes="(min-width: 1080px) 40vw, 92vw" />
        </figure>
      </div>
    </section>
  );
}
