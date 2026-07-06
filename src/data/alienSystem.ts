export interface Program {
  badge: string; part: string; name: string; nameAccent: string; tagline: string;
  modules: { num: string; title: string; desc: string }[];
}
export const programs: Program[] = [
  {
    badge: 'Part 01', part: 'Design System', nameAccent: 'A.L.I.E.N.', name: 'Design System',
    tagline: 'From regular designer to impact-driven Alien Creator. Design, AI, storytelling, and business — so you create visuals that actually sell, not just look "nice".',
    modules: [
      { num: '01', title: 'Think Like an Alien Designer', desc: 'mindset, strategy, STOP→FEEL→ACT' },
      { num: '02', title: 'Visual Magnetic Technique', desc: 'focal points, composition, visual impact' },
      { num: '03', title: 'AI-Powered Creative Workflows', desc: 'tools, prompting, production speed' },
      { num: '04', title: 'Brand Storytelling', desc: 'narrative systems that stick' },
      { num: '05', title: 'Client Prospecting', desc: 'finding and winning the right clients' },
      { num: '06', title: 'Pricing & Business', desc: 'charging what your work is worth' },
    ],
  },
  {
    badge: 'Part 02', part: 'Business Version', nameAccent: 'Alien', name: 'Authority',
    tagline: 'From Alien Designer to Alien Authority — a recognized expert in your niche with a system of work, steady clients, and premium pricing.',
    modules: [
      { num: 'A', title: 'Authority & Alignment', desc: 'become the reference in your niche' },
      { num: 'L', title: 'Leverage & Leads', desc: 'make your work generate opportunities' },
      { num: 'I', title: 'Identity & Influence', desc: 'build a personal brand that attracts' },
      { num: 'E', title: 'Execution & Excellence', desc: 'systems for consistent quality delivery' },
      { num: 'N', title: 'Network & Negotiate', desc: 'premium clients, premium rates' },
    ],
  },
];
export const acronym = [
  { letter: 'A', word: 'Authentic', desc: 'Show up as yourself, not a trend copy' },
  { letter: 'L', word: 'Legendary', desc: 'Work that outlives the brief' },
  { letter: 'I', word: 'Intentional', desc: 'Every pixel has a reason' },
  { letter: 'E', word: 'Elevated', desc: 'Above the noise, always' },
  { letter: 'N', word: 'Notable', desc: 'Impossible to scroll past' },
];
