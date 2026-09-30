import React from 'react';
import { Reveal } from '../motion/Reveal';
import { Spotlight } from '../motion/Spotlight';
import { Users, Building2, Truck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const VIGNETTE_ICONS = [Users, Building2, Truck];

export const Chapter05Impact: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section
      id="chapter-05"
      className="relative min-h-screen w-full py-24 px-6 sm:px-8 bg-[var(--bg)] bg-noise overflow-hidden transition-colors duration-500"
    >
      <Spotlight size={520} opacity={0.05} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold">
              {t.impact.chapterTag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-3 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.impact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.impact.description}
            </p>
          </Reveal>
        </div>

        {/* Three Human Vignettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.impact.vignettes.map((item, index) => {
            const Icon = VIGNETTE_ICONS[index] || Users;
            return (
              <Reveal key={index} delay={0.2 + index * 0.15} distance={24}>
                <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-lg flex flex-col justify-between h-full group hover:border-[var(--pole-star-fg)]/50 transition-colors duration-300">
                  <div>
                    {/* Location & Role Metadata */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs font-tabular text-[var(--pole-star-fg)]">
                        <Icon className="w-4 h-4" />
                        <span className="font-semibold uppercase tracking-wider">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-[var(--text-faint)] font-tabular mb-1">
                      {item.location}
                    </div>
                    <h3 className={`text-xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] mb-4`}>
                      {item.name}
                    </h3>

                    {/* Micro-story */}
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-sans">
                      {item.story}
                    </p>
                  </div>

                  {/* Single stark stat */}
                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <div className="text-3xl sm:text-4xl font-bold font-tabular text-[var(--pole-star-fg)]">
                      {item.statNumber}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-1 font-sans">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
