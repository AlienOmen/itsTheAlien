import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { StickyProjectCard } from '../components/StickyProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="bg-void px-5 pb-24 pt-20 sm:px-8 md:px-10">
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-display font-black uppercase leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>
      <div ref={ref}>
        {projects.map((p, i) => (
          <StickyProjectCard key={p.num} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
