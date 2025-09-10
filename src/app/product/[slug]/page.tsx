import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="py-12">
      <div className="text-sm text-neutral-500">
        <Link href="/collection" className="hover:underline">
          ← Back to Collection
        </Link>
      </div>

      <h1 className="mt-3 text-3xl md:text-4xl font-semibold">{product.title}</h1>
      <div className="text-neutral-600 mt-1">{product.category}</div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Gallery — placeholder blocks for now */}
        <div className="space-y-4">
          {(product.images.length ? product.images : [1, 2, 3]).map((img, i) => (
            <div
              key={i}
              className="aspect-square w-full rounded-2xl border border-neutral-200 overflow-hidden"
              role="img"
              aria-label={`${product.title} image ${i + 1}`}
            >
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#C8A57A] via-[#FAF7F2] to-[#9B6B43]" />
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-4">
          <p className="leading-relaxed">{product.shortDescription}</p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {product.dimensions && (
              <div>
                <div className="text-neutral-500">Dimensions</div>
                <div className="font-medium">{product.dimensions}</div>
              </div>
            )}
            {product.wood && (
              <div>
                <div className="text-neutral-500">Wood</div>
                <div className="font-medium">{product.wood}</div>
              </div>
            )}
            {product.finish && (
              <div>
                <div className="text-neutral-500">Finish</div>
                <div className="font-medium">{product.finish}</div>
              </div>
            )}
            {product.year && (
              <div>
                <div className="text-neutral-500">Year</div>
                <div className="font-medium">{product.year}</div>
              </div>
            )}
          </div>

          <div className="pt-2">
            <Link
              href={`/contact?item=${encodeURIComponent(product.title)}`}
              className="inline-block px-5 py-3 rounded-full bg-[#9B6B43] text-white hover:opacity-90 transition"
            >
              Inquire about “{product.title}”
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
