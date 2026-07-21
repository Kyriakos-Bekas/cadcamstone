import { BlueprintCountertop } from './BlueprintCountertop';
import { IconArrowRight } from './icons';
import { Reveal } from './Reveal';

const TOOLS = ['AutoCAD', 'Easystone', 'Remote-ready'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft radial + faint blueprint grid backdrop (static — no parallax) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(60% 55% at 78% 12%, color-mix(in oklab, var(--color-amber-500) 14%, transparent), transparent 70%), linear-gradient(to bottom, var(--color-ink-900), var(--color-ink-950))'
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(80% 60% at 50% 0%, #000 30%, transparent 78%)'
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fog-50 sm:text-5xl lg:text-[3.4rem]">
              Precise drawings.{' '}
              <span className="text-amber-500">Clean cuts.</span> Delivered
              remotely.
            </h1>
          </Reveal>

          <Reveal delay={70}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-fog-300">
              We turn your kitchen, bathroom and outdoor projects into
              production-ready countertop layouts and CNC cutting files — drawn
              in AutoCAD, programmed in Easystone, and ready for the machine.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-semibold text-ink-950 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-amber-400 active:translate-y-0"
              >
                Start a project
                <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong px-5 py-3 font-medium text-fog-100 transition-colors duration-200 hover:border-fog-500 hover:bg-ink-850"
              >
                See what we do
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fog-400">
              {TOOLS.map(tool => (
                <li key={tool} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-amber-500"
                  />
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Blueprint visual */}
        <Reveal delay={110} className="relative">
          <div className="animate-floaty rounded-2xl border border-line bg-ink-900/70 p-4 shadow-2xl shadow-black/40 sm:p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs text-fog-500">
                countertop_rev-C.dwg
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              </span>
            </div>
            <BlueprintCountertop />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
