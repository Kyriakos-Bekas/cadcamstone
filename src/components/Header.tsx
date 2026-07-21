import { useEffect, useState } from 'react';
import { IconArrowRight, IconClose, IconMenu } from './icons';
import { Wordmark } from './Wordmark';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why us' },
  { href: '#contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-ink-950/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md py-1 text-fog-50"
          aria-label="CADCAM Stone — home"
        >
          <Wordmark className="h-7 w-7 text-amber-500 transition-transform duration-500 ease-out group-hover:rotate-[-6deg]" />
          <span className="text-[0.95rem] font-semibold tracking-tight">
            CADCAM<span className="text-amber-500">Stone</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-block rounded-md px-3 py-2 text-sm text-fog-300 transition-colors hover:text-fog-50"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-amber-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-amber-400 active:translate-y-0"
          >
            Start a project
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fog-100 transition-colors hover:bg-ink-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <IconClose className="h-5 w-5" />
          ) : (
            <IconMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-ink-950/95 backdrop-blur-md md:hidden"
      >
        <nav
          aria-label="Primary (mobile)"
          className="mx-auto max-w-6xl px-5 py-3"
        >
          <ul className="flex flex-col">
            {NAV.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-fog-200 transition-colors hover:bg-ink-800 hover:text-fog-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-3 font-semibold text-ink-950"
              >
                Start a project
                <IconArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
