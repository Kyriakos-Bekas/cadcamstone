import type { SVGProps } from 'react';

/** Compact "M" mark echoing a milled countertop profile. */
export function Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-ink-800 stroke-line"
        strokeWidth={1.5}
      />
      <path
        d="M8 22V10h4l4 7 4-7h4v12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
