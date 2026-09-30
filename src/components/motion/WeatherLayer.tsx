import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { hexToRgba } from '../../tokens/theme';

export type WeatherState = 'clear' | 'fog' | 'rain';

interface WeatherLayerProps {
  weather: WeatherState;
  className?: string;
}

export const WeatherLayer: React.FC<WeatherLayerProps> = ({ weather, className = '' }) => {
  const { tier, tokens, theme } = useApp();

  if (weather === 'clear' || tier === 'lite') {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden z-10 transition-opacity duration-700 ${className}`}>
      <AnimatePresence>
        {weather === 'fog' && (
          <motion.div
            key="weather-fog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Soft rolling mist curtains */}
            <div
              className={`absolute inset-0 ${theme === 'day' ? 'opacity-20' : 'opacity-40'} mix-blend-screen`}
              style={{
                background: `radial-gradient(ellipse at 50% 60%, ${hexToRgba(tokens.textMuted, 0.22)} 0%, ${hexToRgba(tokens.textFaint, 0.12)} 45%, transparent 75%)`,
              }}
            />
            {/* Animated fog drifts */}
            {tier === 'cinematic' && (
              <motion.div
                animate={{
                  x: [-40, 40, -40],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--surface-2)]/30 to-transparent blur-2xl"
              />
            )}
          </motion.div>
        )}

        {weather === 'rain' && (
          <motion.div
            key="weather-rain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Atmospheric drizzle */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `repeating-linear-gradient(105deg, transparent, transparent 15px, ${hexToRgba(tokens.textMuted, 0.3)} 16px, transparent 17px)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
