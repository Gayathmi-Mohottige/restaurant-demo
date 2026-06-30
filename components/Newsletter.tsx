"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "saving" | "done" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    const { error } = await supabase.from("subscribers").insert({ email });
    setStatus(error ? "error" : "done");
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ember">
          Join the Table
        </p>
        <h2 className="mt-5 font-display text-4xl text-cream md:text-5xl">
          First to know when the menu changes
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ash">
          Seasonal menus, off-menu fire nights, and the occasional pour you
          won&apos;t find on the list. No noise.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        {status === "done" ? (
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full border border-ember/30 bg-ember/10 px-6 py-4 text-cream">
            <Check className="h-5 w-5 text-ember" />
            You&apos;re on the list. See you by the fire.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-white/10 bg-charcoal-soft px-5 py-3.5 text-cream placeholder:text-ash/60 outline-none transition-colors focus:border-ember"
            />
            <button
              type="submit"
              disabled={status === "saving"}
              className="flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 font-medium text-charcoal transition-transform hover:scale-[1.03] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {status === "saving" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Join <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-ember">
            That didn&apos;t go through — check the address and try again.
          </p>
        )}
      </Reveal>
    </section>
  );
}
