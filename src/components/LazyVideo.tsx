import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

type Props = {
  slug: string;
  alt: string;
  ratio?: string;
  className?: string;
};

// Muted, no autoplay on load. preload="none" means nothing downloads until it is on screen.
// Plays while visible, pauses when it leaves. Native controls keep play/pause accessible.
// shortcut: no transcoded variants (ffmpeg not installed here), so the originals are served; upgrade with H.264 mobile variants.
export function LazyVideo({ slug, alt, ratio = "4 / 5", className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = prefersReducedMotion();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduced) void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={{ aspectRatio: ratio }}
      src={`/media/${slug}.mp4`}
      poster={`/media/${slug}-poster.jpg`}
      muted
      loop
      playsInline
      preload="none"
      controls
      aria-label={alt}
    >
      {alt}
    </video>
  );
}
