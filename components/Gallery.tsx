import Reveal from "./Reveal";

// 7 images — the bento below tiles to a perfect fill at every breakpoint.
// Swap any URL for the venue's real photos.
const IMAGES = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
];

// span pattern that perfectly fills both a 2-col (mobile) and 4-col (desktop) grid
function spanFor(i: number) {
  if (i === 0) return "col-span-2 row-span-2";
  if (i === 1 || i === 4) return "col-span-2";
  return "";
}

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ember">Gallery</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-cream md:text-5xl">
          A room built around the flame
        </h2>
      </Reveal>

      <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 md:mt-14 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {IMAGES.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 0.05} className={spanFor(i)}>
            <div
              className="group h-full w-full overflow-hidden rounded-xl"
              role="img"
              aria-label="Ember & Oak"
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
