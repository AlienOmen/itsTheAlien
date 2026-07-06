import { FadeIn } from '../components/FadeIn';
import { services } from '../data/expertise';

export function Expertise() {
  return (
    <section id="expertise" className="relative z-0 rounded-t-[40px] bg-bone px-5 py-20 text-void sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2 className="mb-16 text-center font-display font-black uppercase leading-none sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Expertise
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className="flex gap-6 border-t py-8 sm:gap-10 sm:py-10 md:py-12" style={{ borderColor: 'rgba(10, 11, 10, 0.15)' }}>
              <div className="font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{s.num}</div>
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-body font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{s.name}</h3>
                <p className="max-w-2xl font-body font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
