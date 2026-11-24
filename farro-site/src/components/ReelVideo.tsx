import { useEffect, useRef } from "react";
import type { Reel } from "../content/media";
import { prefersReducedMotion } from "../lib/motion";

type Props = { reel: Reel; caption?: string; className?: string };

/**
 * Muted looping reel. Plays only while on screen, and pauses when it scrolls away.
 * Reduced-motion visitors see the poster frame and nothing moves.
 */
export function ReelVideo({ reel, caption, className = "" }: Props) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el || prefersReducedMotion()) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={`picture reel ${className}`.trim()} style={{ aspectRatio: reel.ratio }}>
      <div className="picture__frame">
        <video
          ref={video}
          src={reel.src}
          poster={reel.poster}
          aria-label={reel.alt}
          muted
          loop
          playsInline
          autoPlay={!prefersReducedMotion()}
          preload="metadata"
          disablePictureInPicture
        />
      </div>
      {caption && <figcaption className="picture__caption">{caption}</figcaption>}
    </figure>
  );
}
