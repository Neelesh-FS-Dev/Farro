import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion";

// Shared handle so overlays can pause smooth scrolling and routes can reset position.
export const scrollControl: {
  lenis: Lenis | null;
  stop: () => void;
  start: () => void;
  toTop: () => void;
} = {
  lenis: null,
  stop() {
    this.lenis?.stop();
    document.documentElement.classList.add("is-locked");
  },
  start() {
    this.lenis?.start();
    document.documentElement.classList.remove("is-locked");
  },
  toTop() {
    if (this.lenis) this.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  },
};

/** Starts Lenis and syncs it with GSAP's ticker. Returns a cleanup function. */
export function startSmoothScroll(): () => void {
  // Reduced-motion users keep native scrolling. Everyone else gets Lenis. Touch
  // devices keep their native momentum (syncTouch stays off) while Lenis keeps
  // scroll-linked animations in step.
  if (prefersReducedMotion()) {
    return () => {};
  }

  const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
  scrollControl.lenis = lenis;

  const onLenisScroll = () => ScrollTrigger.update();
  lenis.on("scroll", onLenisScroll);

  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.off("scroll", onLenisScroll);
    lenis.destroy();
    scrollControl.lenis = null;
    document.documentElement.classList.remove("is-locked");
  };
}
