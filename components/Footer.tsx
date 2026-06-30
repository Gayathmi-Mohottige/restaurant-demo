import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-cream">
            Ember <span className="text-ember">&amp;</span> Oak
          </p>
          <p className="mt-3 text-sm text-ash">
            Wood-fired grill. Live fire, aged cuts, natural wine.
          </p>
        </div>

        <div className="flex items-start gap-3 text-sm text-ash">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember" />
          <span>
            42 Marine Drive
            <br />
            Colombo 03
          </span>
        </div>

        <div className="flex items-start gap-3 text-sm text-ash">
          <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember" />
          <span>
            Tue – Sun
            <br />
            6:00 PM – late
          </span>
        </div>

        <div className="flex items-start gap-3 text-sm text-ash">
          <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember" />
          <span>+94 11 234 5678</span>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-ash/60">
        © {new Date().getFullYear()} Ember &amp; Oak. A demo by{" "}
        <span className="text-ash">your studio</span>.
      </p>
    </footer>
  );
}