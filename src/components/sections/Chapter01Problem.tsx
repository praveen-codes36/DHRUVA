import React, { useState } from 'react';
import { Reveal } from '../motion/Reveal';
import { Odometer } from '../motion/Odometer';
import { Spotlight } from '../motion/Spotlight';
import { CompareSlider } from '../motion/CompareSlider';
import { useApp } from '../../context/AppContext';

export const Chapter01Problem: React.FC = () => {
  const { tokens, t, language } = useApp();
  const [sliderDistance, setSliderDistance] = useState(280); // in km

  // Delay deviation increases non-linearly with distance in reality
  const staticBuffer = 18;
  const realDrift = Math.round(Math.pow(sliderDistance / 100, 1.45) * 6.2);
  const predictionError = Math.max(0, realDrift - staticBuffer);

  return (
    <section
      id="chapter-01"
      className="relative min-h-screen w-full py-24 px-6 sm:px-8 bg-[var(--bg)] bg-noise transition-colors duration-500 overflow-hidden"
    >
      <Spotlight size={600} opacity={0.05} />

      <div className="max-w-6xl mx-auto">
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold">
              {t.problem.chapterTag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-3 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.problem.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.problem.description}
            </p>
          </Reveal>
        </div>

        {/* Editorial-Scale Statistics with Odometer Roll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {/* Stat 1 */}
          <Reveal delay={0.2} distance={24}>
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-tabular block mb-2 font-medium">
                {t.problem.stat1Label}
              </span>
              <div className="text-4xl sm:text-6xl font-bold font-tabular text-[var(--text)] my-2">
                <Odometer value={t.problem.stat1Value} />
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                {t.problem.stat1Desc}
              </p>
            </div>
          </Reveal>

          {/* Stat 2 */}
          <Reveal delay={0.3} distance={24}>
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-tabular block mb-2 font-medium">
                {t.problem.stat2Label}
              </span>
              <div className="text-4xl sm:text-6xl font-bold font-tabular text-[var(--ember)] my-2">
                <Odometer value={t.problem.stat2Value} />
                <span className="text-2xl sm:text-3xl ml-1 opacity-80">{t.problem.stat2Unit}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                {t.problem.stat2Desc}
              </p>
            </div>
          </Reveal>

          {/* Stat 3 */}
          <Reveal delay={0.4} distance={24}>
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-tabular block mb-2 font-medium">
                {t.problem.stat3Label}
              </span>
              <div className="text-4xl sm:text-6xl font-bold font-tabular text-[var(--pole-star-fg)] my-2">
                <Odometer value={t.problem.stat3Value} />
                <span className="text-2xl sm:text-3xl ml-1 opacity-80">{t.problem.stat3Unit}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                {t.problem.stat3Desc}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Visualizing The Disconnect: Static Line vs Ground Reality */}
        <Reveal delay={0.5} distance={28}>
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--pole-star-fg)] font-semibold">
                  {t.problem.trajectoryTag}
                </span>
                <h3 className="text-lg font-bold text-[var(--text)]">
                  {t.problem.trajectoryTitle}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-tabular">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <span className="w-3 h-0.5 bg-[var(--text-faint)]" />
                  <span>{t.problem.staticLegend}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--alert-fg)]">
                  <span className="w-3 h-0.5 bg-[var(--alert-fg)]" />
                  <span>{t.problem.realityLegend}</span>
                </div>
              </div>
            </div>

            {/* SVG Trajectory Comparison Graphic */}
            <div className="relative w-full h-48 sm:h-64 my-6 bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden p-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 220"
                preserveAspectRatio="none"
              >
                {/* Grid guidelines */}
                <line x1="0" y1="40" x2="800" y2="40" stroke="var(--border)" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="800" y2="110" stroke="var(--border)" strokeDasharray="3 3" />
                <line x1="0" y1="180" x2="800" y2="180" stroke="var(--border)" strokeDasharray="3 3" />

                {/* Rigid Timetable Line */}
                <line
                  x1="40"
                  y1="110"
                  x2="760"
                  y2="110"
                  stroke={tokens.textFaint}
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />

                {/* Actual Reality Line */}
                <path
                  d="M 40 110 Q 120 108, 180 125 T 280 140 T 380 120 T 480 165 T 580 150 T 680 195 T 760 190"
                  fill="none"
                  stroke={tokens.alertFg}
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Shaded error gap */}
                <path
                  d="M 40 110 Q 120 108, 180 125 T 280 140 T 380 120 T 480 165 T 580 150 T 680 195 T 760 190 L 760 110 Z"
                  fill={tokens.alertFill}
                  opacity="0.12"
                />

                {/* Section Incident Annotations */}
                <circle cx="180" cy="125" r="4" fill={tokens.cautionFill} />
                <text x="180" y="95" fill={tokens.textMuted} fontSize="10" fontFamily="monospace" textAnchor="middle">
                  {t.problem.speedRestrictionNote}
                </text>

                <circle cx="480" cy="165" r="4" fill={tokens.alertFill} />
                <text x="480" y="145" fill={tokens.alertFg} fontSize="10" fontFamily="monospace" textAnchor="middle">
                  {t.problem.freightCrossoverNote}
                </text>

                <circle cx="680" cy="195" r="4" fill={tokens.alertFill} />
                <text x="680" y="175" fill={tokens.alertFg} fontSize="10" fontFamily="monospace" textAnchor="middle">
                  {t.problem.outerSignalNote}
                </text>
              </svg>
            </div>

            {/* Interactive Distance Scrubbing Slider */}
            <div className="pt-4 border-t border-[var(--border)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2 text-xs font-tabular">
                <span className="text-[var(--text-muted)]">
                  {t.problem.sliderInspectLabel} <strong className="text-[var(--text)]">{sliderDistance} km</strong>
                </span>
                <span className="text-[var(--alert-fg)]">
                  {t.problem.sliderCumulativeError} <strong>+{predictionError} {t.problem.sliderUnitMin}</strong>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={sliderDistance}
                onChange={(e) => setSliderDistance(Number(e.target.value))}
                className="w-full accent-[var(--pole-star-fg)] cursor-pointer bg-[var(--surface-2)] h-1.5 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[var(--text-faint)] font-tabular mt-1">
                <span>{t.problem.sliderStationOrigin}</span>
                <span>{t.problem.sliderStationMathura}</span>
                <span>{t.problem.sliderStationPalwal}</span>
                <span>{t.problem.sliderStationFaridabad}</span>
                <span>{t.problem.sliderStationDelhi}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The CompareSlider: Before/After Static Timetable vs DHRUVA Live ETA */}
        <Reveal delay={0.6} distance={28}>
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-xl">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[var(--pole-star-fg)] font-semibold">
                {t.problem.compareTitle}
              </span>
              <h3 className="text-lg font-bold text-[var(--text)]">
                {t.problem.compareSub}
              </h3>
            </div>
            <CompareSlider
              staticTime="08:32 AM"
              dhruvaTime="08:50 AM"
              actualArrival="08:49 AM"
              stationName={language === 'hi' ? 'हज़रत निज़ामुद्दीन (NZM)' : 'Hazrat Nizamuddin (NZM)'}
              trainName={language === 'hi' ? '12951 मुंबई राजधानी' : '12951 Mumbai Rajdhani'}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
