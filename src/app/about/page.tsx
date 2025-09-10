export default function AboutPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">About the Artist</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Image placeholder — replace later with a real portrait */}
        <div className="aspect-[4/5] w-full rounded-2xl bg-neutral-200 shadow-inner" />

        <div className="space-y-4 leading-relaxed">
          <p>
            Born in Venice and now based in Stuttgart, the artist crafts frames,
            mirrors, and sculptural wood objects by hand. Each piece follows
            the wood’s natural flow, celebrating movement and light.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dignissim, risus non pharetra convallis, neque nisl posuere dui,
            in tempus erat quam ac nisi. Donec a sapien a risus dictum
            sollicitudin.
          </p>
          <p>
            Woods & finishes: walnut, beech, ash. Hand tools and subtle
            pigments create a warm, durable surface.
          </p>
        </div>
      </div>
    </section>
  );
}
