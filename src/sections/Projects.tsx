import { useRef, useState } from 'react';
import { useScroll, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { StickyProjectCard } from '../components/StickyProjectCard';
import { CaseStudyOverlay } from '../components/CaseStudyOverlay';
import { useContent } from '../i18n/useContent';

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const { projects, caseStudies, moreWork, ui } = useContent();
  const active = caseStudies.find((c) => c.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="bg-void px-5 pb-24 pt-20 sm:px-8 md:px-10">
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-display font-black uppercase leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {ui.projectsHeading}
        </h2>
      </FadeIn>
      <div ref={ref}>
        {projects.map((p, i) => (
          <StickyProjectCard key={p.num} project={p} index={i} total={projects.length}
                             progress={scrollYProgress} onOpen={setActiveSlug} ctaLabel={ui.viewCaseStudy} />
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-5xl">
        <FadeIn y={30}>
          <p className="mb-10 text-center font-mono text-sm uppercase tracking-[0.3em] text-ash">{ui.moreWorkHeading}</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {moreWork.map((w, i) => (
            <FadeIn key={w.num} delay={i * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-panel">
                <img src={w.image} alt={w.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">{w.num}</p>
                  <h3 className="font-body font-medium uppercase text-bone">{w.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-faint">{w.role}</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ash">{w.blurb}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudyOverlay key={active.slug} study={active} onClose={() => setActiveSlug(null)} />}
      </AnimatePresence>
    </section>
  );
}
