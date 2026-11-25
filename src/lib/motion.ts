import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  return window.matchMedia(reducedMotionQuery).matches;
}

let lenis: Lenis | null = null;

// Space to leave above an anchor target: the masthead height plus a little air.
function mastheadOffset(): number {
  const m = document.querySelector<HTMLElement>(".masthead");
  return -((m?.offsetHeight ?? 64) + 16);
}

// One Lenis instance driven by GSAP's ticker (a single RAF loop). Skipped under reduced motion.
// Some Linux browsers (Firefox especially) send wheel deltas in lines, which Lenis does not
// normalise, so the page would crawl. On the first such event we hand scrolling back to the browser.
export function startSmoothScroll(): () => void {
  if (lenis || prefersReducedMotion()) return () => {};

  const instance = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis = instance;
  instance.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => instance.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  const onWheel = (e: WheelEvent) => {
    if (e.deltaMode !== 0) teardown();
  };
  window.addEventListener("wheel", onWheel, { passive: true });

  function teardown() {
    window.removeEventListener("wheel", onWheel);
    gsap.ticker.remove(tick);
    instance.destroy();
    if (lenis === instance) lenis = null;
    document.documentElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
  }

  return teardown;
}

// Modal navigation: stops Lenis and the native scroll together. The scrollbar gutter is kept
// stable (see site.css), so locking does not shift the page sideways.
export function setScrollLocked(locked: boolean): void {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

// Route changes: jump to the top, or to a hash target, without animating.
export function scrollToTop(hash?: string): void {
  if (hash) {
    const target = document.getElementById(hash.slice(1));
    if (target) {
      if (lenis) lenis.scrollTo(target, { immediate: true, offset: mastheadOffset() });
      else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + mastheadOffset(), behavior: "auto" });
      return;
    }
  }
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo({ top: 0, behavior: "auto" });
}

// Fonts change line heights after first paint; ScrollTrigger positions must be recalculated.
if (typeof document !== "undefined" && document.fonts) {
  void document.fonts.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
