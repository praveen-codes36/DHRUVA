import React from 'react';
import { motion } from 'motion/react';
import { CelestialSky } from '../canvas/CelestialSky';
import { SplitText } from '../motion/SplitText';
import { Reveal } from '../motion/Reveal';
import { MagneticButton } from '../motion/MagneticButton';
import { Spotlight } from '../motion/Spotlight';
import { useApp } from '../../context/AppContext';
import { hexToRgba } from '../../tokens/theme';

// Bespoke generated night sky artwork
import nightSkyImg from '../../assets/images/dhruva_night_sky_1790679864756.jpg';

interface Chapter00HeroProps {
  onScrollNext: () => void;
}

export const Chapter00Hero: React.FC<Chapter00HeroProps> = ({ onScrollNext }) => {
  const { language, tier, theme, tokens, t } = useApp();

  return (
    <section
      id="chapter-00"
      className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[var(--bg)] bg-noise pt-24 pb-12 select-none transition-colors duration-500"
    >
      {/* Background artwork with soft mask */}
      <div className={`absolute inset-0 z-0 ${theme === 'day' ? 'opacity-10' : 'opacity-25'} mix-blend-screen pointer-events-none`}>
        <img
          src={nightSkyImg}
          alt={t.hero.altNightArt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)]" />
      </div>

      {/* Interactive Celestial Canvas: Fixed Polaris Pole Star + Drifting Starfield */}
      <CelestialSky showStarSpikes={true} starBrightness={1} interactiveParallax={true} />

      {/* Warm flashlight cursor spotlight (disabled on Lite or Touch) */}
      <Spotlight size={520} opacity={0.06} />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center mt-16 sm:mt-24">
        {/* Sanskrit Root / Heritage Context */}
        <Reveal delay={0.1} distance={12} duration={0.8}>
          <div className="flex items-center justify-center gap-2 text-xs font-tabular tracking-widest text-[var(--text-muted)] mb-6">
            <span className="text-[var(--pole-star-fg)] font-bold">{t.hero.sanskritRoot}</span>
            <span>·</span>
            <span className="uppercase">{t.hero.poleStarTag}</span>
            <span>·</span>
            <span className="text-[var(--text-faint)]">SIH26028</span>
          </div>
        </Reveal>

        {/* The Wordmark: Reveals Letter-by-Letter */}
        <div className="overflow-hidden py-2">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-[0.22em] text-[var(--text)] font-tabular uppercase pl-[0.22em]">
            <SplitText text="DHRUVA" delay={0.3} stagger={0.08} />
          </h1>
        </div>

        {/* The Editorial Thesis Line in Fraunces Serif or Noto Serif Devanagari */}
        <Reveal delay={0.8} distance={20} duration={1}>
          <p className={`mt-8 text-xl sm:text-2xl md:text-3xl text-[var(--text)]/90 ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial italic'} max-w-2xl mx-auto leading-relaxed text-balance`}>
            {t.hero.tagline}
          </p>
        </Reveal>

        {/* Quiet Authentic Subtext */}
        <Reveal delay={1.1} distance={16} duration={0.9}>
          <p className="mt-4 text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed font-sans">
            {t.hero.subtext}
          </p>
        </Reveal>
      </div>

      {/* Train Silhouette Crossing Bottom Third on Faint Rail Line */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16 mb-8 pointer-events-none">
        {/* Faint track line with tie markers */}
        <div className="relative w-full h-[1px] bg-[var(--border)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--text-faint)]/20 to-transparent" />
        </div>

        {/* Silhouette Locomotive with Headlight cutting through night */}
        {tier !== 'lite' && (
          <motion.div
            initial={{ x: '-15%' }}
            animate={{ x: '105%' }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-6 left-0 flex items-center"
          >
            {/* Headlight beam */}
            <div
              className="absolute left-10 -top-4 w-36 h-12 pointer-events-none opacity-40 transform rotate-2"
              style={{
                background: `radial-gradient(ellipse at left center, ${hexToRgba(tokens.ember, 0.7)} 0%, ${hexToRgba(tokens.poleStarFill, 0.25)} 45%, transparent 80%)`,
              }}
            />

            {/* Locomotive silhouette SVG */}
            <svg
              className="w-16 h-8 fill-[var(--surface-2)] stroke-[var(--border)] stroke-[0.5]"
              viewBox="0 0 70 30"
              aria-label={t.a11y.locomotiveIcon}
            >
              <path d="M5 25 L65 25 L62 10 L52 10 L48 5 L18 5 L14 12 L5 12 Z" />
              <circle cx="16" cy="25" r="3.5" fill="var(--surface-1)" stroke="var(--border)" strokeWidth="1" />
              <circle cx="28" cy="25" r="3.5" fill="var(--surface-1)" stroke="var(--border)" strokeWidth="1" />
              <circle cx="40" cy="25" r="3.5" fill="var(--surface-1)" stroke="var(--border)" strokeWidth="1" />
              <circle cx="52" cy="25" r="3.5" fill="var(--surface-1)" stroke="var(--border)" strokeWidth="1" />
              <rect x="22" y="8" width="6" height="4" fill="var(--pole-star-fill)" opacity="0.65" rx="0.5" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Quiet, Magnetic Pill Low on Screen: Invites Scroll */}
      <Reveal delay={1.4} distance={10}>
        <div className="relative z-20 flex flex-col items-center">
          <MagneticButton
            onClick={onScrollNext}
            asAnchor={true}
            href="#chapter-01"
            data-cursor-label={t.hero.explorePill}
            className="px-5 py-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)]/80 backdrop-blur-sm text-xs text-[var(--text-muted)] hover:text-[var(--pole-star-fg)] hover:border-[var(--pole-star-fg)]/60 transition-all font-tabular group shadow-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span>{t.hero.watchItThink}</span>
              <span className="text-[var(--pole-star-fg)] transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </span>
          </MagneticButton>
          <span className="text-[10px] text-[var(--text-faint)] mt-2 font-tabular">
            {t.hero.scrollHint}
          </span>
        </div>
      </Reveal>
    </section>
  );
};
