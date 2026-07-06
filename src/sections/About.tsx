import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { copy } from '../data/copy';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1200);
      setN(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const DECOS = [
  { src: '/brand/deco-1.png', cls: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]', delay: 0.1, x: -80 },
  { src: '/brand/deco-2.png', cls: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]', delay: 0.25, x: -80 },
  { src: '/brand/deco-3.png', cls: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]', delay: 0.15, x: 80 },
  { src: '/brand/deco-4.png', cls: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]', delay: 0.3, x: 80 },
];

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-5 py-20 sm:gap-14 sm:px-8 md:gap-16 md:px-10">
      {DECOS.map((d) => (
        <FadeIn key={d.src} delay={d.delay} x={d.x} y={0} duration={0.9} className={`absolute ${d.cls}`}>
          <img src={d.src} alt="" className="w-full" loading="lazy" />
        </FadeIn>
      ))}
      <FadeIn y={40}>
        <h2 className="hero-heading text-center font-display font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          {copy.aboutHeadingA}<br />{copy.aboutHeadingB}
        </h2>
      </FadeIn>
      <AnimatedText text={copy.aboutParagraph}
        className="max-w-[560px] text-center font-body font-medium leading-relaxed text-bone"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      />
      <div className="flex gap-10 sm:gap-16">
        {copy.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl text-acid sm:text-5xl"><CountUp target={s.target} suffix={s.suffix} /></div>
            <div className="mt-1 font-mono text-xs uppercase tracking-widest text-ash">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-10"><ContactButton /></div>
    </section>
  );
}
