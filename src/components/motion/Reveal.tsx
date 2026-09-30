import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  distance = 28,
  blur = 8,
  once = true,
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 0.8, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
