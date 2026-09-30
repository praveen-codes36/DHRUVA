import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';

interface ConfidenceRingProps {
  confidence: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  statusColor?: string;
  showLabel?: boolean;
  className?: string;
  subtitle?: string;
}

export const ConfidenceRing: React.FC<ConfidenceRingProps> = ({
  confidence,
  size = 110,
  strokeWidth = 6,
  statusColor,
  showLabel = true,
  className = '',
  subtitle = 'Confidence',
}) => {
  const { tokens, t } = useApp();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedConfidence = Math.min(Math.max(confidence, 0), 100);
  const strokeDashoffset = circumference - (clampedConfidence / 100) * circumference;

  // Derive color from current tokens if not explicitly provided
  const ringColor =
    statusColor ||
    (clampedConfidence >= 88
      ? tokens.onTimeFill
      : clampedConfidence >= 70
      ? tokens.poleStarFill
      : clampedConfidence >= 50
      ? tokens.cautionFill
      : tokens.alertFill);

  const ariaText = t.a11y.confidenceRingAria.replace('{val}', String(clampedConfidence));

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={clampedConfidence}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaText}
    >
      {/* Outer subtle breathing glow */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full blur-md"
          style={{ backgroundColor: ringColor }}
        />
      )}

      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={tokens.surface2}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Active progress arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={ringColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeLinecap="round"
          initial={false}
          animate={{
            strokeDashoffset,
            stroke: ringColor,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
            ease: [0.16, 0.8, 0.2, 1],
          }}
        />
      </svg>

      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <span
            className="font-tabular text-lg font-bold tracking-tight"
            style={{ color: tokens.text }}
          >
            {clampedConfidence}%
          </span>
          {subtitle && (
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{ color: tokens.textMuted }}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
