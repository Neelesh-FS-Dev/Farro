import type { Photo } from "../content/farro";

type Props = {
  photo: Photo;
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string; // overrides the photo's own alt text, e.g. "" for decorative use
};

// WebP with JPEG fallback at two widths. Lazy by default; the LCP image opts in with priority.
export function Picture({ photo, sizes = "(min-width: 1080px) 40vw, 92vw", priority = false, className, alt }: Props) {
  const src = (ext: "webp" | "jpg") => `/media/${photo.slug}-640.${ext} 640w, /media/${photo.slug}-1024.${ext} 1024w`;
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={src("webp")} sizes={sizes} />
      <img
        src={`/media/${photo.slug}-1024.jpg`}
        srcSet={src("jpg")}
        sizes={sizes}
        width={1024}
        height={1280}
        alt={alt ?? photo.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{ aspectRatio: photo.ratio }}
      />
    </picture>
  );
}
