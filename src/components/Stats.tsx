import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { IconCheck } from './icons';
import { Reveal } from './Reveal';

interface Stat {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const STATS: Stat[] = [
  { target: 12, suffix: '+', label: 'Years drafting stone' },
  { target: 4200, suffix: '+', label: 'Countertops programmed' }
];

const REASONS = [
  'Drawings built for the machine, not just the eye',
  'Layer structure matched to your internal workflow',
  'Easystone database built from scratch, paired with AutoCAM to fit your setup',
  'Cutting files programmed in Easystone, checked for clean machine execution',
  "Prefer different software? We'll adapt to how you work",
  'Support hours agreed up front, so there are no surprises'
];

export function Stats() {
  // A single observer drives all counters so they animate together.
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="why"
      className="border-t border-line/70 bg-ink-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-500">
                Why us
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
                Accuracy your fabricators can trust
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg leading-relaxed text-fog-300">
                Every drawing is prepared with practical fabrication in mind, so
                what leaves the office runs cleanly on the floor.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {REASONS.map((reason, i) => (
                <Reveal as="li" key={reason} delay={i * 80}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-fog-200">{reason}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-ink-900 p-5 sm:p-7"
          >
            {STATS.map((stat, i) => (
              <StatTile
                key={stat.label}
                stat={stat}
                active={inView}
                delay={i * 90}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({
  stat,
  active,
  delay
}: {
  stat: Stat;
  active: boolean;
  delay: number;
}) {
  const value = useCountUp(stat.target, active);
  return (
    <div
      className="reveal is-visible rounded-xl border border-line bg-ink-850 p-5 transition-colors hover:border-amber-500/50"
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      <div className="font-mono text-3xl font-semibold tabular-nums text-fog-50 sm:text-4xl">
        {stat.prefix}
        {value.toLocaleString('en-US')}
        <span className="text-amber-500">{stat.suffix}</span>
      </div>
      <div className="mt-1.5 text-sm text-fog-400">{stat.label}</div>
    </div>
  );
}
