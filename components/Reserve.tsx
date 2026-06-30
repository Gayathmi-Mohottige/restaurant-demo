"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "saving" | "done" | "error";

const TIMES = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

export default function Reserve() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    party_size: "2",
    date: "",
    time: "7:00 PM",
    notes: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");

    const { error } = await supabase.from("bookings").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      party_size: Number(form.party_size),
      date: form.date,
      time: form.time,
      notes: form.notes,
    });

    setStatus(error ? "error" : "done");
  }

  if (status === "done") {
    return (
      <section id="reserve" className="bg-charcoal-soft py-28 md:py-36">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember/15 text-ember">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="mt-7 font-display text-4xl text-cream">
            Your table is requested
          </h2>
          <p className="mt-4 text-ash">
            We&apos;ve received your request for {form.party_size} on{" "}
            {form.date || "your chosen date"} at {form.time}. We&apos;ll confirm
            by email shortly. See you at the fire.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="reserve" className="bg-charcoal-soft py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-ember">
            Reservations
          </p>
          <h2 className="mt-5 font-display text-4xl text-cream md:text-5xl">
            Pull up a seat at the fire
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-ash">
            Twelve seats nightly. Tell us when you&apos;re coming and we&apos;ll
            hold your place.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputCls}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputCls}
                  placeholder="you@email.com"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputCls}
                  placeholder="07X XXX XXXX"
                />
              </Field>
              <Field label="Guests">
                <select
                  value={form.party_size}
                  onChange={(e) => update("party_size", e.target.value)}
                  className={inputCls}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-charcoal">
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Date">
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Time">
                <select
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className={inputCls}
                >
                  {TIMES.map((t) => (
                    <option key={t} value={t} className="bg-charcoal">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Anything we should know?">
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={3}
                className={inputCls}
                placeholder="Allergies, a celebration, a seat at the fire…"
              />
            </Field>

            {status === "error" && (
              <p className="text-sm text-ember">
                That didn&apos;t go through. Check your details and try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "saving"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 font-medium text-charcoal transition-transform hover:scale-[1.02] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {status === "saving" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                "Request reservation"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-white/10 bg-charcoal px-4 py-3 text-cream placeholder:text-ash/60 outline-none transition-colors focus:border-ember";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-ash">{label}</span>
      {children}
    </label>
  );
}
