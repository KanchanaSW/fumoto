import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Showcase() {
  return (
    <section id="path" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 md:px-8 md:pt-20">
        <Reveal>
          <SectionLabel index="03" label="Path" />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <figure>
          <div className="img-zoom h-[62vw] max-h-[720px] min-h-[280px] w-full">
            <img
              src="/images/moss-path.png"
              alt="Moss-covered cedar trunks and wet stepping stones leading toward a wooden ryokan in mist"
              width={1920}
              height={1080}
            />
          </div>
          <figcaption className="mx-auto max-w-[1400px] px-4 py-4 text-[10px] uppercase tracking-[0.28em] text-ink-muted md:px-8">
            Garden path after rain
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
