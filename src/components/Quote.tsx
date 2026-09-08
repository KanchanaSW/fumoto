import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Quote() {
  return (
    <section className="border-t border-line px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <Reveal className="lg:col-span-8 lg:col-start-3">
          <SectionLabel index="04" label="Guest" />
          <blockquote className="relative mt-12">
            <span
              className="pointer-events-none absolute -left-2 -top-8 font-serif text-[7rem] leading-none text-accent/70 md:-left-6 md:text-[9rem]"
              aria-hidden="true"
            >
              「
            </span>
            <p className="relative max-w-[22ch] pl-6 font-serif text-[1.85rem] leading-[1.45] text-ink md:pl-10 md:text-4xl">
              The steam made the cedars look closer than they were.
            </p>
            <footer className="mt-10 pl-6 md:pl-10">
              <p className="text-[13px] text-ink">Emi Takahashi</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Guest, winter stay
              </p>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
