import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { scrollControl, startSmoothScroll } from "../lib/smooth-scroll";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => startSmoothScroll(), []);

  // Each route starts at the top; a hash-less navigation should not keep the old position.
  useEffect(() => {
    scrollControl.toTop();
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
