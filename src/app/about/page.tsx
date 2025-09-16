import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">About the Artist</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Artist Portrait */}
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/ema2.jpg"
            alt="Ema Marchi working on wood carving"
            width={800}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>
            Born in Venice and now based in Stuttgart, Emanuele crafts frames,
            mirrors, and sculptural wood objects entirely by hand. Each creation
            follows the natural flow of the wood, celebrating movement, texture,
            and light.
          </p>
          <p>
            With a sharp eye for detail and a deep respect for traditional
            craftsmanship, Emanuele brings custom commissions to life — from
            intricate carvings to bespoke frames and unique wooden objects.
          </p>
          <p>
            He welcomes collaborations, travels for projects, and is available
            for appointments to discuss your vision and tailor every detail to
            your needs.
          </p>
        </div>

      </div>
    </section>
  );
}
