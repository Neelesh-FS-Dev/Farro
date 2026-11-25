import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

type Props = { src: string; poster: string; fallback: string; alt: string };

/**
 * Looping, muted hero film. Mobile, reduced-motion and data-saver visitors get
 * the still image. The video pauses whenever it is off screen.
 */
export function HeroVideo({ src, poster, fallback, alt }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Decided once on mount, before the first paint of the video element.
  const [useVideo] = useState(() => {
    const narrow = window.matchMedia("(max-width: 720px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    return !narrow && !prefersReducedMotion() && !saveData;
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [useVideo]);

  return (
    <div className="hero__media" role="img" aria-label={alt}>
      {useVideo ? (
        <video
          ref={videoRef}
          className="hero__video"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <img className="hero__video" src={fallback} alt="" fetchPriority="high" decoding="async" />
      )}
      <div className="hero__shade" aria-hidden="true" />
    </div>
  );
}
