export type Product = {
  slug: string;
  title: string;
  category: "Mirrors" | "Frames" | "Objects";
  shortDescription: string;
  year?: string;
  dimensions?: string;
  wood?: string;
  finish?: string;
  images: string[]; // we’ll add real image paths later (public/images/...)
};

export const PRODUCTS: Product[] = [
  {
    slug: "wave-blue-mirror",
    title: "Wave Blue Mirror",
    category: "Mirrors",
    shortDescription:
      "Hand-carved mirror frame with soft wave contours. Lorem ipsum dolor sit amet.",
    year: "2025",
    dimensions: "80 × 60 cm",
    wood: "Ash",
    finish: "Natural oil, blue wash",
    images: ["/images/placeholders/mirror-01.jpg"],
  },
  {
    slug: "curved-walnut-frame",
    title: "Curved Walnut Frame",
    category: "Frames",
    shortDescription:
      "Sinuous walnut picture frame. Consectetur adipiscing elit.",
    year: "2024",
    dimensions: "40 × 30 cm",
    wood: "Walnut",
    finish: "Oil & wax",
    images: ["/images/placeholders/frame-01.jpg"],
  },
  {
    slug: "sculpted-vase-stand",
    title: "Sculpted Vase Stand",
    category: "Objects",
    shortDescription:
      "Minimal stand for vases and small plants. Integer dignissim risus non pharetra convallis.",
    year: "2025",
    dimensions: "H 25 cm",
    wood: "Beech",
    finish: "Shellac",
    images: ["/images/placeholders/object-01.jpg"],
  },
  {
    slug: "oval-mirror-warm",
    title: "Oval Mirror — Warm",
    category: "Mirrors",
    shortDescription:
      "Organic oval mirror frame with warm tones. Donec a sapien a risus dictum sollicitudin.",
    images: ["/images/placeholders/mirror-02.jpg"],
  },
  {
    slug: "ridged-frame-small",
    title: "Ridged Frame (Small)",
    category: "Frames",
    shortDescription: "Small ridged frame for prints or photos.",
    images: ["/images/placeholders/frame-02.jpg"],
  },
  {
    slug: "wall-relief-wave",
    title: "Wall Relief — Wave",
    category: "Objects",
    shortDescription: "Shallow relief panel with flowing lines.",
    images: ["/images/placeholders/object-02.jpg"],
  },
  {
    slug: "mirror-natural-ash",
    title: "Mirror — Natural Ash",
    category: "Mirrors",
    shortDescription: "Clean ash frame enhancing natural grain.",
    images: ["/images/placeholders/mirror-03.jpg"],
  },
  {
    slug: "frame-dark-walnut",
    title: "Frame — Dark Walnut",
    category: "Frames",
    shortDescription: "Classic dark walnut frame with soft edges.",
    images: ["/images/placeholders/frame-03.jpg"],
  },
];

export const CATEGORIES = ["All", "Mirrors", "Frames", "Objects"] as const;
