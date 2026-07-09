import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { CaseStudy } from '../data/caseStudies';
import { useContent } from '../i18n/useContent';

function Label({ children }: { children: string }) {
  return <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-acid">{children}</p>;
}
function Body({ children }: { children: string }) {
  return <p className="font-body leading-relaxed text-bone/90" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}>{children}</p>;
}

export function CaseStudyOverlay({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const { ui } = useContent();
  const L = ui.caseLabels;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <motion.div
      role="dialog" aria-modal="true" aria-label={`${study.title} case study`}
      className="fixed inset-0 z-[90] overflow-y-auto bg-void"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button type="button" onClick={onClose} aria-label={ui.closeCaseStudy}
              className="fixed right-5 top-5 z-[95] flex h-12 w-12 items-center justify-center rounded-full border-2 border-bone/60 bg-void/60 text-bone backdrop-blur transition-colors hover:border-acid hover:text-acid sm:right-8 sm:top-8">
        <X className="h-5 w-5" />
      </button>

      <motion.div
        className="mx-auto max-w-4xl px-5 pb-24 pt-20 sm:px-8 md:pt-28"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ash">{study.category} · {ui.heroCaseStudy}</p>
        <h2 className="mt-4 font-display font-black uppercase leading-none" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 72px)' }}>
          {study.title}
        </h2>
        <p className="mt-4 font-body text-lg text-ash md:text-xl">{study.tagline}</p>

        {/* page-1 hero */}
        <img src={study.hero} alt={`${study.title} — key visual`} className="mt-10 aspect-[3/2] w-full rounded-[24px] object-cover" />

        <div className="mt-12 grid gap-6 border-y border-line py-8 md:grid-cols-3">
          <div><Label>{L.client}</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.client}</p></div>
          <div><Label>{L.brief}</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.brief}</p></div>
          <div><Label>{L.role}</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.role}</p></div>
        </div>

        <div className="mt-14"><Label>{L.problem}</Label><Body>{study.problem}</Body></div>

        <blockquote className="my-14 border-l-4 border-acid pl-6">
          <Label>{L.insight}</Label>
          <p className="font-display text-2xl uppercase leading-tight text-bone md:text-3xl">“{study.insight}”</p>
        </blockquote>

        <div><Label>{L.concept}</Label><Body>{study.concept}</Body></div>

        <div className="mt-8 rounded-[24px] border border-line bg-panel2 p-6 md:p-8">
          <Label>{L.moodboard}</Label>
          <Body>{study.moodboard}</Body>
        </div>

        <div className="mt-8">
          <Label>{L.keyDecisions}</Label>
          <ul className="mt-2 flex flex-col gap-3">
            {study.keyDecisions.map((k, i) => (
              <li key={i} className="flex gap-4 border-t border-line pt-3">
                <span className="font-mono text-sm text-acid">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-body text-sm leading-relaxed text-bone/90">{k}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* page-3 showcase: main + supporting bands */}
        <img src={study.showcase[0]} alt={`${study.title} — execution`} className="mt-14 w-full rounded-[24px] object-cover" />
        <div className="mt-4 flex flex-col gap-4">
          {study.showcase.slice(1).map((src, i) => (
            <img key={i} src={src} alt={`${study.title} — showcase ${i + 2}`} className="w-full rounded-[20px] object-cover" loading="lazy" />
          ))}
        </div>

        <div className="mt-14"><Label>{L.execution}</Label><Body>{study.execution}</Body></div>

        <div className="mt-14">
          <Label>{L.impact}</Label>
          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {study.impact.map((line) => (
              <li key={line} className="flex gap-3 rounded-2xl border border-line bg-panel p-4">
                <span className="text-acid">✦</span>
                <span className="font-body text-sm leading-relaxed text-bone/90">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 rounded-[24px] border border-line bg-panel2 p-8">
          <Label>{L.learning}</Label>
          <p className="font-body text-lg italic leading-relaxed text-bone">{study.learning}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span key={t} className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ash">{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
