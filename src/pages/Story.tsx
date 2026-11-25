import { Link } from "react-router-dom";
import { Picture } from "../components/Picture";
import { LazyVideo } from "../components/LazyVideo";
import { business, clips, photos, storyBlocks } from "../content/farro";

export function Story() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="chapter" aria-labelledby="story-title">
        <div className="wrap grid-12">
          <div style={{ gridColumn: "1 / span 8" }}>
            <p className="chapter-index">Our story</p>
            <h1 id="story-title">Inspired by culture, shaped by journeys.</h1>
          </div>
          <div className="story-body" style={{ gridColumn: "1 / span 7" }}>
            {storyBlocks.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter chapter--lime" aria-labelledby="chef-title">
        <div className="wrap story-gallery">
          <figure className="a frame" style={{ margin: 0 }}>
            <Picture photo={photos.chef} sizes="(min-width: 820px) 56vw, 92vw" />
            <figcaption className="caption">Chef Vardaan Marwah.</figcaption>
          </figure>
          <div className="b">
            <h2 id="chef-title" style={{ fontSize: "clamp(2rem, 1.4rem + 1.6vw, 3rem)" }}>
              The chef and the team
            </h2>
            <p className="measure" style={{ marginTop: "1.25rem" }}>
              Public research identifies Chef Vardaan Marwah as a co-founder of Farro. His career history and personal
              quotations are not reproduced here, as they have not been verified.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <a className="text-link" href={business.chefInstagramUrl} target="_blank" rel="noopener noreferrer">
                Chef on Instagram
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="kitchen-film-title">
        <div className="wrap story-gallery">
          <div className="a">
            <h2 id="kitchen-film-title" style={{ fontSize: "clamp(2rem, 1.4rem + 1.6vw, 3rem)" }}>
              From the kitchen
            </h2>
            <p className="measure" style={{ marginTop: "1rem" }}>
              Short, muted footage of preparation at Farro. Play and pause with the controls.
            </p>
          </div>
          <figure className="b frame" style={{ margin: 0 }}>
            <LazyVideo slug={clips.chef.slug} alt={clips.chef.alt} />
          </figure>
        </div>
      </section>

      <section className="chapter chapter--wine" aria-labelledby="space-title-story">
        <div className="wrap">
          <p className="chapter-index">The space</p>
          <h2 id="space-title-story">A place to stay a little longer.</h2>
          <p className="lede measure" style={{ marginTop: "1.25rem" }}>
            Lime-plastered walls, curved architectural forms, terracotta, teak wood, plants and warm earthy materials.
          </p>
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn" to="/visit">
              Plan your visit
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
