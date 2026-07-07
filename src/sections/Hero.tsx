import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { Starfield } from '../components/Starfield';
import { copy } from '../data/copy';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'System', href: '#system' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <section ref={heroRef} className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <Starfield />
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <a href="#top"><img src="/brand/logo-mark.png" alt="it's The Alien" className="h-9 w-auto md:h-11" /></a>
          <div className="flex gap-6 md:gap-10">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}
                 className="font-mono text-sm font-medium uppercase tracking-wider text-bone/90 transition-opacity duration-200 hover:opacity-70 md:text-lg">
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* giant type fills the hero as a backdrop layer */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading whitespace-nowrap text-center font-display font-black uppercase leading-none tracking-tight
                         text-[16vw] sm:text-[16.5vw] md:text-[17vw]">
            it&rsquo;s the alien
          </h1>
        </FadeIn>
      </div>

      {/* portrait floats IN FRONT of the type, chasing the cursor.
          positioning lives on a static wrapper: FadeIn (motion.div) animates
          transform and would overwrite class-based translate centering */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[42%]
                      w-[260px] sm:w-[330px] md:w-[400px] lg:w-[460px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet boundsRef={heroRef} strength={4} maxTravel={170}>
            <img src="/portrait.png" alt="Ahmed Al Badry — 3D portrait" className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] font-body font-light uppercase leading-snug tracking-wide text-bone
                        sm:max-w-[220px] md:max-w-[260px]"
             style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            {copy.heroTagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}><ContactButton /></FadeIn>
      </div>
    </section>
  );
}
