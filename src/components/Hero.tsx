import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto min-h-[calc(100dvh-4rem)] max-w-[1400px] px-4 md:px-8"
    >
      <p
        className="vertical-rl absolute left-4 top-16 hidden text-[12px] font-medium tracking-[0.55em] text-ink-muted lg:block"
        lang="ja"
      >
        山麓の湯
      </p>

      <div className="grid min-h-[calc(100dvh-4rem)] grid-cols-1 lg:grid-cols-12 lg:gap-10">
        <Reveal className="flex max-w-xl flex-col justify-start pt-10 pb-8 lg:col-span-6 lg:col-start-2 lg:pt-20">
          <h1 className="font-serif text-[2.6rem] font-normal leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[4.25rem]">
            The mountain
            <span className="mt-1 block pb-1 italic leading-[1.18]">keeps the hours</span>
          </h1>
          <p className="mt-7 max-w-[34ch] text-[15px] leading-relaxed text-ink-muted">
            A small onsen ryokan in Hakuba. Eight rooms, a stone bath, and a garden that keeps its own weather.
          </p>
          <div className="mt-9">
            <TextLink href="#inquire">Inquire</TextLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="h-full pb-10 lg:col-span-5 lg:col-start-8 lg:py-10">
          <figure className="flex h-full flex-col">
            <div className="img-zoom h-[58vw] min-h-[260px] w-full lg:h-[calc(100dvh-11rem)] lg:min-h-[420px]">
              <img
                src="/images/hero-onsen.png"
                alt="Outdoor stone onsen with steam rising toward misted mountains at dusk"
                width={1600}
                height={900}
              />
            </div>
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              Rotenburo, first light
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
