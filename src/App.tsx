import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

// Only the home page is in the initial bundle. Other routes load on demand.
const Story = lazy(() => import("./pages/Story").then((m) => ({ default: m.Story })));
const Menu = lazy(() => import("./pages/Menu").then((m) => ({ default: m.Menu })));
const Experiences = lazy(() =>
  import("./pages/Experiences").then((m) => ({ default: m.Experiences })),
);
const Gallery = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="our-story"
          element={
            <Suspense fallback={null}>
              <Story />
            </Suspense>
          }
        />
        <Route
          path="menu"
          element={
            <Suspense fallback={null}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="experiences"
          element={
            <Suspense fallback={null}>
              <Experiences />
            </Suspense>
          }
        />
        <Route
          path="gallery"
          element={
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
