import { Stamp } from "./Stamp";
import { TextLink } from "./TextLink";

export function Footer() {
  return (
    <footer
      id="inquire"
      className="relative scroll-mt-16 border-t border-line px-4 py-16 md:px-8 md:py-20"
    >
      <p
        className="vertical-rl absolute right-6 top-16 hidden text-[11px] tracking-[0.4em] text-ink-muted lg:block"
        lang="ja"
      >
        予約
      </p>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="flex items-center gap-4 md:col-span-4">
          <Stamp size="md" />
          <div>
            <p className="font-serif text-xl tracking-[0.12em] text-ink">Fumoto</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink-muted" lang="ja">
              麓
            </p>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-[13px] leading-relaxed text-ink-muted">Hakuba, Nagano</p>
          <p className="text-[13px] leading-relaxed text-ink-muted">Japan</p>
        </div>

        <div className="md:col-span-4 md:justify-self-start lg:pr-16">
          <TextLink href="mailto:stay@fumoto.jp">Inquire</TextLink>
          <p className="mt-4 text-[13px] text-ink-muted">stay@fumoto.jp</p>
        </div>
      </div>
    </footer>
  );
}
