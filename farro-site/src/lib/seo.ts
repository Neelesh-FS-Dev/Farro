import { useEffect } from "react";
import { site } from "../content/farro";

/** Sets the document title and description for the current route. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}

/**
 * Restaurant structured data limited to verified facts. Address and hours are
 * omitted until the business confirms them.
 */
export function useRestaurantSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schema = "restaurant";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: site.name,
      servesCuisine: "New Age cuisine",
      description: site.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [site.instagram],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
}
