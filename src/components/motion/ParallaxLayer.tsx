import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g. -0.2 for slower, 0.3 for faster
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.2,
  className = '',
  targetRef,
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const refToUse = targetRef || internalRef;
  const { scrollYProgress } = useScroll({
    target: refToUse,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  if (prefersReducedMotion) {
    return <div ref={internalRef} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={internalRef} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
