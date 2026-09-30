import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  mode?: 'chars' | 'words';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  charClassName = '',
  delay = 0.2,
  stagger = 0.05,
  mode = 'chars',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const items = mode === 'words' ? text.split(' ') : text.split('');

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + index * stagger,
            ease: [0.16, 0.8, 0.2, 1],
          }}
          className={`inline-block ${charClassName} ${mode === 'words' ? 'mr-[0.28em]' : ''}`}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </span>
  );
};
