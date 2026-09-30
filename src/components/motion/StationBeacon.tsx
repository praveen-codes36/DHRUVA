import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';

export type StationStatus = 'passed' | 'current' | 'upcoming';

interface StationBeaconProps {
  status: StationStatus;
  code: string;
  name: string;
  scheduledTime: string;
  actualOrPredictedTime?: string;
  platform?: string;
  isTerminal?: boolean;
  className?: string;
}

export const StationBeacon: React.FC<StationBeaconProps> = ({
  status,
  code,
  name,
  scheduledTime,
  actualOrPredictedTime,
  platform,
  isTerminal = false,
  className = '',
}) => {
  const { tokens } = useApp();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const isCurrent = status === 'current';
  const isPassed = status === 'passed';

  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      {/* Station marker node */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing ring for current station */}
        {isCurrent && !prefersReducedMotion && (
          <motion.div
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-5 h-5 rounded-full pointer-events-none"
            style={{ backgroundColor: tokens.poleStarFill }}
          />
        )}

        {/* Central beacon dot */}
        <motion.div
          initial={false}
          animate={{
            scale: isCurrent ? 1.25 : 1,
            backgroundColor: isCurrent
              ? tokens.poleStarFill
              : isPassed
              ? tokens.onTimeFill
              : tokens.surface2,
            borderColor: isCurrent
              ? tokens.ember
              : isPassed
              ? tokens.onTimeFg
              : tokens.borderStrong,
          }}
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 22,
          }}
          className="w-3.5 h-3.5 rounded-full border-2 z-10 transition-colors"
          style={{
            boxShadow: isTerminal ? `0 0 0 2px ${tokens.poleStarFill}40` : undefined,
          }}
        />
      </div>

      {/* Station Information */}
      <div className="mt-3 flex flex-col items-center text-center">
        <span
          className="text-xs font-semibold tracking-wider font-tabular"
          style={{
            color: isCurrent
              ? tokens.poleStarFg
              : isPassed
              ? tokens.text
              : tokens.textMuted,
          }}
        >
          {code}
        </span>
        <span
          className="text-[11px] truncate max-w-[80px] sm:max-w-[100px]"
          style={{
            color: isCurrent
              ? tokens.text
              : isPassed
              ? tokens.textMuted
              : tokens.textFaint,
            fontWeight: isCurrent ? 600 : 400,
          }}
          title={name}
        >
          {name}
        </span>

        {/* Time and platform metadata */}
        <div className="mt-1 flex flex-col text-[10px] font-tabular">
          <span
            style={{
              color: isCurrent
                ? tokens.poleStarFg
                : isPassed
                ? tokens.onTimeFg
                : tokens.textFaint,
              fontWeight: isCurrent ? 600 : 400,
            }}
          >
            {actualOrPredictedTime || scheduledTime}
          </span>
          {platform && (
            <span style={{ color: tokens.textFaint }} className="text-[9px]">
              PF {platform}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
