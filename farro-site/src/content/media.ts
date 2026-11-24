// Registry of every image used on the site. Files are produced by scripts/process-media.sh.
// Alt text describes what is visible. Names come only from confirmed captions.

export type Photo = {
  src: string;
  srcSet?: string;
  alt: string;
  /** CSS aspect-ratio value. Reserves the box so nothing shifts while images load. */
  ratio: string;
};

const POST_RATIO = "1080 / 918";
const PORTRAIT_RATIO = "4 / 5";
const STILL_RATIO = "16 / 9";

function post(name: string, alt: string, ratio = POST_RATIO): Photo {
  return {
    src: `/media/${name}-800.jpg`,
    srcSet: `/media/${name}-800.jpg 800w, /media/${name}-1600.jpg 1600w`,
    alt,
    ratio,
  };
}

function still(name: string, alt: string, ratio = STILL_RATIO): Photo {
  return { src: `/media/${name}.jpg`, alt, ratio };
}

export const photos = {
  chefPortrait: post(
    "chef-portrait",
    "Chef Vardaan Marwah in a white jacket, holding a glass of red wine in a vineyard",
    PORTRAIT_RATIO,
  ),
  chefBrushSauce: post("chef-brush-sauce", "A chef in a brown apron brushes sauce onto a plate"),
  foodPourCream: post("food-pour-cream", "Cream poured into a white dish of dessert, finished with a pale dollop"),
  foodPlatedBread: post("food-plated-bread", "A flatbread served on a white plate beside a bowl of spiced topping"),
  foodSindhiDal: post("food-sindhi-dal", "A golden curry with peas and curry leaves in a white bowl on a wooden tray"),
  peopleBaking: post("people-baking", "Two cooks in hairnets work at a kitchen counter"),
  peopleMixer: post("people-mixer", "A cook works at a red stand mixer in a tiled kitchen"),
  peopleBrewer: post("people-brewer", "A cook at a brewing station with glass vessels on the counter"),
  drinkPour: post("drink-pour", "A dark red drink being poured into a measuring jug", PORTRAIT_RATIO),
  drinkGlass: post("drink-glass", "A glass of deep red drink, close up", PORTRAIT_RATIO),
  drinkPink: post("drink-pink", "Hands raise two glasses of pink drink over a table of small dishes"),
  marketGreens: post("market-greens", "Two men hold up fresh green produce at a market"),
  marketMen: post("market-men", "Two men stand among market stalls and passers-by"),
  marketVendors: post("market-vendors", "A busy market street lined with vendors and fresh produce"),
  chefsCooking: post("chefs-cooking", "Two chefs cook side by side over a steel counter"),
  diningChef: post("dining-chef", "A chef in an apron talks with guests at a dining table"),
  guestsDining: post("guests-dining", "Guests seated at a warm restaurant table, talking"),
  spacesPlant: post("spaces-plant", "A guest sits beside a tall potted plant in a warm dining room"),
};

// Stills taken from the hero footage (clean frames, checked).
export const stills = {
  hero: { src: "/media/hero-poster.jpg", alt: "A hand serves a shared sweet from a brass bowl under warm light", ratio: STILL_RATIO },
  guests: still("still-guests", "Guests laughing together over a meal at Farro"),
  family: still("still-family", "A family enjoying a festive evening at Farro, with seasonal decorations behind them"),
  staff: still("still-staff", "A member of the Farro team carries plates through the pass"),
};

// Reel loops: muted, no audio, 8 seconds, cut from caption-free stretches (see process-media.sh).
export type Reel = { src: string; poster: string; alt: string; ratio: string };

function reel(name: string, alt: string): Reel {
  return { src: `/media/${name}.mp4`, poster: `/media/${name}-poster.jpg`, alt, ratio: PORTRAIT_RATIO };
}

export const reels = {
  menu: reel("loop-menu", "A server shows a tablet to a guest in a warm dining room"),
  plating: reel("loop-plating", "Plated dishes being served at Farro"),
  interior: reel("loop-interior", "Staff and guests talk in a warm dining room with a Farro sign on the wall"),
  diners: reel("loop-diners", "Guests eat together at a candlelit table"),
  tables: reel("loop-tables", "A speaker addresses guests at a dinner, speaking into a microphone"),
};
