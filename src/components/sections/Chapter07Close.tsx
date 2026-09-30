import React from 'react';
import { CelestialSky } from '../canvas/CelestialSky';
import { Reveal } from '../motion/Reveal';
import { MagneticButton } from '../motion/MagneticButton';
import { Spotlight } from '../motion/Spotlight';
import { useApp } from '../../context/AppContext';

interface Chapter07CloseProps {
  onReturnToHud: () => void;
}

export const Chapter07Close: React.FC<Chapter07CloseProps> = ({ onReturnToHud }) => {
  const { t, language } = useApp();

  return (
    <section
      id="chapter-07"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-8 bg-[var(--bg)] bg-noise overflow-hidden text-center select-none transition-colors duration-500"
    >
      {/* Return of the Celestial Sky with glowing Dhruva pole star */}
      <CelestialSky showStarSpikes={true} starBrightness={1.25} interactiveParallax={true} />

      <Spotlight size={500} opacity={0.06} />

      {/* Top spacer */}
      <div />

      {/* Main Closing Editorial */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto">
        <Reveal distance={16}>
          <div className="flex items-center justify-center gap-2 text-xs font-tabular tracking-widest text-[var(--text-muted)] mb-6">
            <span className="text-[var(--pole-star-fg)] font-bold">ध्रुव</span>
            <span>·</span>
            <span>{t.close.poleStarTag}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} distance={24}>
          <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
            {t.close.quote}
          </h2>
        </Reveal>

        <Reveal delay={0.3} distance={20}>
          <p className="mt-8 text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed font-sans">
            {t.close.subtext}
          </p>
        </Reveal>

        {/* Quiet CTA Button to jump back to HUD */}
        <Reveal delay={0.4} distance={16}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              onClick={onReturnToHud}
              asAnchor={true}
              href="#chapter-04"
              data-cta-primary="true"
              data-cursor-label={language === 'hi' ? 'लौटें' : 'Return'}
              className="px-6 py-3 rounded-xl bg-[var(--pole-star-fill)] text-[var(--ink-on-paper)] font-semibold text-xs sm:text-sm hover:bg-[var(--ember)] shadow-lg transition-all font-tabular cursor-pointer"
            >
              {t.close.testLiveBtn}
            </MagneticButton>

            <a
              href="#chapter-00"
              className="text-xs font-tabular text-[var(--text-muted)] hover:text-[var(--text)] transition-colors py-2 px-4"
            >
              {t.close.backToStart}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-12 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-faint)] font-tabular gap-4">
        <div>
          <span>{t.close.footerOrg}</span>
          <span className="mx-2">·</span>
          <span>{t.close.footerProblem}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{t.close.footerMinistry}</span>
          <span>·</span>
          <span>{t.close.footerCris}</span>
          <span>·</span>
          <span>{t.close.footerFourSurfaces}</span>
        </div>
      </div>
    </section>
  );
};
