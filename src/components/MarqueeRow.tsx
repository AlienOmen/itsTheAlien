import { useEffect, useRef, useState } from 'react';

export function MarqueeRow({ images, direction }: { images: string[]; direction: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const x = direction === 'right' ? offset - 200 : -(offset - 200);
  const tripled = [...images, ...images, ...images];
  return (
    <div ref={ref} className="flex gap-3" style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}>
      {tripled.map((src, i) => (
        <img key={i} src={src} loading="lazy" alt=""
             className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover" />
      ))}
    </div>
  );
}
