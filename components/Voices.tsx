import Reveal from "./Reveal";
import { Star } from "lucide-react";

const quotes = [
  {
    text: "The closest thing to cooking over a campfire that a city restaurant has any right to be. We didn't want the night to end.",
    name: "Priya M.",
    detail: "Dined in March",
  },
  {
    text: "Twelve seats, one fire, zero regrets. The dry-aged ribeye is the best I've had in Colombo, full stop.",
    name: "Rohan de S.",
    detail: "Regular since opening",
  },
  {
    text: "It feels less like a restaurant and more like being cooked for by someone who really, deeply loves fire.",
    name: "Ayesha F.",
    detail: "Anniversary dinner",
  },
];

const press = ["The Sunday Times", "Pulse", "Roar", "YAMU", "Time Out"];

export default function Voices() {
  return (
    <section className="bg-charcoal-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-ember">
            Guest Voices
          </p>
          <h2 className="mt-5 font-display text-4xl text-cream md:text-5xl">
            They came for dinner. They keep coming back.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/8 bg-charcoal p-7">
                <div className="flex gap-1 text-ember">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-ember" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-cream/90">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/8 pt-5">
                  <p className="text-cream">{q.name}</p>
                  <p className="mt-0.5 text-sm text-ash">{q.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-xs uppercase tracking-[0.3em] text-ash">
            As seen in
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {press.map((p) => (
              <span
                key={p}
                className="font-display text-lg text-ash/70 transition-colors hover:text-cream"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
