import { copy } from '../data/copy';
import { useContent } from '../i18n/useContent';

export function ContactButton({ href = copy.links.whatsapp, label }: { href?: string; label?: string }) {
  const { ui } = useContent();
  const text = label ?? ui.contactMe;
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-block rounded-full bg-acid text-void font-mono font-medium uppercase tracking-widest
                 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base
                 transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(200,255,0,0.45)]"
    >
      {text}
    </a>
  );
}
