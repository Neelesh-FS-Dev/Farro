// Single source of editable content. Anything not confirmed by the business is
// marked `verified: false` in comments and listed in README.md under
// "Unverified business information". Do not invent prices, hours or history here.

export const site = {
  name: "Farro",
  tagline: "New Age cuisine shaped by culture, journeys and shared traditions.",
  location: "Koregaon Park, Pune",
  instagram: "https://www.instagram.com/farro.pune/",
  whatsapp: "https://wa.link/gxfxjz",
  directions: "https://www.google.com/maps/search/?api=1&query=Farro+Koregaon+Park+Pune",
  // Address and hours are not verified. Shown as "to be confirmed" in the UI.
  address: null as string | null,
  hours: null as string | null,
  chef: "Chef Vardaan Marwah and team",
  disclosure:
    "An independent design concept prepared for discussion with the restaurant. Not an official Farro website, and not commissioned or endorsed by Farro.",
} as const;

export const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const pages = {
  home: {
    title: "Farro | New Age cuisine in Koregaon Park, Pune",
    description:
      "Farro is a contemporary restaurant in Koregaon Park, Pune, serving New Age cuisine shaped by culture, journeys and shared traditions.",
  },
  story: {
    title: "Our Story | Farro, Pune",
    description:
      "The culinary philosophy behind Farro: culture, journeys and shared traditions on one table.",
  },
  menu: {
    title: "Menu | Farro, Pune",
    description:
      "Dishes and drinks featured at Farro, Koregaon Park. The current menu is shared on enquiry.",
  },
  experiences: {
    title: "Experiences | Farro, Pune",
    description:
      "Brunch, chef collaborations and special dinners at Farro, Koregaon Park, Pune.",
  },
  gallery: {
    title: "Gallery | Farro, Pune",
    description: "A visual journal from Farro's kitchen, bar and dining room in Koregaon Park.",
  },
  contact: {
    title: "Contact & Reservations | Farro, Pune",
    description: "Reserve a table at Farro in Koregaon Park, Pune, or send an enquiry on WhatsApp.",
  },
  notFound: {
    title: "Page not found | Farro",
    description: "This page could not be found.",
  },
} as const;

export const home = {
  hero: {
    headline: ["Inspired by journeys.", "Made to be shared."],
    body: "New Age cuisine shaped by culture, journeys and shared traditions.",
    primary: { label: "Reserve a Table", to: "/contact" },
    secondary: { label: "Discover Farro", to: "/our-story" },
  },
  intro: {
    label: "Philosophy",
    headline: "Every plate carries a journey.",
    body: "Farro cooks from the places people carry with them: the dishes of a grandmother's kitchen, a market on a long trip, a family table shared across regions. The menu moves with the season and with the cooks who bring their own stories to it.",
  },
  chapters: [
    {
      no: "01",
      title: "Culture",
      body: "Familiar ingredients, read through a new lens. Recipes are treated as living things, not museum pieces.",
    },
    {
      no: "02",
      title: "Journeys",
      body: "A plate can hold a route. Flavours gathered on the road are given room to change the way a dish tastes at home.",
    },
    {
      no: "03",
      title: "Shared Traditions",
      body: "Food that is made to be passed around. Larger plates, shared leaves, and conversations that stretch past the last course.",
    },
  ],
  reservation: {
    headline: ["Come hungry.", "Leave with a story."],
    body: "Send us your preferred date, time and party size. Reservations are subject to confirmation by the restaurant.",
  },
};

// Menu content. Items come from Farro's published Instagram material and are
// labelled as featured, not as the current menu. No prices or dietary claims.
export const menu = {
  note: "The current menu is shared on enquiry. The dishes below were featured in Farro's recent publications and may not be on the menu today.",
  food: [
    { name: "Kerala-style stew", detail: "Served with coconut broth and crispy carrots.", source: "Featured post" },
    { name: "Erissery", detail: "Polichathu-inspired sauce, a south Indian comfort dish.", source: "Featured reel" },
    { name: "Daryaganj butter chicken", detail: "Tandoor-roasted chicken, tomato-butter gravy, black garlic naan.", source: "Featured reel" },
    { name: "Kakori kebab", detail: "Silken lamb kebab, brown butter confit, charred tomato salsa.", source: "Featured reel" },
    { name: "Dal makhani", detail: "Black lentils, slow-cooked overnight, smoked butter.", source: "Featured post" },
    { name: "Trio dhingri", detail: "Shimeji, button mushroom, oyster mushroom, aleppo chilli, restaurant chilli, thyme.", source: "Featured post" },
  ],
  shared: {
    name: "The Shared Leaf",
    detail: "A spread of southern favourites on a banana leaf, designed to be shared at the table.",
  },
  drinks: [
    {
      name: "The Alchemist",
      detail: "From the Sip Through Origins series: an apricot-led serve in a rocks glass.",
      source: "Featured post",
    },
    {
      name: "Earth & Spirit",
      detail: "Lacto-fermented plums, sweet-tart and layered with earthy cacao. Part of the same series.",
      source: "Featured post",
    },
  ],
  brunch: {
    name: "The Farro Brunch",
    detail: "Featured desserts from brunch include caramelised milk cake with pistachio barfi and a saffron-raspberry parfait.",
  },
};

// Past experiences only. No upcoming dates have been confirmed.
export type Experience = {
  title: string;
  kind: string;
  when: string;
  body: string;
};

export const experiences = {
  upcoming: [] as Experience[],
  past: [
    {
      title: "Four hands dinner with Chef Vicky Ratnani",
      kind: "Chef collaboration",
      when: "International Chef's Day, 23-24 October (year to be confirmed)",
      body: "Chef Vicky Ratnani and Chef Vardaan Marwah shared one kitchen across an evening of collaborative plates.",
    },
    {
      title: "Farro ki Diwali",
      kind: "Seasonal celebration",
      when: "6-8 November (year to be confirmed)",
      body: "Three nights of festive dining with live sitar and a seasonal menu built around the celebration.",
    },
    {
      title: "Farro x Cobbler & Crew",
      kind: "Collaboration",
      when: "Date to be confirmed",
      body: "A seven-course nostalgic journey across India, with cocktails created for the evening.",
    },
    {
      title: "The Farro Brunch",
      kind: "Brunch",
      when: "Recurring, dates to be confirmed",
      body: "A relaxed weekend brunch with desserts such as caramelised milk cake and pistachio barfi.",
    },
  ] as Experience[],
};

export const story = {
  opener: "Farro is a table for people who like to travel with their food.",
  chapters: [
    {
      label: "Culture",
      headline: "Ingredients carry memory.",
      body: "The kitchen draws on regional Indian cooking and the cooks' own histories. The aim is to keep what makes a dish true, and change only how it is presented and shared.",
    },
    {
      label: "Journeys",
      headline: "A menu that moves.",
      body: "Ideas arrive from markets, travels and collaborations, then settle into the menu. Some stay. Some return for a season.",
    },
    {
      label: "Shared traditions",
      headline: "Made to be passed around.",
      body: "Plates come to the centre of the table. Leaves, platters and sharing portions turn a meal into a conversation.",
    },
  ],
  people: {
    label: "The people",
    headline: "Chef Vardaan Marwah and team.",
    body: "The menu is led by Chef Vardaan Marwah and a team of cooks, bartenders and hosts who work across the kitchen, bar and dining room.",
  },
};

export const gallery = {
  categories: ["All", "Food", "Cocktails", "People", "Spaces"] as const,
  items: [
    { src: "/media/hero-poster.jpg", alt: "A hand serves a shared sweet from a brass bowl under warm light", category: "Food", caption: "Shared sweets" },
    { src: "/media/still-guests.jpg", alt: "Guests laughing together over lunch at a table in Farro", category: "People", caption: "Guests at the table" },
    { src: "/media/still-family.jpg", alt: "A father and young child at a festive celebration in Farro", category: "People", caption: "Celebrations" },
    { src: "/media/still-staff.jpg", alt: "A member of the Farro team carries plates through the pass", category: "People", caption: "The team" },
  ] as const,
};

export const contact = {
  whatsappLabel: "Message on WhatsApp",
  instagramLabel: "@farro.pune",
  note: "Reservations are subject to confirmation. We will reply to your enquiry on WhatsApp.",
};
