import React, { useState, useEffect } from 'react';
import { MagneticButton } from '../motion/MagneticButton';
import { Sun, Moon, Zap, Globe } from 'lucide-react';
import { useApp, PerformanceTier } from '../../context/AppContext';

interface TopBarProps {
  onLaunchHud: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onLaunchHud }) => {
  const { theme, toggleTheme, tier, setTier, language, toggleLanguage, t, tokens } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [showTierMenu, setShowTierMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--surface-1)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#chapter-00"
          className="text-lg sm:text-xl font-bold tracking-widest text-[var(--text)] font-tabular transition-colors hover:text-[var(--pole-star-fg)] focus-visible:outline-none"
        >
          {t.nav.brand}
        </a>

        {/* Zone 2: 4-6 clean text navigation links with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[var(--text-muted)]">
          <a
            href="#chapter-01"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.problem}
          </a>
          <a
            href="#chapter-02"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.shift}
          </a>
          <a
            href="#chapter-03"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.pipeline}
          </a>
          <a
            href="#chapter-04"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.liveHud}
          </a>
          <a
            href="#chapter-05"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.impact}
          </a>
          <a
            href="#chapter-06"
            className="hover:text-[var(--text)] transition-colors hover:underline underline-offset-8 decoration-[var(--pole-star-fg)]"
          >
            {t.nav.trust}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions and infrastructure controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle (English / हिन्दी) */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-xs font-tabular text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--pole-star-fg)] transition-all flex items-center gap-1.5 cursor-pointer"
            title={t.a11y.toggleLanguage}
            aria-label={t.a11y.toggleLanguage}
          >
            <Globe className="w-3.5 h-3.5 text-[var(--pole-star-fg)]" />
            <span className="font-semibold">{t.nav.langToggle}</span>
          </button>

          {/* Performance Tier Toggle / Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowTierMenu(!showTierMenu)}
              className="px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-xs font-tabular text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--pole-star-fg)] transition-all flex items-center gap-1.5 cursor-pointer"
              title={t.a11y.hardwareTier}
              aria-label={t.a11y.hardwareTier}
            >
              <Zap className="w-3.5 h-3.5 text-[var(--pole-star-fg)]" />
              <span className="hidden sm:inline capitalize">{tier}</span>
            </button>

            {showTierMenu && (
              <div className="absolute right-0 mt-2 w-44 p-1.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] shadow-xl z-50 text-xs font-tabular">
                <span className="block px-2 py-1 text-[10px] text-[var(--text-faint)] uppercase tracking-wider font-semibold">
                  {t.nav.tierLabel}
                </span>
                {(['cinematic', 'standard', 'lite'] as PerformanceTier[]).map((tMode) => (
                  <button
                    key={tMode}
                    onClick={() => {
                      setTier(tMode);
                      setShowTierMenu(false);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-md capitalize transition-colors flex items-center justify-between cursor-pointer ${
                      tier === tMode
                        ? 'bg-[var(--surface-2)] text-[var(--pole-star-fg)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    <span>{tMode}</span>
                    {tier === tMode && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Day / Night Theme Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--pole-star-fg)] transition-all cursor-pointer"
            title={t.a11y.toggleDayNight}
            aria-label={t.a11y.toggleDayNight}
          >
            {theme === 'night' ? (
              <Sun className="w-4 h-4" style={{ color: tokens.poleStarFg }} />
            ) : (
              <Moon className="w-4 h-4" style={{ color: tokens.poleStarFg }} />
            )}
          </button>

          {/* Primary CTA Button */}
          <MagneticButton
            onClick={onLaunchHud}
            data-cta-primary="true"
            data-cursor-label={language === 'hi' ? 'देखें' : 'Launch'}
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--pole-star-fill)] text-[var(--ink-on-paper)] hover:bg-[var(--ember)] shadow-md whitespace-nowrap"
          >
            {t.nav.interactiveHudCta}
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
