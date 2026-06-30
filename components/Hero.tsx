"use client";

import { motion } from "motion/react";

// Swap this for your own shot if you like — moody, fire-lit food works best.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      />
      {/* Charcoal wash so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal" aria-hidden />

      {/* Signature: ember glow breathing behind the wordmark */}
      <motion.div
        className="ember-glow pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full"
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-ember"
        >
          Live Fire · Aged Cuts · Natural Wine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-7xl md:text-8xl"
        >
          Cooked over
          <br />
          <span className="italic text-ember">open flame.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-7 max-w-md text-base text-ash"
        >
          A wood-fired grill where every plate meets the embers. Twelve seats at
          the fire. Reservations open nightly from 6pm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#reserve"
            className="rounded-full bg-ember px-8 py-3.5 text-sm font-medium text-charcoal transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Reserve a table
          </a>
          <a
            href="#menu"
            className="rounded-full border border-cream/25 px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/5"
          >
            See the menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
