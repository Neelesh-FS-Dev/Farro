import type { Photo } from "./farro";
import { photos } from "./farro";

// Journal entries are DRAFTS built from Instagram captions only (brief §21, §27).
// No article text is invented: each body line is either a caption quoted from a post or a note
// marking what still needs confirmation. Replace each draft after the team approves it.
export type JournalEntry = {
  slug: string;
  title: string;
  kicker: string;
  standfirst: string;
  body: string[];
  photo: Photo;
  source: string;
  dates?: string;
};

export const journal: JournalEntry[] = [
  {
    slug: "sip-through-origins",
    title: "Earth & Spirit",
    kicker: "Sip Through Origins",
    standfirst: "Lacto-fermented plums bring a deep, sweet-tart character, layered with earthy cacao.",
    body: [
      "From Farro's Sip Through Origins series, as described in the restaurant's post: the soul of Earth & Spirit is lacto-fermented plums, with a sweet-tart character layered with earthy cacao.",
      "Draft note: the full story behind the drink (origin, method, and who made it) is not yet confirmed.",
    ],
    photo: photos.bar,
    source: "Instagram caption, Farro (Sip Through Origins)",
  },
  {
    slug: "the-shared-leaf",
    title: "A spread, shared",
    kicker: "The Shared Leaf",
    standfirst: "A spread of southern favourites, reimagined through Farro's lens.",
    body: [
      "The Shared Leaf brought a spread of southern favourites to the table, reimagined through Farro's kitchen and served for sharing.",
      "Draft note: the dishes served and the chefs' own description of the menu are not yet confirmed.",
    ],
    photo: photos.dumplings,
    source: "Instagram caption, Farro (The Shared Leaf)",
    dates: "22–23 August (Sat–Sun, 12 PM onwards)",
  },
  {
    slug: "four-hands-chefs-day",
    title: "Four hands on International Chef's Day",
    kicker: "Four-hands dinner",
    standfirst: "An exclusive four-hands dinner at Farro, Koregaon Park, with guest chef Vicky Ratnani and Chef Vardaan Marwah.",
    body: [
      "Chef Vicky Ratnani and Chef Vardaan Marwah cooked a four-hands dinner at Farro on International Chef's Day.",
      "Draft note: the menu and the chefs' own words about the evening are not yet confirmed.",
    ],
    photo: photos.team,
    source: "Instagram caption, Farro (four-hands dinner)",
    dates: "23–24 October, 7 PM onwards",
  },
  {
    slug: "farro-ki-diwali",
    title: "Farro ki Diwali",
    kicker: "Festive dining",
    standfirst: "Three nights of festive dining at Farro, with live sitar on the second night.",
    body: [
      "Farro ki Diwali ran for three nights of festive dining at Farro, Pune, from 7 PM onwards, with live sitar on 7 November.",
      "Draft note: the festive menu and the team's own account of the nights are not yet confirmed.",
    ],
    photo: photos.cake,
    source: "Instagram caption, Farro (Farro ki Diwali)",
    dates: "6–8 November, 7 PM onwards",
  },
];

export function findJournal(slug: string | undefined): JournalEntry | undefined {
  return journal.find((j) => j.slug === slug);
}
