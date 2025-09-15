// src/app/components/HeroVideo.tsx
export default function HeroVideo() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // Fallback poster (optional): put a JPG in /public/images if you like
        // poster="/images/hero-poster.jpg"
      >
        {/* Mobile sources first */}
        <source
          src="/videos/smooth_background_phone.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        {/* Desktop sources */}
        <source
          src="/videos/smooth_background_desktop.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        {/* If nothing works */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      {/* Centered heading/content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
            Bottega Marchi
          </h1>
          <p className="mt-3 text-white/90 text-lg md:text-2xl">
            Handcrafted Elegance in Wood
          </p>
        </div>
      </div>
    </section>
  );
}
