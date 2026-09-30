import React from 'react';
import { Reveal } from '../motion/Reveal';
import { Database, Lock, Cpu, Server } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Chapter06Trust: React.FC = () => {
  const { tokens, t, language } = useApp();

  return (
    <section
      id="chapter-06"
      className="relative min-h-screen w-full py-24 px-6 sm:px-8 bg-[var(--surface-2)] text-[var(--text)] overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold border-b border-[var(--border)] pb-1">
              {t.trust.chapterTag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-4 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.trust.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.trust.description}
            </p>
          </Reveal>
        </div>

        {/* Technical Ledger Specification Table */}
        <Reveal delay={0.3} distance={24}>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm overflow-hidden mb-12">
            <div className="px-6 py-4 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between bg-[var(--surface-2)]/50 gap-2">
              <span className="text-xs font-tabular font-bold uppercase tracking-wider text-[var(--text)]">
                {t.trust.specRef}
              </span>
              <span className="text-xs font-tabular text-[var(--text-muted)]">
                {t.trust.govCloudBadge}
              </span>
            </div>

            <div className="divide-y divide-[var(--border)] font-sans">
              {/* Row 1 */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4 font-tabular text-xs font-semibold text-[var(--text)] flex items-center gap-2">
                  <Database className="w-4 h-4 text-[var(--pole-star-fg)]" />
                  <span>{t.trust.item1Title}</span>
                </div>
                <div className="md:col-span-8 text-xs text-[var(--text-muted)] leading-relaxed">
                  {t.trust.item1Desc}
                </div>
              </div>

              {/* Row 2 */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4 font-tabular text-xs font-semibold text-[var(--text)] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[var(--pole-star-fg)]" />
                  <span>{t.trust.item2Title}</span>
                </div>
                <div className="md:col-span-8 text-xs text-[var(--text-muted)] leading-relaxed">
                  {t.trust.item2Desc}
                </div>
              </div>

              {/* Row 3 */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4 font-tabular text-xs font-semibold text-[var(--text)] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[var(--pole-star-fg)]" />
                  <span>{t.trust.item3Title}</span>
                </div>
                <div className="md:col-span-8 text-xs text-[var(--text-muted)] leading-relaxed">
                  {t.trust.item3Desc}
                </div>
              </div>

              {/* Row 4 */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4 font-tabular text-xs font-semibold text-[var(--text)] flex items-center gap-2">
                  <Server className="w-4 h-4 text-[var(--pole-star-fg)]" />
                  <span>{t.trust.item4Title}</span>
                </div>
                <div className="md:col-span-8 text-xs text-[var(--text-muted)] leading-relaxed">
                  {t.trust.item4Desc}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Pillars of Deployment Integrity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <span className="text-[11px] font-tabular uppercase tracking-wider text-[var(--text-faint)] block mb-1">
              {t.trust.pillar1Title}
            </span>
            <span className="text-sm font-bold text-[var(--text)] block">
              {t.trust.pillar1Val}
            </span>
            <p className="text-[11px] text-[var(--text-muted)] mt-2">
              {t.trust.pillar1Desc}
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <span className="text-[11px] font-tabular uppercase tracking-wider text-[var(--text-faint)] block mb-1">
              {t.trust.pillar2Title}
            </span>
            <span className="text-sm font-bold text-[var(--text)] block">
              {t.trust.pillar2Val}
            </span>
            <p className="text-[11px] text-[var(--text-muted)] mt-2">
              {t.trust.pillar2Desc}
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <span className="text-[11px] font-tabular uppercase tracking-wider text-[var(--text-faint)] block mb-1">
              {t.trust.pillar3Title}
            </span>
            <span className="text-sm font-bold text-[var(--text)] block">
              {t.trust.pillar3Val}
            </span>
            <p className="text-[11px] text-[var(--text-muted)] mt-2">
              {t.trust.pillar3Desc}
            </p>
          </div>

          <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface-1)]">
            <span className="text-[11px] font-tabular uppercase tracking-wider text-[var(--text-faint)] block mb-1">
              {t.trust.pillar4Title}
            </span>
            <span className="text-sm font-bold text-[var(--text)] block">
              {t.trust.pillar4Val}
            </span>
            <p className="text-[11px] text-[var(--text-muted)] mt-2">
              {t.trust.pillar4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
