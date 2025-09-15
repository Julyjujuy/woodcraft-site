export default function HomePage() {
  return (
    <>
      {/* FULL-SCREEN BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
  className="h-full w-full object-cover [object-position:center_40%] scale-100 transform-gpu opacity-90"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
>
  {/* Mobile */}
  <source
    src="/videos/smooth_background_phone.mp4?v=3"
    type="video/mp4"
    media="(max-width: 767px)"
  />
  {/* Desktop */}
  <source
    src="/videos/smooth_background_desktop.mp4?v=3"
    type="video/mp4"
    media="(min-width: 768px)"
  />
  Your browser does not support the video tag.
</video>



        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FAF7F2]/60" />
      </div>

      {/* HERO CONTENT */}
      <section className="h-[92svh] flex items-center">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Handcrafted Wood, Made to Last
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-100">
            Mirrors, frames, and sculptural objects—crafted by hand in Stuttgart,
            inspired by Venetian roots.
          </p>
        </div>
      </section>
    </>
  );
}
