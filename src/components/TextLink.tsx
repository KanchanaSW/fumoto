type TextLinkProps = {
  href: string;
  children: string;
};

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-700 ease-editorial hover:text-accent"
    >
      {children}
      <span
        className="block h-px w-9 bg-ink transition-[width,background-color] duration-700 ease-editorial group-hover:w-14 group-hover:bg-accent"
        aria-hidden="true"
      />
    </a>
  );
}
