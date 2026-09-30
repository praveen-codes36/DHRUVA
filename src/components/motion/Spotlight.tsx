import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { hexToRgba } from '../../tokens/theme';

interface SpotlightProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  className = '',
  size = 500,
  opacity = 0.08,
}) => {
  const { tokens } = useApp();
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || reducedMotion) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // check if inside or nearby
      if (
        e.clientX >= rect.left - 100 &&
        e.clientX <= rect.right + 100 &&
        e.clientY >= rect.top - 100 &&
        e.clientY <= rect.bottom + 100
      ) {
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500 ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: position.x - size / 2,
          top: position.y - size / 2,
          background: `radial-gradient(circle, ${hexToRgba(tokens.poleStarFill, opacity)} 0%, ${hexToRgba(tokens.ember, opacity * 0.4)} 35%, transparent 70%)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};
