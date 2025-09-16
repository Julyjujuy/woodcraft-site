export type Product = {
  slug: string;
  title: string;
  category: "Frames" | "Woodwork";
  shortDescription: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  // WOODWORK
  {
    slug: "legno-1",
    title: "Textured Wood Panel",
    category: "Woodwork",
    shortDescription: "Hand-carved flowing patterns inspired by natural forms.",
    image: "/images/collection/legno1.jpg",
  },
  {
    slug: "legno-2",
    title: "Wave Carving",
    category: "Woodwork",
    shortDescription: "Organic wave carving highlighting the natural grain.",
    image: "/images/collection/legno2.jpg",
  },
  {
    slug: "legno-3",
    title: "Relief Surface",
    category: "Woodwork",
    shortDescription: "Hand-tooled surface texture with rhythmic lines.",
    image: "/images/collection/legno3.jpg",
  },
  {
    slug: "legno-5",
    title: "Workshop Panel",
    category: "Woodwork",
    shortDescription: "Detailed hand carving, captured in the artist’s studio.",
    image: "/images/collection/legno5.jpg",
  },
  {
    slug: "vaso-1",
    title: "Sculptural Vase Base",
    category: "Woodwork", // moved from Objects → product is the WOOD base
    shortDescription: "Carved wooden base designed to support a vase form.",
    image: "/images/collection/vaso1.jpg",
  },

  // FRAMES  (mirrors are frames; moved here from 'Mirrors')
  {
    slug: "specchio-3",
    title: "Blue Carved Frame",
    category: "Frames",
    shortDescription: "Hand-carved frame finished with soft blue pigments.",
    image: "/images/collection/specchio3.jpg",
  },
  {
    slug: "specchio-4",
    title: "Natural Carved Frame",
    category: "Frames",
    shortDescription: "Organic waves hand-carved into a natural wood frame.",
    image: "/images/collection/specchio4.jpg",
  },
  {
    slug: "specchio-5",
    title: "Tall Carved Frame",
    category: "Frames",
    shortDescription: "Large hand-carved frame for interior installations.",
    image: "/images/collection/specchio5.jpg",
  },
  {
    slug: "frame-1",
    title: "Hammered Texture Frame",
    category: "Frames",
    shortDescription: "A frame finished with a hand-hammered surface texture.",
    image: "/images/collection/frame1.jpg",
  },
  {
    slug: "frame-3",
    title: "Vertical Fluted Frame",
    category: "Frames",
    shortDescription: "Minimalist fluted carving for subtle modern detail.",
    image: "/images/collection/frame3.jpg",
  },
];

export const CATEGORIES = ["All", "Frames", "Woodwork"] as const;
