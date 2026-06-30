import Reveal from "./Reveal";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1607018244619-dab6235709dd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80";

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <div
            className="aspect-[4/3] w-full rounded-2xl bg-cover bg-center shadow-2xl shadow-black/50 sm:aspect-[3/2] md:aspect-auto md:h-full md:min-h-[440px]"
            style={{ backgroundImage: `url(${STORY_IMAGE})` }}
            role="img"
            aria-label="The open kitchen at Ember & Oak"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-xs uppercase tracking-[0.4em] text-ember">
            Our Fire
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-cream md:text-5xl">
            One oak fire. Everything passes through it.
          </h2>
          <p className="mt-6 text-ash">
            We cook the old way — no gas, no shortcuts. White oak and almond wood
            burn down to embers each afternoon, and from six until late, every
            cut, vegetable, and flatbread takes its turn over the coals.
          </p>
          <p className="mt-4 text-ash">
            The result is food with a memory of smoke: charred at the edges,
            tender at the center, seasoned by the fire itself.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-10">
            <div>
              <p className="font-display text-3xl text-ember">1100&deg;</p>
              <p className="mt-1 text-sm text-ash">peak coal heat</p>
            </div>
            <div>
              <p className="font-display text-3xl text-ember">28 day</p>
              <p className="mt-1 text-sm text-ash">dry-aged beef</p>
            </div>
            <div>
              <p className="font-display text-3xl text-ember">12</p>
              <p className="mt-1 text-sm text-ash">seats at the fire</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
