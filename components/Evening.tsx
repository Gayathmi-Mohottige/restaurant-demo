import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    time: "6:00",
    title: "Arrival",
    body: "A glass of something cold by the hearth as the coals come up to heat and the room fills with woodsmoke.",
    pour: "A chilled glass of Txakoli",
  },
  {
    no: "02",
    time: "7:00",
    title: "Fireside",
    body: "Snacks straight off the embers — charred flatbread, blistered greens, the night's first pour from the natural list.",
    pour: "Skin-contact white, poured cloudy",
  },
  {
    no: "03",
    time: "8:00",
    title: "The Feast",
    body: "Aged cuts and whole fish, carved at the pass and brought to the table to share, family-style, while it's still ticking.",
    pour: "Big-boned Syrah, decanted",
  },
  {
    no: "04",
    time: "Late",
    title: "Last Pour",
    body: "Burnt Basque cheesecake, a final glass, and the fire burning low. Nobody's in a hurry to leave.",
    pour: "Tawny port, ten years deep",
  },
];

export default function Evening() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ember">
          The Evening
        </p>
        <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight text-cream md:text-5xl">
          How a night by the fire unfolds
        </h2>
      </Reveal>

      <div className="mt-12 md:mt-16">
        {steps.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.06}>
            <div className="grid grid-cols-[3rem_1fr] items-start gap-x-5 gap-y-4 border-t border-white/8 py-7 md:grid-cols-[4rem_1fr_15rem] md:gap-x-8 md:py-10">
              {/* number */}
              <span className="font-display text-3xl text-ember md:text-4xl">
                {s.no}
              </span>

              {/* main */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ash">
                  {s.time}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cream md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-ash">{s.body}</p>
              </div>

              {/* pour — fills the right on desktop, sits under text on mobile */}
              <div className="col-start-2 border-l border-ember/30 pl-4 md:col-start-3 md:border-l-0 md:border-t md:border-ember/20 md:pl-0 md:pt-4 md:text-right">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember/80">
                  The Pour
                </p>
                <p className="mt-1.5 text-sm leading-snug text-cream/80">
                  {s.pour}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
