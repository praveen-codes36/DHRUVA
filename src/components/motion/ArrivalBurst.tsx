import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';

interface ArrivalBurstProps {
  active: boolean;
  onComplete?: () => void;
}

export const ArrivalBurst: React.FC<ArrivalBurstProps> = ({ active, onComplete }) => {
  const { tier, tokens } = useApp();
  const [particles, setParticles] = useState<Array<{ id: number; angle: number; dist: number; size: number; color: string }>>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    if (tier === 'lite') {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }

    // 16 restrained celestial sparks reading from theme tokens
    const colors = [tokens.poleStarFill, tokens.ember, tokens.onTimeFill, tokens.text];
    const p = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      angle: (i / 16) * Math.PI * 2,
      dist: Math.random() * 45 + 35,
      size: Math.random() * 2.5 + 2,
      color: colors[i % colors.length],
    }));
    setParticles(p);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, 1200);

    return () => clearTimeout(timer);
  }, [active, tier, onComplete]);

  if (!active || tier === 'lite') return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-40 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          const targetX = Math.cos(p.angle) * p.dist;
          const targetY = Math.sin(p.angle) * p.dist;

          return (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: targetX,
                y: targetY,
                scale: [0, 1.2, 0.4],
                opacity: [1, 0.8, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 0.8, 0.2, 1] }}
              className="absolute rounded-full shadow-sm"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 6px ${p.color}`,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
