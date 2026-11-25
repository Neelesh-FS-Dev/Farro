import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="wrap not-found">
      <p className="chapter-index">Page not found</p>
      <h1>This page is not on the menu.</h1>
      <p className="lede">The link may be out of date. Start again from the table.</p>
      <p>
        <Link className="btn btn--primary" to="/">
          Back to Farro
        </Link>
      </p>
    </main>
  );
}
