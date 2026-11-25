# Farro · A Table of Stories

Private concept website for Farro, a restaurant and cocktail bar in Koregaon Park, Pune. Built by Codevirel Studio as an independent proposal. Not commissioned by Farro. Noindexed until publication is authorised.

## Run

```bash
npm install
npm run dev        # local development
npm run build      # type-check (tsc -b) and production build to dist/
npm run preview    # serve the built site
npm test           # content tests (vitest)
npm run lint       # oxlint
```

## Structure

- `src/content/farro.ts`: business facts, reservation and contact links, media slugs, archived experiences, story copy. **Edit content here.**
- `src/content/journal.ts`: draft journal entries (marked as drafts until approved).
- `src/content/content.test.ts`: checks that referenced media exists, links are HTTPS, the phone link matches the number, and journal entries are drafts.
- `src/styles/tokens.css`: design tokens (colour, type scale, grid, motion) from the brief.
- `src/styles/site.css`: layout and components, with breakpoints at 1080px, 820px and 640px.
- `src/lib/motion.ts`: Lenis and GSAP ScrollTrigger in one ticker, scroll lock, anchor offsets.
- `src/components/`: Header (masthead and mobile sheet), Footer, Picture (responsive WebP/JPEG), LazyVideo (muted, visible-only).
- `src/pages/`: Home (chapters), Menu, Story, Experiences, Visit, Journal (index and entries), NotFound.
- `index.html`: includes a static hero so the first paint does not wait for JavaScript.
- `docs/`: `DESIGN_RESEARCH.md` (references and what was checked), `MEDIA_INVENTORY.md` (every source file and its decision).

## Media

Originals live in `media-source/` and are never served or edited. Run `scripts/build-media.sh` to regenerate `public/media/` (macOS: needs `sips`, `qlmanage`, and `cwebp` from `brew install webp`).

## Verification status

- Type-check, lint, production build and 35 content tests pass.
- Browser QA (Playwright on Chrome): no horizontal overflow at 320, 390, 430, 768, 820, 1024, 1280, 1440 and 1920px across all routes; no console errors; no broken images; reveals end fully visible after a full scroll; the mobile menu opens, closes on Escape, and returns focus.
- Lighthouse (local preview): desktop performance 98, accessibility 100; mobile performance 82 with LCP 4.4s on the simulated mobile connection.

## Known limits

- **Mobile LCP** is above the 2.5s target. The app is client-rendered, the main bundle is about 140 KB gzipped, and the hero image is the LCP element. Prerendering the routes would be the next step.
- **SEO score** is low by design: the site is noindexed while the concept is private.
- **Clips** are served at original resolution (up to about 11 MB). No transcoder is installed, so mobile-size variants are not generated. AVIF is not generated either (no encoder here).
- **Linux**: scroll behaviour was tested with simulated line-mode wheel events and the scrollbar gutter is reserved, but the site has not been run on a real Linux desktop.
- **Permissions**: no photograph or video has confirmed publication rights (brief §44).
- **Content still to confirm**: opening hours, menu items and prices, event years, and the WhatsApp link (it did not respond from the build machine).
