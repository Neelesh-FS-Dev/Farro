import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { business } from "./content/farro";
import { scrollToTop, startSmoothScroll } from "./lib/motion";
import { Home } from "./pages/Home";

// Route-level code splitting (brief §40): only the home route is in the first bundle.
const Menu = lazy(() => import("./pages/Menu").then((m) => ({ default: m.Menu })));
const Story = lazy(() => import("./pages/Story").then((m) => ({ default: m.Story })));
const Experiences = lazy(() => import("./pages/Experiences").then((m) => ({ default: m.Experiences })));
const Visit = lazy(() => import("./pages/Visit").then((m) => ({ default: m.Visit })));
const Journal = lazy(() => import("./pages/Journal").then((m) => ({ default: m.Journal })));
const JournalEntryPage = lazy(() => import("./pages/Journal").then((m) => ({ default: m.JournalEntryPage })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

const titles: Record<string, string> = {
  "/": `Farro · ${business.headline}`,
  "/menu": "Menu · Farro, Koregaon Park",
  "/our-story": "Our Story · Farro, Koregaon Park",
  "/experiences": "Experiences · Farro, Koregaon Park",
  "/visit": "Visit · Farro, Koregaon Park",
  "/journal": "Journal · Farro, Koregaon Park",
};

export function App() {
  const location = useLocation();

  // One smooth-scroll loop for the whole app, cleaned up on unmount.
  useEffect(() => startSmoothScroll(), []);

  // Route-level scroll restoration, page title and focus on navigation.
  useEffect(() => {
    scrollToTop(location.hash || undefined);
    document.title = titles[location.pathname] ?? (location.pathname.startsWith("/journal/") ? "Journal · Farro" : "Farro · Page not found");
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalEntryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
