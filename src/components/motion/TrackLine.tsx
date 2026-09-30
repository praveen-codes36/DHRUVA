import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { StationBeacon, StationStatus } from './StationBeacon';
import { useApp } from '../../context/AppContext';

export interface RouteStation {
  code: string;
  name: string;
  scheduledTime: string;
  predictedTime?: string;
  platform?: string;
  isTerminal?: boolean;
}

interface TrackLineProps {
  stations: RouteStation[];
  currentStationIndex: number; // e.g. 2 for 3rd station
  progressFraction: number; // 0 to 1 overall route progress
  trainSpeedKmH?: number;
  className?: string;
}

export const TrackLine: React.FC<TrackLineProps> = ({
  stations,
  currentStationIndex,
  progressFraction,
  trainSpeedKmH = 112,
  className = '',
}) => {
  const { tokens, language } = useApp();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const clampedProgress = Math.min(Math.max(progressFraction, 0), 1);
  const percent = clampedProgress * 100;

  return (
    <div className={`w-full py-4 ${className}`}>
      {/* Route header with telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 text-xs font-tabular">
        <div className="flex items-center gap-2" style={{ color: tokens.textMuted }}>
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: tokens.onTimeFill }}
          />
          <span style={{ color: tokens.text }} className="font-semibold">
            {language === 'hi' ? 'आरटीआईएस उपग्रह टेलीमेट्री सक्रिय' : 'RTIS Satellite Telemetry Active'}
          </span>
          <span style={{ color: tokens.textFaint }}>·</span>
          <span>{language === 'hi' ? 'द्वि-आवृत्ति नाविक लॉक' : 'Dual IRNSS/NavIC Lock'}</span>
        </div>
        <div className="flex items-center gap-3" style={{ color: tokens.textMuted }}>
          <span>
            {language === 'hi' ? 'गति' : 'Speed'}:{' '}
            <strong style={{ color: tokens.text }}>{trainSpeedKmH} km/h</strong>
          </span>
          <span style={{ color: tokens.textFaint }}>·</span>
          <span>
            {language === 'hi' ? 'सेक्शन' : 'Section'}:{' '}
            <strong style={{ color: tokens.poleStarFg }}>
              {language === 'hi' ? 'ऑटो-ब्लॉक ट्रैक' : 'Double Auto-Block'}
            </strong>
          </span>
        </div>
      </div>

      {/* Main Track container */}
      <div className="relative w-full pt-6 pb-2">
        {/* Background Track Base */}
        <div
          className="absolute top-10 left-0 right-0 h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: tokens.trackBase }}
        >
          {/* Active completed track */}
          <motion.div
            className="h-full"
            style={{
              background: `linear-gradient(90deg, ${tokens.onTimeFill}, ${tokens.poleStarFill}, ${tokens.ember})`,
            }}
            initial={false}
            animate={{ width: `${percent}%` }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.8,
              ease: [0.16, 0.8, 0.2, 1],
            }}
          />
        </div>

        {/* Train Glyph moving along the track */}
        <motion.div
          className="absolute top-5 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
          initial={false}
          animate={{ left: `${percent}%` }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.8,
            ease: [0.16, 0.8, 0.2, 1],
          }}
        >
          {/* Headlight beam */}
          <div
            className="absolute left-6 top-1 w-24 h-8 pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(ellipse at left center, ${tokens.ember}99 0%, ${tokens.poleStarFill}40 50%, transparent 80%)`,
            }}
          />

          {/* Locomotive Icon */}
          <div
            className="px-2 py-1 rounded shadow-md flex items-center gap-1.5 text-[10px] font-tabular font-semibold whitespace-nowrap"
            style={{
              backgroundColor: tokens.surface1,
              borderColor: tokens.poleStarFill,
              borderWidth: 1,
              color: tokens.poleStarFg,
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              style={{ fill: tokens.poleStarFill }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 4H6c-1.1 0-2 .9-2 2v10c0 1.66 1.34 3 3 3l-1.5 1.5v.5h17v-.5L21 19c1.66 0 3-1.34 3-3V6c0-1.1-.9-2-2-2zm-6 2c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6zm-5 4h10v3H7v-3zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            <span>{language === 'hi' ? 'इंजन' : 'LOCO'}</span>
          </div>

          {/* Vertical pin pointer */}
          <div className="w-0.5 h-2" style={{ backgroundColor: tokens.poleStarFill }} />
        </motion.div>

        {/* Stations along the line */}
        <div className="relative flex justify-between items-start z-10">
          {stations.map((station, index) => {
            let status: StationStatus = 'upcoming';
            if (index < currentStationIndex) status = 'passed';
            else if (index === currentStationIndex) status = 'current';

            return (
              <StationBeacon
                key={station.code}
                status={status}
                code={station.code}
                name={station.name}
                scheduledTime={station.scheduledTime}
                actualOrPredictedTime={station.predictedTime}
                platform={station.platform}
                isTerminal={station.isTerminal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
