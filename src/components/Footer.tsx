import { Wordmark } from './Wordmark';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why us' },
  { href: '#contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 text-fog-50"
            aria-label="CADCAM Stone — back to top"
          >
            <Wordmark className="h-7 w-7 text-amber-500" />
            <span className="font-semibold tracking-tight">
              CADCAM<span className="text-amber-500">Stone</span>
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-fog-400">
            Remote CAD/CAM services for stone fabrication. Services include
            countertop design, production drawings and CNC cutting preparation.
          </p>
          <p className="mt-4 text-sm text-fog-400">
            Athens, Greece ·{' '}
            <a
              href="mailto:hello@cadcamstone.com"
              className="text-fog-300 transition-colors hover:text-amber-500"
            >
              hello@cadcamstone.com
            </a>
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-fog-300 transition-colors hover:text-amber-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-fog-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} CADCAM Stone. All rights reserved.</p>
          <p className="font-mono">Drawn in AutoCAD · Cut in Easystone</p>
        </div>
      </div>
    </footer>
  );
}
