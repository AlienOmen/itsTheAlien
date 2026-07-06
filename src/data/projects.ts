export interface Project {
  num: string; category: string; title: string; result: string; desc: string;
  images: [string, string, string]; url: string;
}
const PORTFOLIO = 'https://itsthealien.myportfolio.com/';
export const projects: Project[] = [
  {
    num: '01', category: 'Client · 2023', title: 'ARAFA — 100 Million Style',
    result: '+20M Impressions · +9M Video Views · Ads of the World',
    desc: "Turned Egypt's fashion crisis into a cultural movement. Bold Arabic typography at monumental scale — TV, OOH, radio, social.",
    images: ['/work/arafa-1.jpg', '/work/arafa-2.jpg', '/work/arafa-3.jpg'],
    url: PORTFOLIO + 'arafa-100-million-style-360-campaign',
  },
  {
    num: '02', category: 'Client · 2025', title: 'InstaPay — w INGEZ',
    result: '12M+ Users · 532% CAGR',
    desc: '"And get it done" — bold, high-contrast, accessible across all ages and incomes. CBE\'s national digital transformation in one campaign.',
    images: ['/work/instapay-1.jpg', '/work/instapay-2.jpg', '/work/instapay-3.jpg'],
    url: PORTFOLIO + 'instapay-w-ingez',
  },
  {
    num: '03', category: 'Client · 2025', title: 'SparX — Soda Identity System',
    result: 'Full Scalable Brand System',
    desc: 'New soda brand launched with a bold bubbly "X" mark. Each flavor owns its palette. Scales across merch, promos, and every future drop.',
    images: ['/work/sparx-1.jpg', '/work/sparx-2.jpg', '/work/sparx-3.jpg'],
    url: PORTFOLIO + 'sparx-visual-identity-packaging',
  },
];
