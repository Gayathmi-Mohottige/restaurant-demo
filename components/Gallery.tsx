import Reveal from "./Reveal";

// Swap these for the venue's real photos when you have them.
const IMAGES = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ember">Gallery</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl text-cream md:text-5xl">
          A room built around the flame
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
        {IMAGES.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 4) * 0.06}
            className={
              i === 0
                ? "col-span-2 row-span-2"
                : i === 3
                ? "md:row-span-2"
                : ""
            }
          >
            <div
              className="h-full w-full rounded-xl bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
              style={{ backgroundImage: `url(${src})` }}
              role="img"
              aria-label="Ember & Oak"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
