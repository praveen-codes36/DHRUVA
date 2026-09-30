import React from 'react';
import { Reveal } from '../motion/Reveal';
import { OrbitalConvergence } from '../canvas/OrbitalConvergence';
import { Spotlight } from '../motion/Spotlight';
import { useApp } from '../../context/AppContext';

export const Chapter02Shift: React.FC = () => {
  const { t, language } = useApp();

  return (
    <section
      id="chapter-02"
      className="relative min-h-screen w-full py-24 px-6 sm:px-8 bg-[var(--bg)] bg-noise overflow-hidden transition-colors duration-500"
    >
      <Spotlight size={550} opacity={0.07} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold">
              {t.shift.chapterTag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-3 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.shift.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.shift.description}
            </p>
          </Reveal>
        </div>

        {/* The Centerpiece Orbital Convergence Sequence */}
        <Reveal delay={0.3} distance={24}>
          <OrbitalConvergence />
        </Reveal>

        {/* Three Quiet Axioms of Dhruva */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[var(--border)]">
          <Reveal delay={0.4} distance={20}>
            <div className="space-y-2">
              <span className="text-xs font-tabular text-[var(--pole-star-fg)] uppercase tracking-wider font-semibold">
                {t.shift.axiom1Tag}
              </span>
              <h4 className="text-base font-semibold text-[var(--text)]">
                {t.shift.axiom1Title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                {t.shift.axiom1Desc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5} distance={20}>
            <div className="space-y-2">
              <span className="text-xs font-tabular text-[var(--on-time-fg)] uppercase tracking-wider font-semibold">
                {t.shift.axiom2Tag}
              </span>
              <h4 className="text-base font-semibold text-[var(--text)]">
                {t.shift.axiom2Title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                {t.shift.axiom2Desc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6} distance={20}>
            <div className="space-y-2">
              <span className="text-xs font-tabular text-[var(--ember)] uppercase tracking-wider font-semibold">
                {t.shift.axiom3Tag}
              </span>
              <h4 className="text-base font-semibold text-[var(--text)]">
                {t.shift.axiom3Title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                {t.shift.axiom3Desc}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
