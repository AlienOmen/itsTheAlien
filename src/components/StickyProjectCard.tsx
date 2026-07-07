import { motion, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: (slug: string) => void;
}

export function StickyProjectCard({ project, index, total, progress, onOpen }: Props) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]" style={{ position: 'sticky', top: `calc(6rem + ${index * 28}px)` }}>
      <motion.button
        type="button"
        onClick={() => onOpen(project.slug)}
        style={{ scale }}
        className="group relative block h-full w-full overflow-hidden rounded-[40px] border-2 border-bone/80 bg-void text-left sm:rounded-[50px] md:rounded-[60px]"
      >
        {/* single hero image fills the card */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* legibility gradient — darkens the top where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/50 to-transparent" />

        {/* all project data anchored at the TOP */}
        <div className="relative flex h-full flex-col p-6 sm:p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="hero-heading font-display font-black leading-none drop-shadow-lg"
                    style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}>
                {project.num}
              </span>
              <div className="pt-1 sm:pt-2">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">{project.category}</p>
                <h3 className="mt-1 font-display uppercase leading-none drop-shadow-lg" style={{ fontSize: 'clamp(1.5rem, 3.6vw, 3rem)' }}>
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-acid">{project.result}</p>
              </div>
            </div>
            <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-bone/70 text-bone
                             transition-colors duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-void md:h-14 md:w-14">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-bone/80 drop-shadow-md">{project.desc}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-bone
                           transition-colors group-hover:text-acid">
            View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.button>
    </div>
  );
}
