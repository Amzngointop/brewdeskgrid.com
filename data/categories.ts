export interface Category {
  slug: string;
  name: string;
  label: string;
  blurb: string;
}

// Fixed order — do not reorder. Row 1: Grinders / Presses / Kettles.
// Row 2: Espresso / Frothers / Travel Mugs.
export const categories: Category[] = [
  {
    slug: "coffee-grinders",
    name: "Coffee Grinders",
    label: "Grind fresh",
    blurb: "Burr and blade grinders that turn whole beans into the right texture for your brew method.",
  },
  {
    slug: "french-presses",
    name: "French Presses",
    label: "Full immersion",
    blurb: "Glass and stainless carafes for a rich, full-bodied cup with no paper filter in the way.",
  },
  {
    slug: "electric-kettles",
    name: "Electric Kettles",
    label: "Heat with control",
    blurb: "Fast-boiling kettles, from basic auto-shutoff models to gooseneck pours for precision.",
  },
  {
    slug: "espresso-makers",
    name: "Espresso Makers",
    label: "Concentrated brew",
    blurb: "Stovetop moka pots and electric machines for pulling shots and building milk drinks at home.",
  },
  {
    slug: "milk-frothers",
    name: "Milk Frothers",
    label: "Texture matters",
    blurb: "Handheld and standing frothers that turn cold or warm milk into microfoam for lattes.",
  },
  {
    slug: "travel-coffee-mugs",
    name: "Bottles & Travel Mugs",
    label: "Take it with you",
    blurb: "Insulated travel mugs, tumblers, and water bottles that keep your drink at temperature on the move.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
