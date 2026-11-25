// Centralised, verified restaurant content. Anything not confirmed is left out or marked.

export const business = {
  name: "Farro",
  tagline: "New Age cuisine inspired by culture, journeys & shared traditions.",
  headline: "Every plate begins somewhere.",
  location: "Koregaon Park · Pune",
  address: "Shop 1/2, 357/1, Lane No. 6, Meera Nagar Garden Society, Koregaon Park, Pune",
  phone: "+91 96993 63706",
  phoneHref: "tel:+919699363706",
  // Verified destinations (checked by hand against the prompt's list).
  reserveUrl: "https://www.district.in/dining/pune/farro-koregaon-park",
  whatsappUrl: "https://wa.link/gxfxjz",
  instagramUrl: "https://www.instagram.com/farro.pune/",
  chefInstagramUrl: "https://www.instagram.com/vardaanmarwah/",
  groupUrl: "https://www.sipandsavour.in/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Farro+Koregaon+Park+Pune",
  hours: "Opening hours are not confirmed on this site. Please check the restaurant listing or call before visiting.",
} as const;

export const chapters = [
  { id: "invitation", label: "01 — The invitation" },
  { id: "philosophy", label: "02 — The philosophy" },
  { id: "kitchen", label: "03 — The kitchen" },
  { id: "food", label: "04 — The food" },
  { id: "bar", label: "05 — The bar" },
  { id: "shared-table", label: "06 — The shared table" },
  { id: "space", label: "07 — The space" },
  { id: "visit", label: "08 — Return to Farro" },
] as const;

// Photographs cleared on inspection (no captions, no logos, no visible text).
export type Photo = { slug: string; alt: string; ratio: string; orient: "portrait" | "landscape" };

export const photos = {
  heroDish: { slug: "dish-sphere", alt: "A plate of spheres in a warm orange sauce, garnished with herbs", ratio: "4 / 5", orient: "portrait" },
  heroSide: { slug: "dish-eggplant", alt: "Charred green chilli on a dark ceramic dish", ratio: "3 / 4", orient: "portrait" },
  chef: { slug: "chef-portrait", alt: "Chef Vardaan Marwah bent over the pass, in black and white", ratio: "3 / 4", orient: "portrait" },
  kitchenLine: { slug: "kitchen-line", alt: "The kitchen line with stainless steel counters and cooks at work, in black and white", ratio: "4 / 5", orient: "portrait" },
  kitchenChef: { slug: "kitchen-chef-cooking", alt: "A chef and a colleague working at the stove, in black and white", ratio: "4 / 5", orient: "portrait" },
  plating: { slug: "kitchen-plating", alt: "Rows of small bowls laid out for service on a steel counter", ratio: "4 / 5", orient: "portrait" },
  dumplings: { slug: "dumplings", alt: "Dumplings served in white bowls on a wooden tray", ratio: "4 / 5", orient: "portrait" },
  bar: { slug: "bar-bottles", alt: "Three bottles of spirit on a warm wooden bar", ratio: "4 / 5", orient: "portrait" },
  croquette: { slug: "dish-croquette", alt: "A golden croquette beside a dark stew, topped with egg and herbs", ratio: "4 / 5", orient: "portrait" },
  cake: { slug: "dish-cake", alt: "A layered dessert plate with a golden sponge and fruit", ratio: "4 / 5", orient: "portrait" },
  carrot: { slug: "dish-carrot", alt: "Shredded carrot salad in a sculpted cream bowl", ratio: "4 / 5", orient: "portrait" },
  tofu: { slug: "dish-tofu", alt: "Cubes of tofu with pepper and herbs on a pale plate", ratio: "4 / 5", orient: "portrait" },
  team: { slug: "kitchen-team", alt: "Cooks working at the kitchen counter, in black and white", ratio: "4 / 5", orient: "portrait" },
  shredded: { slug: "dish-shredded", alt: "A bowl of fine shredded toppings over a rice-based dish", ratio: "4 / 5", orient: "portrait" },
} satisfies Record<string, Photo>;

export const clips = {
  dining: { slug: "dining-room", alt: "Guests seated at a dining room table in warm light" },
  mixing: { slug: "prep-mixing", alt: "Hands folding a mixture in a metal tray during preparation" },
  chef: { slug: "chef-portrait", alt: "A chef in a dark shirt speaking, in warm light" },
  pour: { slug: "pour-drink", alt: "An amber drink poured into a glass on a wooden coaster" },
  flame: { slug: "flame-pan", alt: "Flames rising from a pan on a hot burner" },
  table: { slug: "table-setting", alt: "A dinner table laid for guests with glasses and small dishes" },
} satisfies Record<string, { slug: string; alt: string }>;

// Dishes and beverages seen in Farro's published Instagram material.
// Presented as photographed dishes only. Current availability is NOT confirmed.
export const dishesSeen = [
  "Pashtun kebab",
  "Ghugni chura",
  "Chicken stew",
  "Parmesan jalebi",
  "Thirty-layer truffle latke",
] as const;

export const experiences = [
  {
    title: "The Shared Leaf",
    kind: "Archive",
    dates: "22–23 August (Sat–Sun, 12 PM onwards)",
    note: "A spread of southern favourites served on banana leaves, reimagined through Farro's kitchen.",
  },
  {
    title: "Four-hands dinner for International Chef's Day",
    kind: "Archive",
    dates: "23–24 October, 7 PM onwards",
    note: "A dinner with guest chef Vicky Ratnani and Chef Vardaan Marwah at Farro, Koregaon Park.",
  },
  {
    title: "Farro ki Diwali",
    kind: "Archive",
    dates: "6–8 November (three nights), 7 PM onwards, with live sitar on 7 November",
    note: "Festive dining at Farro in Pune.",
  },
] as const;

export const storyBlocks = [
  "Food carries memories, cultural influences, personal journeys and shared traditions. Farro is where those stories meet around the table.",
  "The name refers to farro, emmer or khapli, an ancient grain. The kitchen draws on contemporary Indian, Mediterranean and Middle Eastern influences.",
  "Public research identifies Chef Vardaan Marwah and Aman Talreja as co-founders. Its interiors pair lime-plastered walls and curved forms with terracotta, teak, plants and warm earthy materials.",
] as const;
