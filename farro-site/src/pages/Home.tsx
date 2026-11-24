import { useRef } from "react";
import { Link } from "react-router-dom";
import { contact, home, menu, pages, site } from "../content/farro";
import { HeroVideo } from "../components/HeroVideo";
import { Preloader } from "../components/Preloader";
import { useDocumentMeta, useRestaurantSchema } from "../lib/seo";
import { maskReveal, revealOnScroll, useGsap } from "../lib/motion";

export function Home() {
  const root = useRef<HTMLDivElement>(null);
  useDocumentMeta(pages.home.title, pages.home.description);
  useRestaurantSchema();

  useGsap(root, () => {
    if (!root.current) return;
    revealOnScroll(root.current);
    maskReveal(root.current);
  });

  const featured = menu.food.slice(0, 4);

  return (
    <div ref={root}>
      <Preloader />

      {/* 01-03: Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo
          src="/media/hero.mp4"
          poster="/media/hero-poster.jpg"
          fallback="/media/hero-fallback-800.jpg"
          alt="Guests and staff in a warm, candlelit Farro dining room in Koregaon Park"
        />
        <div className="hero__content">
          <p className="eyebrow on-dark rise" style={{ animationDelay: "0.1s" }}>
            Koregaon Park, Pune
          </p>
          <h1 id="hero-title" className="hero__title display-xl">
            {home.hero.headline.map((line, i) => (
              <span key={line} className="line rise" style={{ animationDelay: `${0.25 + i * 0.15}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <div className="hero__actions rise" style={{ animationDelay: "0.6s" }}>
            <p className="lead" style={{ color: "var(--fg-dark)", maxWidth: "30ch" }}>
              {home.hero.body}
            </p>
            <Link to={home.hero.primary.to} className="button button--primary">
              {home.hero.primary.label}
            </Link>
            <Link to={home.hero.secondary.to} className="button button--ghost" style={{ color: "var(--fg-dark)" }}>
              {home.hero.secondary.label}
            </Link>
          </div>
        </div>
        <span className="hero__scroll" aria-hidden="true">
          Scroll
        </span>
      </section>

      {/* 04: Brand introduction */}
      <section className="section" aria-labelledby="intro-title">
        <div className="intro wrap">
          <div className="intro__text">
            <p className="eyebrow" data-reveal>
              {home.intro.label}
            </p>
            <h2 id="intro-title" className="display-l" data-reveal>
              {home.intro.headline}
            </h2>
            <p className="lead" data-reveal>
              {home.intro.body}
            </p>
          </div>
          <figure className="intro__image">
            <div data-mask>
              <img
                src="/media/still-guests.jpg"
                alt="Guests laughing together over a meal at Farro"
                loading="lazy"
                decoding="async"
                width={1080}
                height={608}
              />
            </div>
            <figcaption className="intro__caption">Guests sharing a table at Farro.</figcaption>
          </figure>
        </div>
      </section>

      {/* 05: Culinary philosophy, three chapters */}
      <section className="section section--tight" aria-labelledby="chapters-title">
        <div className="wrap chapters">
          <div className="chapters__title">
            <p className="eyebrow" data-reveal>
              Culinary philosophy
            </p>
            <h2 id="chapters-title" className="display-l" data-reveal style={{ marginTop: "1rem" }}>
              Culture, journeys, shared traditions.
            </h2>
          </div>
          <div>
            {home.chapters.map((c) => (
              <article key={c.no} className="chapter" data-reveal>
                <span className="chapter__no">{c.no}</span>
                <h3>{c.title}</h3>
                <p className="body-copy">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06: From the kitchen */}
      <section className="section" aria-labelledby="kitchen-title">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            From the kitchen
          </p>
          <h2 id="kitchen-title" className="display-l" data-reveal style={{ marginTop: "1rem", maxWidth: "15ch" }}>
            Dishes that travel well.
          </h2>
          <ul className="dish-list" style={{ marginTop: "3.5rem" }} data-reveal>
            {featured.map((dish) => (
              <li key={dish.name}>
                <h3>{dish.name}</h3>
                <p>
                  {dish.detail}
                  <span className="dish-list__source">{dish.source}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="note" style={{ marginTop: "2rem" }} data-reveal>
            {menu.note}
          </p>
          <p style={{ marginTop: "2rem" }}>
            <Link to="/menu" className="text-link">
              Explore the menu
            </Link>
          </p>
        </div>
      </section>

      {/* 08: The bar */}
      <section className="section section--dark" aria-labelledby="bar-title">
        <div className="wrap" style={{ display: "grid", gap: "3rem" }}>
          <div>
            <p className="eyebrow" data-reveal>
              The bar
            </p>
            <h2 id="bar-title" className="display-l" data-reveal style={{ marginTop: "1rem", maxWidth: "14ch" }}>
              Sip through origins.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(2rem, 1rem + 3vw, 4rem)" }}>
            {menu.drinks.map((d) => (
              <article key={d.name} className="drink" data-reveal>
                <p className="eyebrow">{d.source}</p>
                <h3 style={{ marginTop: "0.75rem" }}>{d.name}</h3>
                <p>{d.detail}</p>
              </article>
            ))}
          </div>
          <p>
            <Link to="/menu" className="text-link">
              Drinks on the menu
            </Link>
          </p>
        </div>
      </section>

      {/* 09: More than a meal */}
      <section className="feature" aria-labelledby="more-title">
        <img
          src="/media/still-family.jpg"
          alt="A family enjoying a festive evening at Farro, with seasonal decorations behind them"
          loading="lazy"
          decoding="async"
        />
        <div className="feature__shade" aria-hidden="true" />
        <div className="feature__body">
          <p className="eyebrow" data-reveal>
            The Farro experience
          </p>
          <h2 id="more-title" className="display-l" data-reveal>
            More than a meal.
          </h2>
          <p className="lead" data-reveal style={{ color: "var(--fg-dark-2)" }}>
            Celebrations, collaborations and long evenings at the table. The room is built for conversations that outlast the last course.
          </p>
          <p data-reveal>
            <Link to="/experiences" className="text-link">
              Experiences at Farro
            </Link>
          </p>
        </div>
      </section>

      {/* 07: Meet the chef and team */}
      <section className="section" aria-labelledby="chef-title">
        <div className="wrap split">
          <div className="split__media" data-mask>
            <img
              src="/media/still-staff.jpg"
              alt="A member of the Farro team carries plates through the pass"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="split__text">
            <p className="eyebrow" data-reveal>
              The people
            </p>
            <h2 id="chef-title" className="display-l" data-reveal>
              Chef Vardaan Marwah and team.
            </h2>
            <p className="body-copy" data-reveal>
              The menu is led by Chef Vardaan Marwah and a team of cooks, bartenders and hosts who work across the kitchen, bar and dining room.
            </p>
            <Link to="/our-story" className="text-link" data-reveal>
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* 11: Reservation */}
      <section className="section section--green" aria-labelledby="reserve-title">
        <div className="wrap reserve">
          <p className="eyebrow" data-reveal>
            Reservations
          </p>
          <h2 id="reserve-title" className="display-xl" data-reveal>
            {home.reservation.headline.map((line) => (
              <span key={line} className="line" style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </h2>
          <p className="lead" data-reveal style={{ color: "var(--fg-dark-2)" }}>
            {home.reservation.body}
          </p>
          <div className="reserve__actions" data-reveal>
            <Link to="/contact" className="button button--primary">
              Reserve Your Table
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
              {contact.whatsappLabel}
            </a>
          </div>
        </div>
      </section>

      {/* 12: Location */}
      <section className="section" aria-labelledby="visit-title">
        <div className="wrap location">
          <div className="location__main">
            <p className="eyebrow" data-reveal>
              Visit
            </p>
            <h2 id="visit-title" className="display-m" data-reveal>
              Farro, Koregaon Park.
            </h2>
            <p className="body-copy" data-reveal>
              Find us in Koregaon Park, Pune. The full address and opening hours will be confirmed before publication.
            </p>
            <p data-reveal>
              <a href={site.directions} target="_blank" rel="noopener noreferrer" className="text-link">
                Get directions
              </a>
            </p>
          </div>
          <dl className="location__list" data-reveal>
            <div>
              <dt>Address</dt>
              <dd className="tbc">To be confirmed</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd className="tbc">To be confirmed</dd>
            </div>
            <div>
              <dt>Enquiries</dt>
              <dd>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
                  WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
                  @farro.pune
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
