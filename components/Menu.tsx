import Reveal from "./Reveal";

type Dish = { name: string; note: string; price: string };

const sections: { heading: string; dishes: Dish[] }[] = [
  {
    heading: "From the Embers",
    dishes: [
      { name: "Dry-Aged Ribeye", note: "28-day, bone marrow, charred onion", price: "8,900" },
      { name: "Oak-Fired Half Chicken", note: "lemon, garlic confit, herb jus", price: "4,200" },
      { name: "Whole Grilled Snapper", note: "fennel, chili oil, burnt lime", price: "6,400" },
      { name: "Smoked Lamb Chops", note: "mint chimichurri, ember potato", price: "7,100" },
    ],
  },
  {
    heading: "From the Garden",
    dishes: [
      { name: "Charred Hispi Cabbage", note: "black garlic, toasted seeds", price: "2,400" },
      { name: "Fire-Roasted Beetroot", note: "whipped feta, walnut, honey", price: "2,200" },
      { name: "Ember Flatbread", note: "stracciatella, wild greens", price: "2,800" },
    ],
  },
  {
    heading: "To Finish",
    dishes: [
      { name: "Burnt Basque Cheesecake", note: "smoked vanilla, sea salt", price: "1,900" },
      { name: "Grilled Stone Fruit", note: "almond cream, oak honey", price: "1,700" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-charcoal-soft py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-ember">The Menu</p>
          <h2 className="mt-5 font-display text-4xl text-cream md:text-5xl">
            Cooked to order, over coals
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ash">
            The menu shifts with the season and the market. Prices in LKR.
          </p>
        </Reveal>

        <div className="ember-rule mx-auto mt-14 max-w-3xl" />

        <div className="mx-auto mt-14 max-w-3xl space-y-16">
          {sections.map((sec, i) => (
            <Reveal key={sec.heading} delay={i * 0.05}>
              <h3 className="font-display text-2xl text-ember">{sec.heading}</h3>
              <ul className="mt-7 space-y-7">
                {sec.dishes.map((d) => (
                  <li
                    key={d.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div>
                      <p className="text-lg text-cream">{d.name}</p>
                      <p className="mt-1 text-sm text-ash">{d.note}</p>
                    </div>
                    <div className="flex-shrink-0 font-display text-lg text-cream">
                      {d.price}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
