export interface Project {
  num: string; category: string; title: string; result: string; desc: string;
  image: string; slug: string;
}
export const projects: Project[] = [
  {
    num: '01', category: 'Client · 2023', title: 'ARAFA — 100 Million Style',
    result: '+20M Impressions · +9M Video Views · Ads of the World',
    desc: "Turned Egypt's fashion crisis into a cultural movement. Bold Arabic typography at monumental scale — TV, OOH, radio, social.",
    image: '/case/arafa-hero.jpg', slug: 'arafa',
  },
  {
    num: '02', category: 'Client · 2025', title: 'InstaPay — w INGEZ',
    result: '12.5M+ Users · National Fintech Platform',
    desc: '"And get it done" — bold, high-contrast, accessible across all ages and incomes. CBE\'s national digital transformation in one campaign.',
    image: '/case/instapay-hero.jpg', slug: 'instapay',
  },
  {
    num: '03', category: 'Client · 2025', title: 'Pretzo — AI Photoshoot',
    result: '~15% of Traditional Cost · 4 Days vs 2 Weeks',
    desc: 'A scalable product photography system without a studio — real product, AI-built worlds, art-directed to studio grade.',
    image: '/case/pretzo-hero.jpg', slug: 'pretzo',
  },
  {
    num: '04', category: 'Client · 2025', title: 'SparX — Branding & Packaging',
    result: 'Full Scalable Brand System',
    desc: 'New soda brand launched with a bold bubbly "X" mark. Each flavor owns its palette. Scales across merch, promos, and every future drop.',
    image: '/case/sparx-hero.jpg', slug: 'sparx',
  },
  {
    num: '05', category: 'Client · 2024', title: 'Green Pan — Crime. Culprit. Hero.',
    result: '3-Act Narrative · Hotline 19481',
    desc: 'Miniature forensic crime scenes made an invisible habit impossible to ignore — witness, accused, hero.',
    image: '/case/greenpan-hero.jpg', slug: 'greenpan',
  },
  {
    num: '06', category: 'Client · 2025', title: 'Jaguar Snacks',
    result: 'Personality-Led Identity · Always-On System',
    desc: 'Brand world built around one iconic reaction: إيه ده؟! Collage maximalism, hyperspace motion, controlled chaos.',
    image: '/case/jaguar-hero.jpg', slug: 'jaguar',
  },
];
