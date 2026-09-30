import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OdometerProps {
  value: string | number;
  className?: string;
  charClassName?: string;
}

export const Odometer: React.FC<OdometerProps> = ({
  value,
  className = '',
  charClassName = '',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const str = String(value);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (prefersReducedMotion) {
    return <span className={`font-tabular inline-flex ${className}`}>{str}</span>;
  }

  return (
    <span className={`font-tabular inline-flex items-baseline overflow-hidden ${className}`}>
      {str.split('').map((char, index) => {
        const isDigit = /\d/.test(char);
        if (!isDigit) {
          return (
            <span key={`sym-${index}`} className={`inline-block ${charClassName}`}>
              {char}
            </span>
          );
        }

        return (
          <span
            key={`char-slot-${index}`}
            className="relative inline-block overflow-hidden h-[1.15em] leading-[1.15em] align-baseline"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={`${char}-${index}`}
                initial={{ y: '75%', opacity: 0, filter: 'blur(2px)' }}
                animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-75%', opacity: 0, filter: 'blur(2px)' }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 0.8, 0.2, 1],
                }}
                className={`inline-block tabular-nums ${charClassName}`}
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </span>
        );
      })}
    </span>
  );
};
