import { useRef, useState, useEffect, type RefObject } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** activation container: the magnet follows the pointer anywhere inside this element.
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
    const moveTo = (clientX: number, clientY: number) => {
      const el = ref.current;
      if (!el) return;
      const bounds = boundsRef?.current ?? document.documentElement;
      const b = bounds.getBoundingClientRect();
      const inside =
        clientX >= b.left && clientX <= b.right &&
        clientY >= b.top && clientY <= b.bottom;
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
        x: clamp((clientX - cx) / strength, maxTravel),
        y: clamp((clientY - cy) / strength, maxTravel),
      });
    };
    const reset = () => { setActive(false); setOffset({ x: 0, y: 0 }); };

    const onMouse = (e: MouseEvent) => moveTo(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => { const t = e.touches[0]; if (t) moveTo(t.clientX, t.clientY); };

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', reset, { passive: true });
    window.addEventListener('touchcancel', reset, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', reset);
      window.removeEventListener('touchcancel', reset);
    };
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
