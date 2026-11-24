import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(reducedMotionQuery).matches;
}

// One easing and duration vocabulary for the whole site.
export const ease = { out: "power3.out", inOut: "power2.inOut" } as const;
export const duration = { short: 0.6, base: 1, long: 1.4 } as const;

/**
 * Runs `setup` inside a GSAP context scoped to `scope` and reverts everything
 * (tweens, ScrollTriggers) on unmount. Pass the element that owns the animations.
 */
export function useGsap(
  scope: RefObject<HTMLElement | null>,
  setup: () => void,
  deps: unknown[] = [],
) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(setup, scope.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Standard entrance: elements with [data-reveal] rise and fade in once when
 * they reach the viewport. Reduced-motion users see content immediately.
 */
export function revealOnScroll(root: HTMLElement) {
  if (prefersReducedMotion()) return;
  const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
  items.forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: duration.base,
      ease: ease.out,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });
}

/**
 * Scroll-linked word reveal. Each `.word` inside a [data-words] element fades from
 * dim to full as the reader scrolls through it. Content is readable without motion.
 */
export function scrubWords(root: HTMLElement) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
    gsap.fromTo(
      el.querySelectorAll(".word"),
      { opacity: 0.16 },
      {
        opacity: 1,
        stagger: 0.12,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 55%", scrub: true },
      },
    );
  });
}

/** Subtle vertical drift for photographs inside [data-parallax] frames. */
export function parallax(root: HTMLElement) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-parallax] img").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

/** Image mask reveal: the picture opens from its bottom edge as it enters. */
export function maskReveal(root: HTMLElement) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-mask]").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: duration.long,
        ease: ease.inOut,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  });
}
