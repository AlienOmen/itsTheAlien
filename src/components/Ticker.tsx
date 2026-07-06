import { clients } from '../data/clients';

export function Ticker() {
  const items = [...clients, ...clients]; // doubled for seamless loop
  return (
    <div className="overflow-hidden border-y border-line py-4" aria-hidden="true">
      <div className="ticker-track flex gap-10 whitespace-nowrap font-mono uppercase tracking-[0.25em] text-ash text-sm">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10">
            {c} <span className="text-acid text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
