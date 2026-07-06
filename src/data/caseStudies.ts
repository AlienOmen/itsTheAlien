export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  client: string;
  brief: string;
  role: string;
  problem: string;
  insight: string;
  concept: string;
  execution: string;
  impact: string[];
  learning: string;
  tags: string[];
  /** shown inside the overlay, in order */
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'arafa',
    title: 'ARAFA — 100 Million Style',
    category: '360° Campaign',
    tagline: 'Turning a national boycott into a cultural movement.',
    client: "Arafa Group — founded 1907, Egypt's oldest fashion & textile house. Parent of Concrete, Guy Laroche, Mario Barutti.",
    brief: 'Protect market share during the 2023 boycott wave against Western brands — and position Arafa stores as the obvious Egyptian choice.',
    role: 'Art Director, 360° Campaign Lead — directed photography, typography system, OOH production, TV/radio adaptation, and social content.',
    problem: "Consumers were actively seeking Egyptian alternatives, but didn't yet think of fashion as a place to express that. Foreign brands still owned the perception of “style.” Arafa didn't need more visibility — it needed to redefine what “style” looks like, locally.",
    insight: "The boycott isn't about what you stop buying — it's about what you start being proud of.",
    concept: '“100 MILLION STYLE” — every Egyptian is a style icon. Not the model. Not the campaign. You.',
    execution: 'Deployed across TV spots, OOH in 10 premium Cairo locations (Ring Road, 6th October, New Cairo), radio on 4 national stations, and a social competition inviting Egyptians to post their own “100 Million Style” looks.',
    impact: [
      '+20 million impressions across platforms',
      '+9 million video views',
      'OOH across 10 premium Cairo locations',
      'Radio on 4 leading national stations',
      'Featured on Ads of the World',
    ],
    learning: "In a cultural moment, don't sell — celebrate. The campaigns that tried to defend “buy local” felt political. The one that celebrated people felt human. That's what made it spread.",
    tags: ['360° Campaign', 'OOH', 'TV', 'Radio', 'Social', 'Arabic Typography'],
    gallery: ['/work/arafa-1.jpg', '/case/arafa-exec.jpg', '/work/arafa-2.jpg', '/work/arafa-3.jpg'],
  },
  {
    slug: 'instapay',
    title: 'InstaPay — w INGEZ',
    category: 'Mass Campaign · Fintech',
    tagline: 'Making instant payments feel natural in everyday life.',
    client: "InstaPay — flagship app of Egypt's Instant Payment Network (IPN), operated by the Egyptian Banks Company under CBE.",
    brief: "InstaPay had already scaled — 12M+ users and 1.5B+ transactions. The challenge wasn't growth. It was behavior: how do you make mass users stop defaulting to cash?",
    role: 'Art Director, Campaign Creative — led the visual system, casting direction, and AI-driven photography approach across all campaign scenarios and platforms.',
    problem: "Cash isn't just a payment method in Egypt — it's a habit. Digital payments still felt distant, not built for them. Making InstaPay feel premium would alienate the mass; making it feel cheap would break trust.",
    insight: "The obstacle isn't understanding InstaPay — it's feeling like it belongs to them. People don't adopt tools. They adopt what feels familiar.",
    concept: '“w INGEZ” (وانجز — “and get it done”). A phrase from everyday Egyptian life, not a banking slogan. Short. Direct. Already owned by the people.',
    execution: 'Multi-market rollout: TV, Digital OOH, YouTube, Instagram, Facebook, TikTok. All assets adapted across EN/AR with RTL typography and Arabic-first hierarchy. Print-ready and social-native versions produced in parallel.',
    impact: [
      '12.5M+ users supported across the platform',
      'Visual system scalable across real-life scenarios',
      'Consistent output across diverse casting and environments',
      'Campaign platform designed for long-term brand ownership',
    ],
    learning: "The challenge wasn't design — it was restraint. We didn't need it to look “premium.” We needed it to feel real. AI didn't replace the craft — it gave us control over it.",
    tags: ['Fintech', 'Mass Campaign', 'OOH', 'Digital', 'Arabic Typography'],
    gallery: ['/work/instapay-1.jpg', '/case/instapay-exec.jpg', '/work/instapay-2.jpg', '/work/instapay-3.jpg'],
  },
  {
    slug: 'pretzo',
    title: 'Pretzo — AI Photoshoot',
    category: 'AI · Photography · Innovation',
    tagline: 'Building a scalable product photography system — without a studio.',
    client: 'Pretzo — Egyptian snack brand entering a competitive FMCG category.',
    brief: 'A premium product photography library — hero shots, lifestyle scenes, flavour ranges — at a fraction of traditional studio cost and timeline. Launch was 3 weeks out.',
    role: 'Designed and led an AI-driven production system — from concept and scene design to final compositing. Built a repeatable workflow for premium FMCG visuals at speed and scale.',
    problem: "Traditional food photography is expensive and slow: $15–25K, weeks of production, full studio crews. Pretzo had neither the budget nor the time — and stock imagery felt generic, killing the brand's premium perception.",
    insight: "AI isn't replacing photography — it's replacing the parts that were always the bottleneck: location, lighting setup, and retakes.",
    concept: 'A hybrid workflow that keeps the product real and makes everything else synthetic — so the AI serves craft, not the other way around.',
    execution: 'Deployed across multiple product scenarios — hero shots to fully constructed lifestyle scenes. Each visual built through a controlled pipeline: real product integration, AI-generated environments, final compositing. Different scenes. Same system.',
    impact: [
      'Full photography suite at ~15% of traditional cost',
      'Production time: 4 days vs. typical 2 weeks',
      'Studio-grade quality — without a physical shoot',
      'Repeatable workflow for future product drops',
    ],
    learning: "The real innovation wasn't the AI — it was how you direct it. The tools are accessible. Taste isn't.",
    tags: ['AI', 'Photography', 'Innovation', 'F&B', 'Workflow Design'],
    gallery: ['/work/pretzo-1.jpg', '/case/pretzo-exec.jpg', '/work/pretzo-2.jpg', '/work/pretzo-3.jpg'],
  },
  {
    slug: 'sparx',
    title: 'SparX — Branding & Packaging',
    category: 'Brand Identity · Packaging System',
    tagline: 'Building a new soda brand system — from zero to scale.',
    client: 'SparX Soda — a newly launched Egyptian soft drink brand by Valley Water, entering a highly competitive FMCG category.',
    brief: 'Launch a new Egyptian soda into a category dominated by global players. Build a full identity system from scratch — capable of scaling across flavours and future extensions.',
    role: 'Visual Direction, System Design & Design Oversight — led identity development, packaging architecture, and the flavour extension system.',
    problem: "New soda brands fail fast. Shelf presence is everything. If the system isn't flexible, every new flavour looks like a different brand. If it's too flexible, nothing feels distinct.",
    insight: "A soda brand isn't a label — it's a system. Get the structure right, and every new flavour becomes an extension, not a redesign.",
    concept: "A bold, bubbly 'X' — built from fizz physics. Each variant expresses its own identity through color and ingredients, while the structure remains constant.",
    execution: 'Delivered: primary logo + monogram, 3 launch flavour packaging SKUs, extension framework for future flavours, brand toolkit (type, colour, motion rules), and social launch assets.',
    impact: [
      'Complete brand system built from zero',
      'Three distinct flavours within one cohesive identity',
      'Strong shelf presence in a competitive FMCG category',
      'Scalable system ready for future flavour extensions',
    ],
    learning: 'A strong brand system reduces complexity. When the structure is right, every new execution becomes faster, clearer, and more consistent.',
    tags: ['Branding', 'Packaging', 'FMCG', 'System Thinking', 'Identity'],
    gallery: ['/work/sparx-1.jpg', '/case/sparx-exec.jpg', '/work/sparx-2.jpg', '/work/sparx-3.jpg'],
  },
  {
    slug: 'greenpan',
    title: 'Green Pan — Crime. Culprit. Hero.',
    category: 'Social Impact · Storytelling',
    tagline: 'A three-act story that changed what Egyptians do with used oil.',
    client: "Green Pan — Egypt's used cooking oil collection & reward system.",
    brief: 'Stop households and restaurants from pouring used cooking oil down the drain — drive behavior change through doorstep pickup and turn disposal into a rewarded action.',
    role: 'Art Director & Campaign Strategist — developed the narrative framework, directed visual storytelling across three acts, and led rollout across social.',
    problem: "Used oil disposal is invisible. It feels boring and not urgent. Most campaigns talk at people — and get ignored. The audience needed a story they couldn't look away from.",
    insight: "People don't act because they're told to. They act when they see themselves in the story — moving from witness, to accused, to hero.",
    concept: 'A three-act narrative built on visual escalation: miniature crime scenes → identifying the culprit (“البايظ”) → elevating the solution into a hero.',
    execution: 'Rolled out across social and digital with sequencing logic: CRIME first, CULPRIT second, HERO third. Carrefour retail tie-ins drove drop-off points. Every crime scene was physically built as a miniature — scale contrast between a small habit and a big problem.',
    impact: [
      'Three-act narrative deployed across social and digital',
      'Miniature forensic crime scenes turned a hidden issue into a visible story',
      'One core idea adapted across B2B and B2C audiences',
      'Clear, memorable call to action: 19481',
    ],
    learning: "People don't act when they're instructed. They act when they see themselves in the story. Turn them into the hero — and they respond.",
    tags: ['Social Impact', 'Campaign', 'Storytelling', 'FMCG', '3-Act Narrative'],
    gallery: ['/work/greenpan-1.jpg', '/case/greenpan-exec.jpg', '/work/greenpan-2.jpg', '/work/greenpan-3.jpg'],
  },
  {
    slug: 'jaguar',
    title: 'Jaguar Snacks',
    category: 'Brand Identity · Creative System',
    tagline: 'Owning the reaction every snack wishes it had.',
    client: 'Jaguar Snacks — Egyptian FMCG snack brand.',
    brief: 'Create a visual identity and social system that turns Jaguar from “just another snack” into a personality people recognize instantly — and scale it across always-on content.',
    role: 'Art Director — led brand identity, built the social creative system, and defined a scalable content language across campaigns.',
    problem: "Every snack brand is loud. Bold colours and oversized logos are expected — not distinctive. The category competes on price and distribution, not meaning. Jaguar needed something competitors couldn't discount: a personality.",
    insight: "You can't out-shout this category. You can out-feel it. Brands that own a reaction — not a colour — are the ones people remember.",
    concept: 'Build the brand around one iconic reaction: إيه ده؟! — “What is this?!” A raw, involuntary moment of surprise. Every asset builds toward it. Every asset lands on it.',
    execution: 'A modular content system built for speed and scale. Scenes designed as repeatable templates — each built around tension, surprise, and reaction. Photography, collage, and motion combined into exaggerated, impossible moments native to youth culture.',
    impact: [
      'Distinctive identity in a visually saturated category',
      'Transformed Jaguar from product-led to personality-led',
      'Scalable content system for always-on production',
      "A tone of humor and surprise competitors can't replicate",
    ],
    learning: "Building a brand around emotion is harder than building one around aesthetics. But it's the only thing competitors can't copy — and the only thing price can't kill.",
    tags: ['FMCG', 'Brand Identity', 'Creative System', 'Social', 'Art Direction'],
    gallery: ['/work/jaguar-1.jpg', '/case/jaguar-exec.jpg', '/work/jaguar-2.jpg', '/work/jaguar-3.jpg'],
  },
];

export interface MoreWorkItem {
  num: string; title: string; role: string; blurb: string; image: string; tags: string[];
}
export const moreWork: MoreWorkItem[] = [
  {
    num: '07', title: 'Elano Water — Lifestyle Campaign',
    role: 'Art Direction · Campaign Visual Identity',
    blurb: 'Positioning an Egyptian water brand as the aspirational choice for modern Egypt — clean premium photography, confident typography, cultural pride.',
    image: '/case/elano.jpg', tags: ['Advertising', 'Lifestyle', 'Beverage'],
  },
  {
    num: '08', title: 'Elano Water — Flag Edition',
    role: 'Art Direction · Identity',
    blurb: 'The logo as a badge of belonging: a standards-driven master mark integrating the Egyptian and Palestinian flags — identity itself as the message.',
    image: '/case/elano-flag.jpg', tags: ['Identity', 'Packaging', 'Culture'],
  },
  {
    num: '09', title: 'Garage Restaurant',
    role: 'Brand Identity · Logo · Packaging · Social',
    blurb: 'Raw industrial identity for a Dahab restaurant — exposed textures, stencil type, black + amber. The contrast is the identity.',
    image: '/case/garage.jpg', tags: ['Branding', 'F&B', 'Identity'],
  },
];
