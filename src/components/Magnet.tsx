import { useRef, useState, useEffect, type RefObject } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** activation container: the magnet follows the cursor anywhere inside this element.
      Defaults to the whole viewport so the portrait roams the full hero. */
  boundsRef?: RefObject<HTMLElement | null>;
  /** larger = less travel. */
  strength?: number;
  /** hard clamp on how far the element can drift, in px. */
  maxTravel?: number;
  className?: string;
}

const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));

export function Magnet({ children, boundsRef, strength = 5, maxTravel = 140, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const bounds = boundsRef?.current ?? document.documentElement;
      const b = bounds.getBoundingClientRect();
      const inside =
        e.clientX >= b.left && e.clientX <= b.right &&
        e.clientY >= b.top && e.clientY <= b.bottom;
      if (!inside) {
        setActive(false);
        setOffset({ x: 0, y: 0 });
        return;
      }
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setActive(true);
      setOffset({
        x: clamp((e.clientX - cx) / strength, maxTravel),
        y: clamp((e.clientY - cy) / strength, maxTravel),
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [boundsRef, strength, maxTravel]);

  return (
    <div ref={ref} className={className} style={{
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: active ? 'transform 0.35s ease-out' : 'transform 0.7s ease-in-out',
      willChange: 'transform',
    }}>
      {children}
    </div>
  );
}
