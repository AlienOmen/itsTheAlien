import { FadeIn } from '../components/FadeIn';
import { useContent } from '../i18n/useContent';

export function AlienSystem() {
  const { programs, acronym, ui } = useContent();
  return (
    <section id="system" className="relative z-10 -mt-10 rounded-t-[40px] bg-void px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2 className="text-center font-display font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}>
          {ui.systemHeadA} <span className="text-acid">{ui.systemHeadAccent}</span> {ui.systemHeadB}
        </h2>
        <p className="mx-auto mt-6 max-w-[580px] text-center font-body text-ash">
          {ui.systemSubtitle}
        </p>
      </FadeIn>
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
        {programs.map((p, i) => (
          <FadeIn key={p.badge} delay={i * 0.15}>
            <div className="h-full rounded-[32px] border border-line bg-panel p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid">{p.badge}</span>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint">{p.part}</p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-tight md:text-4xl">
                <span className="text-acid">{p.nameAccent}</span><br />{p.name}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-ash">{p.tagline}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {p.modules.map((m) => (
                  <li key={m.num} className="flex gap-4 border-t border-line pt-3">
                    <span className="font-mono text-sm text-acid">{m.num}</span>
                    <span className="font-body text-sm text-bone">
                      <strong className="font-medium">{m.title}</strong>
                      <span className="text-ash"> — {m.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-5">
          {acronym.map((a) => (
            <div key={a.letter} className="text-center">
              <div className="font-display text-5xl text-acid">{a.letter}</div>
              <div className="mt-2 font-body font-medium uppercase tracking-wide">{a.word}</div>
              <p className="mt-1 font-body text-xs text-ash">{a.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
