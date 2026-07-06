import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0">{char}</motion.span>
    </span>
  );
}

export function AnimatedText({ text, className, style }: { text: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(' ');
  let charIndex = 0;
  const total = text.length;
  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((c, ci) => {
              const i = start + ci;
              return <Char key={ci} char={c} progress={scrollYProgress} range={[i / total, Math.min(1, (i + 1) / total)]} />;
            })}
          </span>
        );
      })}
    </p>
  );
}
