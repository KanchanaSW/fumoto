type SectionLabelProps = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-4 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-10 bg-line" aria-hidden="true" />
      <span>{label}</span>
    </p>
  );
}
