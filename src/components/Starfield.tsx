import { useMemo } from 'react';

interface Star { left: number; top: number; size: number; delay: number; duration: number; dim: number }

// deterministic pseudo-random so the sky doesn't reshuffle every render
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Starfield({ count = 110 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    const rnd = mulberry32(1313);
    return Array.from({ length: count }, () => ({
      left: rnd() * 100,
      top: rnd() * 100,
      size: rnd() < 0.85 ? 1 : 2,
      delay: rnd() * 6,
      duration: 2.5 + rnd() * 5,
      dim: 0.25 + rnd() * 0.55,
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint deep-space glow so the black isn't flat */}
      <div className="absolute inset-0"
           style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(139,145,131,0.08) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(200,255,0,0.03) 0%, transparent 55%)' }} />
      {stars.map((s, i) => (
        <span key={i} className="star absolute rounded-full bg-bone"
              style={{
                left: `${s.left}%`, top: `${s.top}%`,
                width: s.size, height: s.size,
                opacity: s.dim,
                animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`,
              }} />
      ))}
    </div>
  );
}
