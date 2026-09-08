type StampProps = {
  label?: string;
  size?: "sm" | "md";
  className?: string;
};

export function Stamp({ label = "麓", size = "sm", className = "" }: StampProps) {
  const dim = size === "md" ? "h-11 w-11 text-[13px]" : "h-7 w-7 text-[10px]";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-accent font-serif leading-none text-accent ${dim} ${className}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}
