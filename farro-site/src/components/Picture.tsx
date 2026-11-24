import type { Photo } from "../content/media";

type Props = {
  photo: Photo;
  className?: string;
  /** Rendered width at each breakpoint, used to pick the right srcset file. */
  sizes?: string;
  /** Only for the first image on a page. Everything else loads lazily. */
  eager?: boolean;
  caption?: string;
};

/** Image in a frame with a reserved aspect ratio, responsive sources and an optional caption. */
export function Picture({ photo, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", eager, caption }: Props) {
  return (
    <figure className={`picture ${className}`.trim()} style={{ aspectRatio: photo.ratio }}>
      <div className="picture__frame" data-mask="">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={photo.srcSet ? sizes : undefined}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : undefined}
        />
      </div>
      {caption && <figcaption className="picture__caption">{caption}</figcaption>}
    </figure>
  );
}
