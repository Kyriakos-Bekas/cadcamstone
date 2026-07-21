import type { SVGProps } from 'react';

/**
 * Line icons, 24×24, inheriting `currentColor`. Decorative by default
 * (aria-hidden); callers add a label when an icon carries meaning.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Countertop / drafting — a drawn layout with a corner dimension. */
export const IconDrafting = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4h16v16H4z" />
    <path d="M4 9h7v11" />
    <path d="M11 9l9-5" opacity={0.75} />
    <circle cx="15" cy="14.5" r="2.2" />
  </Base>
);

/** Layered production drawings. */
export const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
    <path d="M4 12l8 4.5 8-4.5" opacity={0.8} />
    <path d="M4 16.5L12 21l8-4.5" opacity={0.55} />
  </Base>
);

/** CNC cutting head over stock. */
export const IconCut = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v6" />
    <path d="M9 9h6l-1.2 3.2a2 2 0 0 1-1.9 1.3h-.8a2 2 0 0 1-1.9-1.3L9 9z" />
    <path d="M12 13.5V16" />
    <path d="M4 20h16" />
    <path d="M6 20l1.5-2M18 20l-1.5-2" opacity={0.7} />
  </Base>
);

/** Remote / global support. */
export const IconGlobe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" opacity={0.8} />
    <path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5z" />
  </Base>
);

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 6L9 17l-5-5" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);
