import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-16 border-t border-line px-4 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <Reveal className="lg:col-span-6 lg:col-start-6">
          <SectionLabel index="01" label="Philosophy" />
          <p className="mt-10 max-w-[38ch] font-serif text-2xl leading-[1.55] text-ink md:text-[2rem]">
            We keep the inn small so the mountain can stay large. The bath opens before dawn. Breakfast comes from the valley.
          </p>
          <div className="mt-14 h-px w-24 bg-line" />
          <p className="mt-8 max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
            Fumoto sits at the foot of the Hakuba ridgeline. Guests arrive by train and a short walk through cedar. There is no lobby music, and no schedule beyond the meal bell.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
