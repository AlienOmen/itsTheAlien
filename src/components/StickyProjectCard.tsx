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
        className="group flex h-full w-full flex-col gap-5 overflow-hidden rounded-[40px] border-2 border-bone/80 bg-void p-5 text-left
                   sm:gap-6 sm:rounded-[50px] sm:p-7 md:rounded-[60px] md:p-9"
      >
        {/* project info — sits on the black */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="hero-heading font-display font-black leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 92px)' }}>
              {project.num}
            </span>
            <div className="pt-1 sm:pt-2">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">{project.category}</p>
              <h3 className="mt-1 font-display uppercase leading-none" style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.8rem)' }}>
                {project.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-acid">{project.result}</p>
            </div>
          </div>
          <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-bone/70 text-bone
                           transition-colors duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-void md:h-14 md:w-14">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        {/* hero image — contained inside the card, black frame around it */}
        <div className="min-h-0 flex-1 overflow-hidden rounded-[24px] sm:rounded-[32px]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* footer on the black */}
        <div className="flex items-end justify-between gap-4">
          <p className="line-clamp-2 max-w-xl font-body text-sm leading-relaxed text-bone/75">{project.desc}</p>
          <span className="shrink-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-bone
                           transition-colors group-hover:text-acid">
            View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.button>
    </div>
  );
}
