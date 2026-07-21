import { useId, useState } from 'react';
import { IconArrowRight, IconClock, IconGlobe, IconMail } from './icons';
import { Reveal } from './Reveal';

const EMAIL = 'hello@cadcamstone.com';

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Project enquiry — ${String(data.get('company') || data.get('name') || 'New')}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\n\n${data.get('message')}`
    );
    // Hand off to the visitor's mail client — no backend required.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-line/70 bg-ink-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: pitch + details */}
          <div>
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-500">
                Start a project
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
                Tell us what you're cutting
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-fog-300">
                Share the details of your next job and we'll come back with a
                clear scope, timeline and working-hours arrangement.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-3 text-fog-100 transition-colors hover:text-amber-500"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink-850 text-amber-500">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <span className="font-medium">{EMAIL}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-fog-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink-850 text-amber-500">
                    <IconClock className="h-5 w-5" />
                  </span>
                  Support hours arranged to suit your timezone
                </li>
                <li className="flex items-center gap-3 text-fog-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink-850 text-amber-500">
                    <IconGlobe className="h-5 w-5" />
                  </span>
                  Working with fabricators worldwide
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={160}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-ink-950 p-6 sm:p-8"
              noValidate
            >
              {sent && (
                <p
                  role="status"
                  className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-300"
                >
                  Thanks — your email draft is ready to send. We'll reply within
                  one business day.
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id={nameId}
                  name="name"
                  label="Name"
                  autoComplete="name"
                  required
                />
                <Field
                  id={emailId}
                  name="email"
                  type="email"
                  label="Email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mt-5">
                <Field
                  id={companyId}
                  name="company"
                  label="Company"
                  autoComplete="organization"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor={messageId}
                  className="mb-1.5 block text-sm font-medium text-fog-200"
                >
                  Project details
                  <span className="text-amber-500"> *</span>
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={4}
                  placeholder="Material, number of pieces, deadline, and the software/standards you work to…"
                  className="w-full resize-y rounded-lg border border-line bg-ink-900 px-3.5 py-2.5 text-fog-100 placeholder:text-fog-500 transition-colors focus:border-amber-500 focus:outline-none focus-visible:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-semibold text-ink-950 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-amber-400 active:translate-y-0 sm:w-auto"
              >
                Send enquiry
                <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-xs text-fog-500">
                Opens your email app — no data is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  autoComplete
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-fog-200"
      >
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-ink-900 px-3.5 py-2.5 text-fog-100 placeholder:text-fog-500 transition-colors focus:border-amber-500 focus:outline-none focus-visible:outline-none"
      />
    </div>
  );
}
