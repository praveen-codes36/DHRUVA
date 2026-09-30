import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../motion/Reveal';
import { Spotlight } from '../motion/Spotlight';
import { Radio, GitMerge, Cpu, ShieldCheck, Share2, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const STAGE_ICONS = [Radio, GitMerge, Cpu, ShieldCheck, Share2];

export const Chapter03Pipeline: React.FC = () => {
  const { language, t } = useApp();
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const stages = t.pipeline.stages;
  const activeStage = stages[activeStageIndex] || stages[0];

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen w-full py-24 px-6 sm:px-8 bg-[var(--bg)] bg-noise overflow-hidden transition-colors duration-500"
    >
      <Spotlight size={520} opacity={0.05} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal distance={16}>
            <span className="text-xs font-tabular tracking-widest text-[var(--pole-star-fg)] uppercase font-semibold">
              {t.pipeline.chapterTag}
            </span>
          </Reveal>
          <Reveal delay={0.1} distance={20}>
            <h2 className={`mt-3 text-3xl sm:text-5xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)] leading-tight text-balance`}>
              {t.pipeline.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2} distance={20}>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans">
              {t.pipeline.description}
            </p>
          </Reveal>
        </div>

        {/* Horizontal Pipeline Step Scrubber */}
        <Reveal delay={0.3} distance={24}>
          <div className="w-full mb-10 overflow-x-auto pb-4">
            <div className="flex items-center min-w-[720px] justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-8 right-8 h-0.5 bg-[var(--border)] -z-0">
                <motion.div
                  className="h-full bg-[var(--pole-star-fill)]"
                  initial={false}
                  animate={{
                    width: `${(activeStageIndex / (stages.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 0.8, 0.2, 1] }}
                />
              </div>

              {stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                const isPassed = activeStageIndex > idx;
                const IconComponent = STAGE_ICONS[idx] || Radio;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStageIndex(idx)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-[var(--pole-star-fill)] border-[var(--pole-star-fg)] text-[var(--ink-on-paper)] scale-110 shadow-md'
                          : isPassed
                          ? 'bg-[var(--surface-1)] border-[var(--on-time-fg)] text-[var(--on-time-fg)]'
                          : 'bg-[var(--surface-2)] border-[var(--border)] text-[var(--text-faint)] group-hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span
                      className={`mt-3 text-xs font-semibold font-tabular uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-[var(--pole-star-fg)]'
                          : isPassed
                          ? 'text-[var(--text)]'
                          : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {stage.step}. {stage.name}
                    </span>
                    <span className="text-[10px] text-[var(--text-faint)] mt-0.5 max-w-[130px] text-center truncate">
                      {stage.shortSummary}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Detailed Stage Deep-Dive Card */}
        <Reveal delay={0.4} distance={20}>
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.step}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 0.8, 0.2, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Stage Left: Description & Mechanism */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-tabular text-[var(--pole-star-fg)] mb-1">
                      <span>{t.pipeline.stagePrefix} {activeStage.step} {t.pipeline.stageOf}</span>
                      <span>·</span>
                      <span className="uppercase">{activeStage.name}</span>
                    </div>
                    <h3 className={`text-2xl font-bold ${language === 'hi' ? 'font-editorial-indic' : 'font-editorial'} text-[var(--text)]`}>
                      {activeStage.mechanismTitle}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-sans">
                    {activeStage.mechanismExplanation}
                  </p>

                  <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
                    <span className="text-xs uppercase tracking-wider text-[var(--text)] font-tabular block mb-2 font-semibold">
                      {t.pipeline.primaryFeedsLabel}
                    </span>
                    <ul className="space-y-2">
                      {activeStage.inputFeeds.map((feed, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-[var(--text)]/90 font-sans"
                        >
                          <Check className="w-4 h-4 text-[var(--on-time-fg)] shrink-0 mt-0.5" />
                          <span>{feed}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stage Right: Math & Latency Telemetry */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--pole-star-fg)] block mb-2 font-tabular font-semibold">
                      {t.pipeline.mathLabel}
                    </span>
                    <div className="p-3 rounded bg-[var(--surface-1)] border border-[var(--border)] font-tabular text-xs text-[var(--on-time-fg)] overflow-x-auto whitespace-nowrap">
                      {activeStage.formulaOrMath}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-tabular">
                      {t.pipeline.budgetLabel}
                    </span>
                    <div className="text-sm font-semibold font-tabular text-[var(--text)]">
                      {activeStage.latencySpecs}
                    </div>
                    <p className="text-xs text-[var(--text-faint)] mt-2 font-sans">
                      {t.pipeline.complianceNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
