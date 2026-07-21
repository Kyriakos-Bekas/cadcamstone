import { useInView } from '../hooks/useInView';

/**
 * Decorative technical drawing of an L-shaped countertop with a sink
 * cut-out and dimension lines. Strokes "draw" themselves once on view
 * (disabled under prefers-reduced-motion via the `.draw` CSS rules).
 */
export function BlueprintCountertop() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px' });

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox="0 0 460 360"
        className={`draw h-auto w-full ${inView ? 'is-visible' : ''}`}
        role="img"
        aria-label="Technical blueprint of an L-shaped countertop with a sink cut-out and dimension callouts."
        style={{ ['--len' as string]: 1400 }}
      >
        {/* grid */}
        <g
          className="text-line"
          stroke="currentColor"
          strokeWidth={0.5}
          opacity={0.4}
        >
          {Array.from({ length: 11 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={40 + i * 38}
              y1={30}
              x2={40 + i * 38}
              y2={330}
            />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={`h${i}`}
              x1={40}
              y1={40 + i * 40}
              x2={420}
              y2={40 + i * 40}
            />
          ))}
        </g>

        {/* countertop outline (L-shape) */}
        <polyline
          points="60,70 400,70 400,180 200,180 200,300 60,300 60,70"
          fill="color-mix(in oklab, var(--color-amber-500) 7%, transparent)"
          stroke="var(--color-amber-500)"
          strokeWidth={2.4}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            ['--len' as string]: 1400,
            ['--draw-delay' as string]: '120ms'
          }}
        />

        {/* sink cut-out */}
        <rect
          x="270"
          y="96"
          width="86"
          height="56"
          rx="8"
          fill="none"
          stroke="var(--color-blueprint)"
          strokeWidth={1.8}
          style={{
            ['--len' as string]: 320,
            ['--draw-delay' as string]: '700ms'
          }}
        />
        {/* faucet hole */}
        <circle
          cx="313"
          cy="88"
          r="5"
          fill="none"
          stroke="var(--color-blueprint)"
          strokeWidth={1.8}
          style={{
            ['--len' as string]: 40,
            ['--draw-delay' as string]: '900ms'
          }}
        />

        {/* dimension line — width */}
        <g
          stroke="var(--color-fog-500)"
          strokeWidth={1.2}
          style={{
            ['--len' as string]: 400,
            ['--draw-delay' as string]: '1000ms'
          }}
        >
          <line x1="60" y1="50" x2="400" y2="50" />
          <line x1="60" y1="44" x2="60" y2="56" />
          <line x1="400" y1="44" x2="400" y2="56" />
        </g>
        <text
          x="230"
          y="44"
          textAnchor="middle"
          className="fill-fog-400 font-mono"
          fontSize="13"
        >
          3400 mm
        </text>

        {/* dimension line — height */}
        <g
          stroke="var(--color-fog-500)"
          strokeWidth={1.2}
          style={{
            ['--len' as string]: 300,
            ['--draw-delay' as string]: '1100ms'
          }}
        >
          <line x1="44" y1="70" x2="44" y2="300" />
          <line x1="38" y1="70" x2="50" y2="70" />
          <line x1="38" y1="300" x2="50" y2="300" />
        </g>
        <text
          x="26"
          y="190"
          textAnchor="middle"
          className="fill-fog-400 font-mono"
          fontSize="13"
          transform="rotate(-90 26 190)"
        >
          2300 mm
        </text>

        {/* label pointer to sink */}
        <g
          stroke="var(--color-blueprint)"
          strokeWidth={1.2}
          strokeDasharray="4 4"
          style={{
            ['--len' as string]: 200,
            ['--draw-delay' as string]: '1200ms'
          }}
        >
          <line x1="356" y1="124" x2="412" y2="124" />
        </g>
        <text
          x="414"
          y="128"
          className="fill-blueprint font-mono"
          fontSize="12"
        >
          SINK
        </text>
      </svg>
    </div>
  );
}
