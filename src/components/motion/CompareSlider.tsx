import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface CompareSliderProps {
  className?: string;
  staticTime?: string;
  dhruvaTime?: string;
  actualArrival?: string;
  stationName?: string;
  trainName?: string;
}

export const CompareSlider: React.FC<CompareSliderProps> = ({
  className = '',
  staticTime = '08:32 AM',
  dhruvaTime = '08:50 AM',
  actualArrival = '08:49 AM',
  stationName = 'Hazrat Nizamuddin (NZM)',
  trainName = '12951 Mumbai Rajdhani Express',
}) => {
  const { tokens, t, language } = useApp();
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.min(Math.max((x / width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className={`w-full select-none ${className}`}>
      {/* Header Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 text-xs font-tabular">
        <span style={{ color: tokens.textMuted }}>
          {t.problem.dragToCompareHint}{' '}
          <strong style={{ color: tokens.text }}>{trainName}</strong> ({stationName})
        </span>
        <div className="flex items-center gap-2">
          <span style={{ color: tokens.textFaint }}>
            {t.problem.groundTruthVerified}
          </span>
          <span className="font-bold flex items-center gap-1" style={{ color: tokens.onTimeFg }}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            {t.problem.compareActualArrival}
          </span>
        </div>
      </div>

      {/* Before/After Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label={t.a11y.dragToCompare}
        aria-valuenow={Math.round(sliderPosition)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(p - 5, 5));
          if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(p + 5, 95));
        }}
        className="relative h-64 sm:h-72 rounded-2xl border overflow-hidden cursor-ew-resize shadow-xl"
        style={{
          borderColor: tokens.border,
          backgroundColor: tokens.surface1,
        }}
      >
        {/* Right Side: DHRUVA Live Intelligence (Base Layer) */}
        <div
          className="absolute inset-0 p-6 flex flex-col justify-between text-right"
          style={{
            background: `linear-gradient(135deg, ${tokens.surface1} 0%, ${tokens.surface2} 100%)`,
          }}
        >
          <div
            className="flex items-center justify-end gap-2 text-xs font-tabular font-semibold uppercase tracking-wider"
            style={{ color: tokens.poleStarFg }}
          >
            <span>{t.problem.compareDhruvaLabel}</span>
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: tokens.poleStarFill }}
            />
          </div>

          <div className="my-auto">
            <span
              className="text-4xl sm:text-6xl font-bold font-tabular tracking-tight block"
              style={{ color: tokens.text }}
            >
              {dhruvaTime}
            </span>
            <div
              className="mt-2 text-xs font-tabular font-semibold inline-flex items-center gap-1.5 px-2.5 py-1 rounded border"
              style={{
                color: tokens.onTimeFg,
                backgroundColor: `${tokens.onTimeFill}15`,
                borderColor: `${tokens.onTimeFill}40`,
              }}
            >
              <span>{t.problem.compareDiffError}</span>
              <span>·</span>
              <span>{t.problem.compareConformalPct}</span>
            </div>
            <p className="mt-2 text-xs max-w-xs ml-auto" style={{ color: tokens.textMuted }}>
              {t.problem.compareDhruvaDesc}
            </p>
          </div>

          <div className="text-[11px] font-tabular" style={{ color: tokens.textFaint }}>
            {t.problem.compareDhruvaFooter}
          </div>
        </div>

        {/* Left Side: Static Timetable (Clipped Layer) */}
        <div
          className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden text-left"
          style={{
            width: `${sliderPosition}%`,
            backgroundColor: tokens.surface2,
          }}
        >
          <div
            className="flex items-center gap-2 text-xs font-tabular font-semibold uppercase tracking-wider whitespace-nowrap"
            style={{ color: tokens.alertFg }}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{t.problem.compareStaticLabel}</span>
          </div>

          <div className="my-auto whitespace-nowrap min-w-[280px]">
            <span
              className="text-4xl sm:text-6xl font-bold font-tabular tracking-tight line-through opacity-70 block"
              style={{ color: tokens.textFaint }}
            >
              {staticTime}
            </span>
            <div
              className="mt-2 text-xs font-tabular font-semibold inline-flex items-center gap-1.5 px-2.5 py-1 rounded border"
              style={{
                color: tokens.alertFg,
                backgroundColor: `${tokens.alertFill}15`,
                borderColor: `${tokens.alertFill}40`,
              }}
            >
              <span>{t.problem.compareFalsePromise}</span>
            </div>
            <p className="mt-2 text-xs max-w-xs" style={{ color: tokens.textMuted }}>
              {t.problem.compareStaticDesc}
            </p>
          </div>

          <div className="text-[11px] font-tabular whitespace-nowrap" style={{ color: tokens.textFaint }}>
            {t.problem.compareStaticFooter}
          </div>
        </div>

        {/* Draggable Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 z-30 pointer-events-none transform -translate-x-1/2"
          style={{
            left: `${sliderPosition}%`,
            backgroundColor: tokens.poleStarFill,
            boxShadow: `0 0 12px ${tokens.poleStarFill}`,
          }}
        >
          {/* Circular Grab Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: tokens.surface1,
              borderColor: tokens.poleStarFill,
              color: tokens.poleStarFg,
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18-6-6 6-6" />
              <path d="m15 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
