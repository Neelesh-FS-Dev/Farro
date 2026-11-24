import { Link } from "react-router-dom";
import { pages } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";

export function NotFound() {
  useDocumentMeta(pages.notFound.title, pages.notFound.description);
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1 className="display-l">This page is not on the menu.</h1>
      <p>
        <Link to="/" className="text-link">
          Back to the home page
        </Link>
      </p>
    </section>
  );
}
