import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const offerings = [
  {
    index: "01",
    title: "The house",
    copy: "Cedar corridors and paper screens. Eight rooms, each facing the garden.",
    image: "/images/engawa-corridor.png",
    alt: "Long wooden engawa corridor lit by a hanging lantern",
    caption: "Engawa after dusk",
    layout: "lg:col-span-7 lg:row-span-2",
    figure: "h-[72vw] min-h-[320px] lg:h-full lg:min-h-[560px]",
  },
  {
    index: "02",
    title: "The bath",
    copy: "Hinoki indoors, stone under the open sky. Open from first light until the ridge goes dark.",
    image: "/images/hinoki-bath.png",
    alt: "Steam rising from an indoor hinoki cypress bath",
    caption: "Hinoki, late afternoon",
    layout: "lg:col-span-5",
    figure: "h-[48vw] min-h-[220px] lg:h-[280px] lg:min-h-0",
  },
  {
    index: "03",
    title: "The table",
    copy: "Kaiseki drawn from the valley. One sitting in the evening, served in-room.",
    image: "/images/kaiseki.png",
    alt: "Seasonal kaiseki dishes arranged in ceramic bowls on a lacquer tray",
    caption: "Evening sitting",
    layout: "lg:col-span-5",
    figure: "h-[48vw] min-h-[220px] lg:h-[240px] lg:min-h-0",
  },
  {
    index: "04",
    title: "The rooms",
    copy: "Futons are laid after dusk. Morning light comes through the garden shoji.",
    image: "/images/tatami-room.png",
    alt: "Tatami guest room looking out through shoji to a garden",
    caption: "Garden room",
    layout: "lg:col-span-5 lg:col-start-8",
    figure: "h-[48vw] min-h-[220px] lg:h-[260px] lg:min-h-0",
  },
] as const;

export function Offerings() {
  return (
    <section id="stay" className="scroll-mt-16 border-t border-line px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="02" label="Stay" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className={item.layout}>
              <article>
                <figure>
                  <div className={`img-zoom ${item.figure}`}>
                    <img src={item.image} alt={item.alt} width={1200} height={900} />
                  </div>
                  <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                    {item.caption}
                  </figcaption>
                </figure>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-serif text-sm text-accent">{item.index}</span>
                  <h2 className="font-serif text-2xl font-normal text-ink">{item.title}</h2>
                </div>
                <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
