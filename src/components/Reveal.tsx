import type { ElementType, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** Stagger the entrance by this many milliseconds. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Fades + lifts its children into place the first time they enter the
 * viewport. Purely decorative: content is fully visible with JS disabled
 * or when the user prefers reduced motion (handled in CSS).
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = ''
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { ['--reveal-delay' as string]: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
