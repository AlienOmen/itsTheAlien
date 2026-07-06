import { FadeIn } from '../components/FadeIn';
import { ShowreelPlayer } from '../components/ShowreelPlayer';

export function Showreel() {
  return (
    <section className="bg-void px-5 py-16 sm:px-8 md:px-10 md:py-24">
      <FadeIn y={40}>
        <p className="mb-6 text-center font-mono text-sm uppercase tracking-[0.3em] text-ash">Showreel · 20 Years in Motion</p>
        <ShowreelPlayer src="/showreel.mp4" poster="/showreel-poster.jpg" />
      </FadeIn>
    </section>
  );
}
