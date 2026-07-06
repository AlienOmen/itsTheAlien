import { useEffect, useState } from 'react';

const SHOW_AFTER_MS = 250;   // don't appear at all for fast/cached loads
const MIN_VISIBLE_MS = 700;  // once shown, hold long enough not to blink
const MAX_WAIT_MS = 4000;    // never hold the page hostage

export function Loader() {
  const [phase, setPhase] = useState<'pending' | 'visible' | 'fading' | 'done'>('pending');

  useEffect(() => {
    let shownAt = 0;
    const timers: number[] = [];
    const showTimer = window.setTimeout(() => {
      shownAt = performance.now();
      setPhase('visible');
    }, SHOW_AFTER_MS);

    const portrait = new Promise<void>((res) => {
      const img = new Image();
      img.onload = () => res();
      img.onerror = () => res();
      img.src = '/portrait.png';
      if (img.complete) res();
    });
    const fonts: Promise<unknown> = document.fonts?.ready ?? Promise.resolve();
    const cap = new Promise<void>((res) => timers.push(window.setTimeout(res, MAX_WAIT_MS)));

    Promise.race([Promise.all([portrait, fonts]), cap]).then(() => {
      window.clearTimeout(showTimer);
      if (!shownAt) {
        setPhase('done'); // finished before the show threshold — never appear
        return;
      }
      const holdLeft = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAt));
      timers.push(window.setTimeout(() => {
        setPhase('fading');
        timers.push(window.setTimeout(() => setPhase('done'), 500));
      }, holdLeft));
    });

    return () => { window.clearTimeout(showTimer); timers.forEach(window.clearTimeout); };
  }, []);

  if (phase === 'pending' || phase === 'done') return null;
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-void
                  transition-opacity duration-500 ${phase === 'fading' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="loader-ping absolute inset-0 rounded-full border border-acid/60" />
        <img src="/brand/logo-mark.png" alt="" className="h-10 w-auto" />
      </div>
      <p className="loader-dots font-mono text-xs uppercase tracking-[0.4em] text-ash">Receiving transmission</p>
    </div>
  );
}
