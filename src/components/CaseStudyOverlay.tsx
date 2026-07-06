import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { CaseStudy } from '../data/caseStudies';

function Label({ children }: { children: string }) {
  return <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-acid">{children}</p>;
}

function Body({ children }: { children: string }) {
  return <p className="font-body leading-relaxed text-bone/90" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}>{children}</p>;
}

export function CaseStudyOverlay({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={`${study.title} case study`}
         className="fixed inset-0 z-[90] overflow-y-auto bg-void">
      <button type="button" onClick={onClose} aria-label="Close case study"
              className="fixed right-5 top-5 z-[95] flex h-12 w-12 items-center justify-center rounded-full border-2 border-bone/60 text-bone transition-colors hover:border-acid hover:text-acid sm:right-8 sm:top-8">
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto max-w-4xl px-5 pb-24 pt-20 sm:px-8 md:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ash">{study.category} · Hero Case Study</p>
        <h2 className="mt-4 font-display font-black uppercase leading-none" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 72px)' }}>
          {study.title}
        </h2>
        <p className="mt-4 font-body text-lg text-ash md:text-xl">{study.tagline}</p>

        <div className="mt-10 grid gap-6 border-y border-line py-8 md:grid-cols-3">
          <div><Label>The Client</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.client}</p></div>
          <div><Label>The Brief</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.brief}</p></div>
          <div><Label>My Role</Label><p className="font-body text-sm leading-relaxed text-bone/80">{study.role}</p></div>
        </div>

        <img src={study.gallery[0]} alt={`${study.title} — key visual`} className="mt-12 w-full rounded-[24px] object-cover" />

        <div className="mt-14"><Label>The Problem</Label><Body>{study.problem}</Body></div>

        <blockquote className="my-14 border-l-4 border-acid pl-6">
          <p className="font-display text-2xl uppercase leading-tight text-bone md:text-3xl">“{study.insight}”</p>
        </blockquote>

        <div><Label>The Concept</Label><Body>{study.concept}</Body></div>

        <img src={study.gallery[1]} alt={`${study.title} — execution`} className="mt-12 w-full rounded-[24px] object-cover" />

        <div className="mt-14"><Label>Execution</Label><Body>{study.execution}</Body></div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <img src={study.gallery[2]} alt={`${study.title} — detail 1`} className="w-full rounded-[24px] object-cover" />
          <img src={study.gallery[3]} alt={`${study.title} — detail 2`} className="w-full rounded-[24px] object-cover" />
        </div>

        <div className="mt-14">
          <Label>The Impact</Label>
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
          <Label>What I Learned</Label>
          <p className="font-body text-lg italic leading-relaxed text-bone">{study.learning}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span key={t} className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ash">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
