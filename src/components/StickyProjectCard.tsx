import { motion, useTransform, type MotionValue } from 'framer-motion';
import { GhostButton } from './GhostButton';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export function StickyProjectCard({ project, index, total, progress }: Props) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]" style={{ position: 'sticky', top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale }}
        className="flex h-full flex-col gap-6 rounded-[40px] border-2 border-bone/80 bg-void p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-6">
            <span
              className="hero-heading font-display font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="pt-2">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">{project.category}</p>
              <h3 className="mt-1 font-body text-xl font-medium uppercase sm:text-2xl md:text-3xl">{project.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-acid">{project.result}</p>
            </div>
          </div>
          <GhostButton href={project.url} label="View Project" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[40%_1fr] gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={project.images[0]}
              alt={`${project.title} 1`}
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.title} 2`}
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.title} 3`}
            className="h-full min-h-0 w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
