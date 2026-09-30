import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.35,
  radius = 48,
  className = '',
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice || prefersReducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < radius + rect.width / 2) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
    className: `relative inline-flex items-center justify-center cursor-pointer select-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pole-star-fg)] ${className}`,
    style: isTouchDevice || prefersReducedMotion ? undefined : { x, y },
  };

  if (asAnchor && href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick as any}
        {...commonProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      {...(props as any)}
      {...commonProps}
    >
      {children}
    </motion.button>
  );
};
