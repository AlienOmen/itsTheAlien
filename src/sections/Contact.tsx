import { MessageCircle } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { GhostButton } from '../components/GhostButton';
import { copy } from '../data/copy';

export function Contact() {
  return (
    <section id="contact" className="bg-void px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn y={40}>
          <h2 className="font-display font-black uppercase leading-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}>
            Let&rsquo;s Create Something <span className="text-acid">Unforgettable.</span>
          </h2>
          <p className="mt-6 font-body text-ash">
            Whether it&rsquo;s a campaign, a brand, or an idea that doesn&rsquo;t have a name yet —
            I&rsquo;m ready to receive your transmission from anywhere in the galaxy.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={copy.links.whatsapp} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-acid px-10 py-3.5 font-mono font-medium uppercase tracking-widest text-void
                          transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(200,255,0,0.45)]">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <GhostButton href={copy.links.portfolioPdf} label="View Portfolio" />
            <GhostButton href={copy.links.linkedin} label="LinkedIn" />
            <GhostButton href={copy.links.behance} label="Behance" />
            <GhostButton href={copy.links.instagram} label="Instagram" />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-ash">
            Direct line · <a href={copy.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-acid hover:underline">+20 114 143 0050</a>
          </p>
        </FadeIn>
      </div>
      <footer className="mt-24 flex flex-col items-center gap-3 border-t border-line pt-8 font-mono text-xs uppercase tracking-widest text-faint">
        <img src="/brand/logo-mark.png" alt="it's The Alien mark" className="h-8 w-auto opacity-80" />
        <span>Ahmed Al Badry · it&rsquo;s THE ALIEN · ♄ Cairo, Egypt</span>
      </footer>
    </section>
  );
}
