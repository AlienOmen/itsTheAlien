import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface Props { children: ReactNode; padding?: number; strength?: number; className?: string }

export function Magnet({ children, padding = 150, strength = 3, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const inRange =
        e.clientX > r.left - padding && e.clientX < r.right + padding &&
        e.clientY > r.top - padding && e.clientY < r.bottom + padding;
      if (inRange) {
        setActive(true);
        setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={className} style={{
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
      willChange: 'transform',
    }}>
      {children}
    </div>
  );
}
