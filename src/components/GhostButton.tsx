export function GhostButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-bone text-bone font-mono font-medium uppercase
                 tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
                 transition-colors duration-200 hover:bg-bone/10"
    >
      {label}
    </a>
  );
}
