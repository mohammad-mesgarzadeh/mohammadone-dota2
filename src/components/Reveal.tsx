import { type ReactNode, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Fades and lifts content into view on scroll. Uses IntersectionObserver + CSS. */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, margin: '-80px' });

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.style.transitionDelay = `${delay}s`;
    }
  }, [inView, delay, ref]);

  return (
    <div ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
