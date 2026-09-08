import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Stamp } from "./Stamp";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#stay", label: "Stay" },
  { href: "#path", label: "Path" },
  { href: "#inquire", label: "Inquire" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-washi">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-3 text-ink no-underline">
          <Stamp />
          <span className="font-serif text-[17px] tracking-[0.18em]">Fumoto</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-700 ease-editorial hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-3 flex flex-col items-end gap-[5px] p-3 lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-700 ease-editorial ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-4 bg-ink transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-700 ease-editorial ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open
        ? createPortal(
            <div
              id={panelId}
              className="fixed inset-x-0 bottom-0 top-16 z-20 bg-washi px-6 py-16 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <nav className="flex flex-col gap-8" aria-label="Mobile">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-serif text-3xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
