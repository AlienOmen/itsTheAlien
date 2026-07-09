import { useLang, type Lang } from './LanguageProvider';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center gap-1 font-mono text-sm font-medium uppercase tracking-wider ${className}`}
         role="group" aria-label="Language">
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`transition-colors duration-200 ${lang === l.code ? 'text-acid' : 'text-bone/60 hover:text-bone'}`}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && <span className="mx-1.5 text-bone/30">/</span>}
        </span>
      ))}
    </div>
  );
}
