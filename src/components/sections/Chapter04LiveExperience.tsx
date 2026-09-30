import React from 'react';
import { Reveal } from '../motion/Reveal';
import { TrainArrivalHud } from '../hud/TrainArrivalHud';
import { Spotlight } from '../motion/Spotlight';
import { useApp } from '../../context/AppContext';

export const Chapter04LiveExperience: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section
      id="chapter-04"
      className="relative min-h-screen w-full py-24 px-4 sm:px-8 bg-[var(--bg)] bg-noise overflow-hidden transition-colors duration-500"
    >
      <Spotlight size={600} opacity={0.06} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold">
              {t.hud.chapter04Tag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-3 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.hud.chapter04Title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.hud.chapter04Desc}
            </p>
          </Reveal>
        </div>

        {/* The Working Interactive HUD Component */}
        <Reveal delay={0.3} distance={24}>
          <TrainArrivalHud />
        </Reveal>
      </div>
    </section>
  );
};
