import { MarqueeRow } from '../components/MarqueeRow';
import { marqueeImages } from '../data/marquee';

export function Marquee() {
  return (
    <section className="flex flex-col gap-3 overflow-hidden bg-void pt-24 pb-10 sm:pt-32 md:pt-40">
      <MarqueeRow images={marqueeImages.slice(0, 8)} direction="right" />
      <MarqueeRow images={marqueeImages.slice(8)} direction="left" />
    </section>
  );
}
