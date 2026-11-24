# Farro: concept website

An independent concept site for Farro, a restaurant in Koregaon Park, Pune. It is a private pitch prototype, not an official Farro website.

Built with React, Vite, TypeScript, GSAP with ScrollTrigger, Lenis and React Router.

## Run

```bash
npm install
npm run dev        # development server
npm run build      # type check and production build into dist/
npm run preview    # serve dist/ locally
npm run lint       # oxlint
```

## Media

The source files live one folder up from this project and are never modified. To rebuild the web media:

```bash
./scripts/process-media.sh
```

It creates `public/media/` with the hero video (muted, no audio track, H.264), a poster, a mobile fallback and three stills. `src/content/media-inventory.md` lists every asset reviewed and why most were excluded.

## Editing content

All copy, menu items, experiences, gallery items and contact details are in `src/content/farro.ts`. Components do not hold business copy. Items are marked as featured or past, not as the current menu.

## Structure

- `src/pages/`: Home, Story, Menu, Experiences, Gallery, Contact, NotFound (lazy-loaded except Home)
- `src/components/`: Header with full-screen overlay, Footer, Preloader, HeroVideo, ReservationForm, Layout
- `src/lib/motion.ts`: shared easing, duration, reduced-motion check, GSAP context hook and scroll reveals
- `src/lib/smooth-scroll.ts`: Lenis wired to GSAP's ticker (disabled for reduced motion and touch)
- `src/lib/seo.ts`: per-route title and description, restaurant structured data
- `src/styles/global.css`: design tokens and all styles

## Behaviour

- **Preloader**: a short brand intro, shown once per browser session on the home page. It is skipped for reduced motion and has a two-second hard stop.
- **Hero**: looping video on desktop. Mobile (up to 720px), reduced-motion and data-saver visitors get a still. The video pauses when off screen.
- **Navigation overlay**: Escape closes it, focus moves into it and returns to the toggle on close, Tab is trapped inside, and page scroll is locked.
- **Reservation enquiry**: validates name, date, time and guest count. It builds a WhatsApp message and copies it to the clipboard. It never confirms a booking or time slot.
- **Gallery**: filters for categories that have items. Images open in a native `<dialog>`, so Escape and focus return work without extra code.
- **Indexing**: `robots.txt` and `<meta name="robots">` disallow indexing until publication is authorised.

## Deploy to Vercel

1. Push this folder to a private Git repository, or import it with the Vercel CLI.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. Keep the deployment private or protected while the concept is under review. The site is set to `noindex` in both `index.html` and `public/robots.txt`.
4. For a public launch, after authorisation: remove the `noindex` tags, add a canonical URL, and generate a sitemap.

## Unverified business information

Confirm these before publication. Each is marked "to be confirmed" in the UI or omitted from the page:

- Full street address (only "Koregaon Park, Pune" is used)
- Opening hours
- Year for the Four Hands dinner, Farro ki Diwali and the Cobbler & Crew collaboration (listed as past, with dates taken from posts)
- Whether the Shared Leaf and The Farro Brunch are currently offered
- Whether any dish or drink listed as featured is on the current menu
- Whether "Chef Vardaan Marwah and team" wording and roles are accurate
- Whether the bar series names ("Sip Through Origins", "The Alchemist", "Earth & Spirit") are current
- The official menu, if one exists

## Media requiring publication permission

- All photography and video of guests, staff and Chef Vicky Ratnani (hero footage, team stills)
- Any Farro Instagram artwork or post design, if used later
- The chef portrait, once supplied
- Photography from "People of Irada" material: not used here, because it refers to a different project

## Known gaps

- **No clean food, cocktail or chef imagery**: most supplied photos and reels are designed posts with captions. Only the hero footage was verified caption-free, so the dish list and bar sections are typographic. Clean originals from Farro would greatly improve the site.
- **Image format**: WebP encoding is not available in this environment's ffmpeg or sips, so images are optimised JPEG.
- **Hero resolution**: the hero source is 1080×720. It will look soft on large ultrawide screens.
- **Not measured**: Lighthouse, accessibility audits, and cross-browser testing (Safari, Firefox) were not run. Only Chromium was used for checks.
