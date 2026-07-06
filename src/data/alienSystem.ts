export interface Program {
  badge: string; part: string; name: string; nameAccent: string; tagline: string;
  modules: { num: string; title: string; desc: string }[];
}
export const programs: Program[] = [
  {
    badge: 'Part 01', part: 'Design System', nameAccent: 'A.L.I.E.N.', name: 'Design System',
    tagline: 'From regular designer to impact-driven Alien Creator. Design, AI, storytelling, and business — so you create visuals that actually sell, not just look "nice".',
    modules: [
      { num: 'A', title: 'Alien Mindset', desc: 'think differently from regular designers — what makes a design sell, visual ≠ beautiful, authenticity' },
      { num: 'L', title: 'Layout Magnetism', desc: 'composition + typography that control the eye: where it lands, where it moves, what it remembers' },
      { num: 'I', title: 'Intelligent AI Collaboration', desc: 'AI as your alien co-pilot — prompting, curating the best images, the honest tool stack' },
      { num: 'E', title: 'Execution in Tools', desc: 'ship real assets in Photoshop & Canva — posts, carousels, ads with alien-level finish' },
      { num: 'N', title: 'Networking & Numbers', desc: 'niches, prospecting, pricing — clients come to you, and you charge what it\'s worth' },
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
