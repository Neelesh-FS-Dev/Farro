# Design research

Written for the Farro concept team, to record what was checked, what was decided, and what was not checked.

**How these findings were gathered.** Each reference below was read as a text summary returned by a web scraper, not reviewed visually, and no screenshots were taken of the reference sites. Where a summary was thin or dominated by cookie-banner text, the finding is marked as weak. No pages were copied, and no reference imagery is used on the site (brief §44).

Status key: **Read** = a text summary was retrieved and used. **Not inspected** = not read in this pass, so no finding is claimed.

## Restaurant references

### Noma: https://noma.dk/about-our-new-website/
- **Status:** Read (article text and page metadata, 2012 article updated 2022).
- **Principle observed:** the website should stay out of the way of the food. The page describes design that is "like a delicate, white, clean plate", not a focus in itself.
- **Section it informs:** overall restraint and navigation.
- **Why it suits Farro:** Farro's identity is warm and layered, so the lesson is to keep chrome quiet and let photography and type lead.
- **Adaptation:** plain paper surfaces, one accent colour (terracotta), no decorative effects.
- **Desktop / tablet / mobile:** same hierarchy; the masthead stays visible on desktop and tablet.
- **Reduced motion:** nothing in the layout depends on motion.
- **Performance:** static layout, no heavy assets from this reference.
- **Licence:** no content reused.
- **Verification:** text only. Weak for visual decisions.

### Dishoom: https://www.dishoom.com/
- **Status:** Read (homepage summary). **Weak:** the summary was mostly cookie-consent text.
- **Principle observed:** a warm, welcoming tone and cultural storytelling ("From Bombay with Love" as the brand line).
- **Section it informs:** the Our Story page and the chapter copy.
- **Adaptation:** Farro's own story (name from the grain, contemporary Indian, Mediterranean and Middle Eastern influences). Dishoom's Bombay-specific identity and graphic language are deliberately not used (brief §05).
- **Verification:** text only. Visual and reservation-flow findings are not claimed.

### Eleven Madison Park: https://www.elevenmadisonpark.com/
- **Status:** Read (homepage summary).
- **Principle observed:** photography leads the page; reservations are a single clear action, routed through an external booking service (Resy, per the summary).
- **Section it informs:** the hero and the reservation CTA. Farro's reservations go to the District listing, which fits this pattern.
- **Adaptation:** photo-led hero, restrained type, one primary CTA.
- **Verification:** text only.

### The Bombay Canteen: https://thebombaycanteen.com/
- **Status:** Read (homepage summary).
- **Principle observed:** "celebrating the diversity of India", with regional storytelling and an approachable tone.
- **Section it informs:** the cultural framing in the philosophy chapter.
- **Adaptation:** the rule against inventing origin stories applies. Farro's copy states only the documented positioning.
- **Verification:** text only. Opening hours shown in the summary were not used, since Farro's hours are not confirmed.

### Ikoyi: https://ikoyilondon.com/
- **Status:** Read (homepage summary).
- **Principle observed:** an ingredient-led identity, with a clear explanation of the food's basis and a reservation calendar that opens monthly.
- **Section it informs:** the food chapter.
- **Adaptation:** ingredient-led language is used only where documented. Farro sourcing claims are not made (brief §39).
- **Verification:** text only.

## Component and motion references

### React Bits: https://reactbits.dev/
- **Status:** Read (homepage summary).
- **Finding:** a large library of animated backgrounds and text effects, installed via the shadcn CLI, with a licence described as flexible for commercial use.
- **Decision:** not used. Its featured effects (animated gradients, wave backgrounds, glow) are what brief §06 rules out. Each component's own licence would need checking before any use.

### Codrops: https://tympanus.net/codrops/
- **Status:** Read (homepage summary: case studies and tutorials on image transitions and GSAP).
- **Finding:** technique-level articles on image transitions and scroll-driven layouts.
- **Decision:** the clip-path image reveal on the hero and dish journal follows the general technique. No Codrops code is copied, and each article's own licence would need checking before any code is taken.

### MotionSites: https://motionsites.ai/
- **Status:** Read (homepage summary).
- **Finding:** a commercial template and prompt marketplace featuring animated backgrounds and 3D portfolio templates.
- **Decision:** not used. Its templates are the generic, motion-heavy look the brief rules out.

## Not inspected in this pass

These are listed so the gap is visible. No finding is claimed for any of them.

- Awwwards, Webflow, siteinspire, curated.design, godly.website, land-book, lapa.ninja, Behance
- shadcn/ui, Aceternity UI, Magic UI, 21st.dev
- Lenis and GSAP official docs. The APIs used (`new Lenis({duration, smoothWheel})`, `lenis.raf`, `scrollTo`, `stop`/`start`, `gsap.registerPlugin(ScrollTrigger)`) are the ones in the installed packages, and the code type-checks against them, but the docs were not read.

## Decisions carried into the build

- Motion is limited to clip reveals, opacity and short y-shifts. No parallax, no pinned sections, no scroll hijacking.
- Lenis runs on one GSAP ticker. It is off under reduced motion, and on Linux browsers that send line-mode wheel deltas it hands scrolling back to the browser.
- Only verified facts appear as facts. Anything else is labelled as a draft or left out.
