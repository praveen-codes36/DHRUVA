import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { hexToRgba } from '../../tokens/theme';

export const CustomCursor: React.FC = () => {
  const { tokens } = useApp();
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'interactive' | 'cta'>('default');
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  // Smooth responsive spring for cursor dot
  const springX = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });
  const springY = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });

  // Slightly softer trailing spring for cursor ring
  const ringX = useSpring(-100, { stiffness: 320, damping: 24, mass: 0.2 });
  const ringY = useSpring(-100, { stiffness: 320, damping: 24, mass: 0.2 });

  useEffect(() => {
    // Check touch and reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [data-interactive]');
      const isPrimaryCta = target.closest('[data-cta-primary="true"]');
      const labelAttr = target.closest('[data-cursor-label]')?.getAttribute('data-cursor-label');

      if (isPrimaryCta) {
        setHoverState('cta');
        setCursorLabel(labelAttr || null);
      } else if (interactive) {
        setHoverState('interactive');
        setCursorLabel(labelAttr || null);
      } else {
        setHoverState('default');
        setCursorLabel(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [springX, springY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer trailing ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverState === 'cta' ? 36 : hoverState === 'interactive' ? 44 : 24,
          height: hoverState === 'cta' ? 36 : hoverState === 'interactive' ? 44 : 24,
          borderColor:
            hoverState === 'cta'
              ? tokens.ember
              : hoverState === 'interactive'
              ? tokens.poleStarFg
              : tokens.borderStrong,
          backgroundColor:
            hoverState === 'cta'
              ? hexToRgba(tokens.poleStarFill, 0.15)
              : hoverState === 'interactive'
              ? hexToRgba(tokens.poleStarFill, 0.08)
              : 'transparent',
        }}
        transition={{
          duration: 0.18,
          ease: 'easeOut',
        }}
        className="absolute rounded-full border border-solid backdrop-blur-[0.5px] flex items-center justify-center"
      >
        {cursorLabel && (
          <span
            className="text-[9px] font-tabular tracking-wider uppercase whitespace-nowrap px-1 py-0.5 rounded translate-y-6 shadow-sm"
            style={{
              color: tokens.poleStarFg,
              backgroundColor: tokens.surface1,
              border: `1px solid ${tokens.border}`,
            }}
          >
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Central precise 8px warm-gold dot */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: `0 0 8px ${tokens.poleStarFill}`,
        }}
        animate={{
          scale: hoverState === 'cta' ? 1.4 : hoverState === 'interactive' ? 0.6 : 1,
          backgroundColor: hoverState === 'cta' ? tokens.ember : tokens.poleStarFill,
        }}
        transition={{
          duration: 0.12,
        }}
        className="absolute w-2 h-2 rounded-full"
      />
    </div>
  );
};
