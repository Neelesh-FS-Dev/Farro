import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ease, prefersReducedMotion } from "../lib/motion";

const SEEN_KEY = "farro-intro-seen";
const MAX_MS = 2200; // Hard stop so a slow network never holds the page.

/** Brief brand intro, shown once per browser session on the home page. */
export function Preloader({ onDone = () => undefined }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !prefersReducedMotion() && !sessionStorage.getItem(SEEN_KEY);
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      onDone();
      return;
    }
    sessionStorage.setItem(SEEN_KEY, "1");
    const el = ref.current;
    if (!el) return;

    const word = el.querySelector<HTMLElement>(".preloader__word");
    const tl = gsap.timeline({ onComplete: () => setVisible(false) });
    tl.fromTo(word, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: ease.out })
      .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.9, ease: ease.inOut, delay: 0.25 })
      .add(onDone, "-=0.4");

    const fallback = window.setTimeout(() => tl.progress(1), MAX_MS);
    return () => {
      window.clearTimeout(fallback);
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;
  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <span className="preloader__mask">
        <span className="preloader__word">Farro</span>
      </span>
    </div>
  );
}
