import type { ComponentType, SVGProps } from 'react';
import { IconCut, IconDrafting, IconGlobe, IconLayers } from './icons';
import { Reveal } from './Reveal';

interface Service {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string[];
  points: string[];
}

const SERVICES: Service[] = [
  {
    icon: IconDrafting,
    title: 'Countertop Design',
    body: ['Precise 2D countertop layouts created in AutoCAD for kitchens, bathrooms and outdoor spaces.'],
    points: [
      'AutoCAD 2D layouts',
      'Kitchen · bath · outdoor',
      'Fabrication-minded'
    ]
  },
  {
    icon: IconLayers,
    title: 'Production-Ready Drawings & Slab Layouts',
    body: ['Technical drawings and accurate slab layouts created using Slabsmith software, with optimized material usage and efficient production planning.'],
    points: ['Structured layers', 'Workflow-matched']
  },
  {
    icon: IconCut,
    title: 'CNC Cutting Preparation',
    body: ['Cutting-file programming developed exclusively in Easystone for accurate, efficient CNC machine execution.'],
    points: [
      'Easystone programming',
      'Machine-verified paths',
      'Efficient nesting'
    ]
  },
  {
    icon: IconGlobe,
    title: 'Remote Fabrication Support',
    body: ['Professional remote services for stone fabrication companies worldwide, with ongoing support arranged around your working hours.'],
    points: ['Worldwide', 'Ongoing support', 'Agreed hours']
  }
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-line/70 bg-ink-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-500">
              What we do
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
              Four services, one clean handoff to your machine
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg leading-relaxed text-fog-300">
              From the first layout to the final cutting file, every step is
              prepared with accuracy and practical fabrication in mind.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 90}>
              <ServiceCard service={service} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-900 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-ink-850 sm:p-7">
      {/* accent glow that fades in on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-ink-800 text-amber-500 transition-[transform,background-color] duration-300 group-hover:-translate-y-0.5 group-hover:bg-ink-700">
          <Icon className="h-6 w-6" />
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-sm tabular-nums text-fog-500 transition-colors group-hover:text-amber-500"
        >
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-fog-50">
        {service.title}
      </h3>
      {service.body.map((paragraph, i) => (
        <p key={i} className="mt-2.5 leading-relaxed text-fog-300">
          {paragraph}
        </p>
      ))}

      <ul className="mt-5 flex flex-wrap gap-2">
        {service.points.map(point => (
          <li
            key={point}
            className="rounded-full border border-line bg-ink-850 px-2.5 py-1 text-xs font-medium text-fog-400"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* bottom accent bar wipes in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </article>
  );
}
