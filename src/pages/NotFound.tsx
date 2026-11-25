import { Link } from "react-router-dom";
import { pages } from "../content/farro";
import { useDocumentMeta } from "../lib/seo";

export function NotFound() {
  useDocumentMeta(pages.notFound.title, pages.notFound.description);
  return (
    <section className="intro">
      <div className="wrap">
        <div className="grid12 section__inner">
          <div className="rail">
            <span className="rail__label">404</span>
          </div>
          <div className="section__body">
            <h1 className="display">This page is not on the menu.</h1>
            <div>
              <Link to="/" className="text-link">
                Back to the home page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
