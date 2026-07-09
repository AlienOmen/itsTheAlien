import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'es';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void }

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {} });

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('lang');
  if (saved === 'en' || saved === 'es') return saved;
  // fall back to the browser preference, else English
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang: setLangState }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
