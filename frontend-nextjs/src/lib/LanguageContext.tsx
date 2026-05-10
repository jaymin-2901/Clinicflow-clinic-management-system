'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type Lang = 'en' | 'gu';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (english: string, gujarati: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    if (storedLang === 'en' || storedLang === 'gu') {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', nextLang);
    }
  };

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    t: (english: string, gujarati: string) => (lang === 'gu' ? gujarati : english),
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}