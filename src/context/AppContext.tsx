import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEME_TOKENS, ThemeTokens } from '../tokens/theme';
import { TRANSLATIONS, Translations, Language } from '../i18n/translations';

export type ThemeMode = 'night' | 'day';
export type PerformanceTier = 'cinematic' | 'standard' | 'lite';
export type { Language };

interface AppContextType {
  theme: ThemeMode;
  tokens: ThemeTokens;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  tier: PerformanceTier;
  setTier: (tier: PerformanceTier) => void;
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isOnline: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state with localStorage persistence and OS preference fallback
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dhruva_theme') as ThemeMode | null;
      if (saved === 'day' || saved === 'night') return saved;
      return 'night';
    }
    return 'night';
  });

  // Performance tier state: detects hardware/connection or default to lite-first then upgrade
  const [tier, setTierState] = useState<PerformanceTier>('lite');

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dhruva_lang') as Language | null;
      if (saved === 'en' || saved === 'hi') return saved;
    }
    return 'en';
  });

  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dhruva_theme', theme);
  }, [theme]);

  // Save language
  useEffect(() => {
    localStorage.setItem('dhruva_lang', language);
  }, [language]);

  // Detect performance tier on mount (Lite-first render, then upgrade)
  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check saved override first
    const savedTier = localStorage.getItem('dhruva_tier') as PerformanceTier | null;
    if (savedTier === 'cinematic' || savedTier === 'standard' || savedTier === 'lite') {
      setTierState(savedTier);
      return;
    }

    // Auto detection
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = navigator as any;
    const saveData = nav.connection?.saveData === true;
    const effectiveType = nav.connection?.effectiveType;
    const isSlowConnection = effectiveType === '2g' || effectiveType === 'slow-2g';
    const lowCores = nav.hardwareConcurrency && nav.hardwareConcurrency < 4;
    const lowMemory = nav.deviceMemory && nav.deviceMemory < 4;

    if (reducedMotion || saveData || isSlowConnection || (lowCores && lowMemory)) {
      setTierState('lite');
    } else if (effectiveType === '3g' || lowCores || lowMemory) {
      setTierState('standard');
    } else {
      setTierState('cinematic');
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const setTheme = (t: ThemeMode) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === 'night' ? 'day' : 'night'));

  const setTier = (t: PerformanceTier) => {
    setTierState(t);
    localStorage.setItem('dhruva_tier', t);
  };

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'en' ? 'hi' : 'en'));

  const tokens = THEME_TOKENS[theme];
  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        theme,
        tokens,
        setTheme,
        toggleTheme,
        tier,
        setTier,
        language,
        t,
        setLanguage,
        toggleLanguage,
        isOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
