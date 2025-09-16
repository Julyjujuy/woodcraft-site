"use client";

import Link from "next/link";
import Image from "next/image";
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
              ${
                active === cat
                  ? "bg-[#C8A57A] text-white border-[#C8A57A]"
                  : "bg-white border-neutral-300 hover:border-neutral-400"
              }`}
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
            // redirect to contact; include product slug & title as query
            href={`/contact?item=${encodeURIComponent(p.slug)}&title=${encodeURIComponent(
              p.title
            )}`}
            className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition"
          >
            <div className="aspect-square w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <div className="text-sm text-neutral-500">{p.category}</div>
              <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                {p.shortDescription}
              </p>
              <div className="mt-3 text-sm font-medium text-[#9B6B43]">
                Contact about this piece →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
