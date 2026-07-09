import { FadeIn } from '../components/FadeIn';
import { ShowreelPlayer } from '../components/ShowreelPlayer';
import { useContent } from '../i18n/useContent';

export function Showreel() {
  const { ui } = useContent();
  return (
    <section className="bg-void px-5 py-16 sm:px-8 md:px-10 md:py-24">
      <FadeIn y={40}>
        <p className="mb-6 text-center font-mono text-sm uppercase tracking-[0.3em] text-ash">{ui.showreelLabel}</p>
        <ShowreelPlayer src="/showreel.mp4" poster="/showreel-poster.jpg" label={ui.playShowreel} />
      </FadeIn>
    </section>
  );
}
