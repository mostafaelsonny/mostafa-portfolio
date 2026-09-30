import { CSSProperties, ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function AnimatedReveal({ children, className = '', style, delay = 0 }: AnimatedRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
