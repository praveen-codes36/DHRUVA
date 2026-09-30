/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { CustomCursor } from './components/motion/CustomCursor';
import { TopBar } from './components/navigation/TopBar';
import { Chapter00Hero } from './components/sections/Chapter00Hero';
import { Chapter01Problem } from './components/sections/Chapter01Problem';
import { Chapter02Shift } from './components/sections/Chapter02Shift';
import { Chapter03Pipeline } from './components/sections/Chapter03Pipeline';
import { Chapter04LiveExperience } from './components/sections/Chapter04LiveExperience';
import { Chapter05Impact } from './components/sections/Chapter05Impact';
import { Chapter06Trust } from './components/sections/Chapter06Trust';
import { Chapter07Close } from './components/sections/Chapter07Close';

function AppContent() {
  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--pole-star-fill)] selection:text-[var(--ink-on-paper)] transition-colors duration-500">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Universal Top Bar */}
      <TopBar onLaunchHud={() => scrollToChapter('chapter-04')} />

      {/* Chapter Flow — A Journey of Confidence */}
      <main className="relative z-10">
        {/* Chapter 00: Cold Open (Hero) */}
        <Chapter00Hero onScrollNext={() => scrollToChapter('chapter-01')} />

        {/* Chapter 01: The Problem of Static Timetables + CompareSlider */}
        <Chapter01Problem />

        {/* Chapter 02: The Shift (Introducing Dhruva) */}
        <Chapter02Shift />

        {/* Chapter 03: How It Thinks (Continuous 5-Stage Pipeline) */}
        <Chapter03Pipeline />

        {/* Chapter 04: Live Experience Centerpiece HUD (4 Surfaces + Live Simulations) */}
        <Chapter04LiveExperience />

        {/* Chapter 05: Impact Told Through People (3 Human Vignettes) */}
        <Chapter05Impact />

        {/* Chapter 06: Trust & Technology (Technical Appendix) */}
        <Chapter06Trust />

        {/* Chapter 07: Close */}
        <Chapter07Close onReturnToHud={() => scrollToChapter('chapter-04')} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
