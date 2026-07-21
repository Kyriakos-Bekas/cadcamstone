import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Share your project',
    body: 'Send templates, site measurements or rough sketches. We confirm scope, materials and the standards you work to.'
  },
  {
    n: '02',
    title: 'We draw & structure',
    body: "Countertops are laid out in AutoCAD with clean, clearly organised layers that match your shop's workflow."
  },
  {
    n: '03',
    title: 'CNC files prepared',
    body: 'Cutting programs are built in Easystone and checked for accurate, efficient machine execution.'
  },
  {
    n: '04',
    title: 'Delivered & supported',
    body: 'Files land ready to run. Ongoing remote support is arranged around your agreed working hours.'
  }
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-line/70 bg-ink-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-500">
              How it works
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
              A straightforward remote workflow
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 100} className="relative">
              {/* connector line between steps on wide screens */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-9 top-4 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-line-strong to-transparent lg:block"
                />
              )}
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center rounded-md border border-line bg-ink-850 px-3 font-mono text-sm text-amber-500">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-fog-50">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-fog-300">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
