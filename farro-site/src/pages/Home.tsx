import { useRef } from "react";
import { Link } from "react-router-dom";
import { contact, home, menu, pages, site } from "../content/farro";
import { photos, reels, stills } from "../content/media";
import { ReelVideo } from "../components/ReelVideo";
import { HeroVideo } from "../components/HeroVideo";
import { Picture } from "../components/Picture";
import { Preloader } from "../components/Preloader";
import { Section } from "../components/Section";
import { Words } from "../components/Words";
import { useDocumentMeta, useRestaurantSchema } from "../lib/seo";
import { maskReveal, parallax, revealOnScroll, scrubWords, useGsap } from "../lib/motion";

// Three chapters, each with the photograph that fits it.
const chapterPhotos = [photos.foodSindhiDal, photos.marketVendors, photos.guestsDining];

export function Home() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.home.title, pages.home.description);
  useRestaurantSchema();

  useGsap(root, () => {
    if (!root.current) return;
    revealOnScroll(root.current);
    maskReveal(root.current);
    scrubWords(root.current);
    parallax(root.current);
  });

  return (
    <div ref={root}>
      <Preloader />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo
          src="/media/hero.mp4"
          poster={stills.hero.src}
          fallback="/media/hero-fallback-800.jpg"
          alt="Guests and staff in a warm, candlelit Farro dining room in Koregaon Park"
        />
        <div className="hero__content wrap">
          <p className="label on-dark rise" style={{ animationDelay: "0.1s" }}>
            Koregaon Park, Pune
          </p>
          <h1 id="hero-title" className="hero__title display rise" style={{ marginTop: "1.25rem" }}>
            {home.hero.headline.map((line, i) => (
              <span key={line} className="rise" style={{ animationDelay: `${0.25 + i * 0.15}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <div className="grid12 hero__foot rise" style={{ animationDelay: "0.6s" }}>
            <p className="lead hero__lead">{home.hero.body}</p>
            <div className="hero__cta">
              <Link to={home.hero.primary.to} className="btn btn--primary">
                {home.hero.primary.label}
              </Link>
              <Link to={home.hero.secondary.to} className="btn btn--ghost">
                {home.hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Philosophy: the statement lights up word by word as the reader scrolls */}
      <Section no="01" label={home.intro.label} labelledBy="intro-title">
        <h2 id="intro-title" className="statement__text">
          <Words text={home.intro.headline} />
        </h2>
        <p className="lead">{home.intro.body}</p>
      </Section>

      {/* 02 Three chapters */}
      <Section no="02" label="Culinary philosophy" labelledBy="chapters-title">
        <h2 id="chapters-title" className="h2 visually-hidden">
          Culture, journeys, shared traditions
        </h2>
        <div className="trio">
          {home.chapters.map((c, i) => (
            <article key={c.no} className="chapter-card" data-reveal>
              <Picture photo={chapterPhotos[i]} sizes="(min-width: 1024px) 30vw, 100vw" />
              <div className="chapter-card__title">
                <span className="item__no">{c.no}</span>
                <h3>{c.title}</h3>
              </div>
              <p className="body">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 03 Kitchen */}
      <Section no="03" label="From the kitchen" labelledBy="kitchen-title">
        <div data-reveal>
          <h2 id="kitchen-title" className="h2">
            Dishes that travel well.
          </h2>
        </div>
        <div className="split">
          <ReelVideo reel={reels.plating} />
          <div className="dishes dishes--single">
            {menu.food.slice(0, 4).map((dish) => (
              <article key={dish.name} className="dish" data-reveal>
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
                <span className="source">{dish.source}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="actions">
          <Link to="/menu" className="text-link">
            Explore the menu
          </Link>
          <p className="note">{menu.note}</p>
        </div>
      </Section>

      {/* 04 The bar */}
      <Section no="04" label="The bar" tone="dark" labelledBy="bar-title">
        <h2 id="bar-title" className="h2">
          Sip through origins.
        </h2>
        <div className="bar-pair">
          <Picture photo={photos.drinkGlass} sizes="(min-width: 1024px) 36vw, 100vw" />
          <Picture photo={photos.drinkPour} sizes="(min-width: 1024px) 36vw, 100vw" />
        </div>
        <div className="bar-pair">
          {menu.drinks.map((d) => (
            <article key={d.name} className="item" data-reveal>
              <h3>{d.name}</h3>
              <p>{d.detail}</p>
              <span className="source">{d.source}</span>
            </article>
          ))}
        </div>
        <div>
          <Link to="/menu" className="text-link">
            Drinks on the menu
          </Link>
        </div>
      </Section>

      {/* Full-bleed feature */}
      <section className="feature" data-parallax="" aria-labelledby="more-title">
        <img src={stills.family.src} alt={stills.family.alt} loading="lazy" decoding="async" />
        <div className="feature__shade" aria-hidden="true" />
        <div className="wrap feature__body">
          <div className="grid12">
            <div className="feature__text">
              <p className="label" data-reveal>
                The Farro experience
              </p>
              <h2 id="more-title" className="h2" data-reveal>
                More than a meal.
              </h2>
              <p className="lead" data-reveal>
                Celebrations, collaborations and long evenings at the table. The room is built for conversations that outlast the last course.
              </p>
              <div data-reveal>
                <Link to="/experiences" className="text-link">
                  Experiences at Farro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 The people: the chef and the team */}
      <Section no="05" label="The people" labelledBy="people-title">
        <div className="people-top">
          <Picture photo={photos.chefPortrait} sizes="(min-width: 1024px) 40vw, 100vw" caption="Chef Vardaan Marwah" />
          <div className="people-top__text">
            <h2 id="people-title" className="h2">
              Chef Vardaan Marwah and team.
            </h2>
            <p className="body">
              The menu is led by Chef Vardaan Marwah and a team of cooks, bartenders and hosts who work across the kitchen, bar and dining room.
            </p>
            <Link to="/our-story" className="text-link">
              Read our story
            </Link>
          </div>
        </div>
        <div className="people-row">
          <Picture photo={photos.chefsCooking} sizes="(min-width: 1024px) 30vw, 100vw" />
          <Picture photo={photos.peopleBaking} sizes="(min-width: 1024px) 30vw, 100vw" />
          <Picture photo={photos.diningChef} sizes="(min-width: 1024px) 30vw, 100vw" />
        </div>
      </Section>

      {/* 06 Reservations */}
      <Section no="06" label="Reservations" tone="green" labelledBy="reserve-title">
        <h2 id="reserve-title" className="reserve-title">
          {home.reservation.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="lead">{home.reservation.body}</p>
        <div className="actions">
          <Link to="/contact" className="btn btn--primary">
            Reserve Your Table
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
            {contact.whatsappLabel}
          </a>
        </div>
      </Section>

      {/* 07 Visit */}
      <Section no="07" label="Visit" labelledBy="visit-title">
        <h2 id="visit-title" className="h2">
          Farro, Koregaon Park.
        </h2>
        <p className="body">
          Find us in Koregaon Park, Pune. The full address and opening hours will be confirmed before publication.
        </p>
        <dl className="details">
          <div className="detail">
            <dt>Address</dt>
            <dd className="tbc">To be confirmed</dd>
          </div>
          <div className="detail">
            <dt>Hours</dt>
            <dd className="tbc">To be confirmed</dd>
          </div>
          <div className="detail">
            <dt>Enquiries</dt>
            <dd>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
                WhatsApp
              </a>
            </dd>
          </div>
          <div className="detail">
            <dt>Instagram</dt>
            <dd>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
                @farro.pune
              </a>
            </dd>
          </div>
        </dl>
        <div>
          <a href={site.directions} target="_blank" rel="noopener noreferrer" className="text-link">
            Get directions
          </a>
        </div>
      </Section>
    </div>
  );
}
