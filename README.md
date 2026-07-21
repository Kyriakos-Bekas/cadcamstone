# CADCAM Stone

Single-page landing site for a CNC / stone-fabrication CAD/CAM business offering services such as
countertop design, production-ready drawings, CNC cutting preparation, and
remote fabrication support.

## Stack

- **React 19** + **TypeScript** (Vite SPA)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, tokens defined in `src/index.css`)
- No runtime UI dependencies — icons and the blueprint graphic are hand-authored SVG.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check (tsc -b) + production build to dist/
npm run preview  # serve the production build locally
```

## Design notes

**Accessibility:**

- Semantic landmarks (`header` / `main` / `footer` / `nav`), a "Skip to content"
  link, and `scroll-margin-top` so anchored sections clear the sticky header.
- Visible `:focus-visible` rings throughout; labelled form fields; the mobile
  menu exposes `aria-expanded` / `aria-controls` and closes on `Escape`.
- Decorative SVGs are `aria-hidden`; the blueprint has a descriptive `role="img"` label.
- **Every** animation is disabled under `prefers-reduced-motion: reduce`
  (counters snap to their final value, strokes render fully drawn).

## Structure

```
src/
├─ App.tsx                 # page assembly + skip link
├─ index.css               # Tailwind v4 @theme tokens + microinteraction utilities
├─ hooks/
│  ├─ useInView.ts         # IntersectionObserver wrapper
│  ├─ useCountUp.ts        # rAF counter (reduced-motion aware)
│  └─ usePrefersReducedMotion.ts
└─ components/
   ├─ Header.tsx  Hero.tsx  Services.tsx  Process.tsx  Stats.tsx
   ├─ Contact.tsx  Footer.tsx  Reveal.tsx
   └─ BlueprintCountertop.tsx  Wordmark.tsx  icons.tsx
```

The contact form has no backend: on submit it composes a `mailto:` draft, so the
site deploys as fully static output (`dist/`).
