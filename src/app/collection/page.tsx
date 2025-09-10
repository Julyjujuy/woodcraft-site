"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function CollectionPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Collection</h1>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border transition
              ${active === cat ? "bg-[#C8A57A] text-white border-[#C8A57A]" : "bg-white border-neutral-300 hover:border-neutral-400"}`}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/product/${p.slug}`}
            className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition"
          >
            {/* Image placeholder (will replace with real images later) */}
            <div
              className="aspect-square w-full"
              aria-label={`${p.title} preview`}
              role="img"
            >
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#C8A57A] via-[#FAF7F2] to-[#9B6B43] group-hover:scale-[1.02] transition" />
            </div>

            <div className="p-4">
              <div className="text-sm text-neutral-500">{p.category}</div>
              <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                {p.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
