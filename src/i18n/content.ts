import { copy as copyEn } from '../data/copy';
import { services as servicesEn, type Service } from '../data/expertise';
import { programs as programsEn, acronym as acronymEn, type Program } from '../data/alienSystem';
import { projects as projectsEn, type Project } from '../data/projects';
import { caseStudies as caseStudiesEn, moreWork as moreWorkEn, type CaseStudy, type MoreWorkItem } from '../data/caseStudies';
import type { Lang } from './LanguageProvider';

export interface UI {
  nav: { about: string; system: string; projects: string; contact: string };
  contactMe: string;
  viewCaseStudy: string;
  viewPortfolio: string;
  chatWhatsapp: string;
  directLine: string;
  playShowreel: string;
  showreelLabel: string;
  expertiseHeading: string;
  projectsHeading: string;
  moreWorkHeading: string;
  loaderText: string;
  systemHeadA: string; systemHeadAccent: string; systemHeadB: string; systemSubtitle: string;
  contactHeadA: string; contactHeadAccent: string; contactSub: string;
  footerLine: string;
  heroCaseStudy: string;
  closeCaseStudy: string;
  caseLabels: {
    client: string; brief: string; role: string; problem: string; insight: string;
    concept: string; moodboard: string; keyDecisions: string; execution: string;
    impact: string; learning: string;
  };
}

export interface SiteContent {
  copy: typeof copyEn;
  services: Service[];
  programs: Program[];
  acronym: typeof acronymEn;
  projects: Project[];
  caseStudies: CaseStudy[];
  moreWork: MoreWorkItem[];
  ui: UI;
}

const uiEn: UI = {
  nav: { about: 'About', system: 'System', projects: 'Projects', contact: 'Contact' },
  contactMe: 'Contact Me',
  viewCaseStudy: 'View Case Study',
  viewPortfolio: 'View Portfolio',
  chatWhatsapp: 'Chat on WhatsApp',
  directLine: 'Direct line',
  playShowreel: 'Play showreel',
  showreelLabel: 'Showreel · 20 Years in Motion',
  expertiseHeading: 'Expertise',
  projectsHeading: 'Projects',
  moreWorkHeading: 'More Work',
  loaderText: 'Receiving transmission',
  systemHeadA: 'The', systemHeadAccent: 'A.L.I.E.N.', systemHeadB: 'System',
  systemSubtitle: 'Two programs. One transformation — from designer to impact-driven creative authority.',
  contactHeadA: 'Let’s Create Something', contactHeadAccent: 'Unforgettable.',
  contactSub: 'Whether it’s a campaign, a brand, or an idea that doesn’t have a name yet — I’m ready to receive your transmission from anywhere in the galaxy.',
  footerLine: 'Ahmed Al Badry · it’s THE ALIEN · ♄ Cairo, Egypt',
  heroCaseStudy: 'Hero Case Study',
  closeCaseStudy: 'Close case study',
  caseLabels: {
    client: 'The Client', brief: 'The Brief', role: 'My Role', problem: 'The Problem',
    insight: 'The Insight I Built On', concept: 'The Concept', moodboard: 'Moodboard',
    keyDecisions: 'Key Decisions', execution: 'Execution', impact: 'The Impact', learning: 'What I Learned',
  },
};

const uiEs: UI = {
  nav: { about: 'Sobre mí', system: 'Sistema', projects: 'Proyectos', contact: 'Contacto' },
  contactMe: 'Contáctame',
  viewCaseStudy: 'Ver caso',
  viewPortfolio: 'Ver portafolio',
  chatWhatsapp: 'Escríbeme por WhatsApp',
  directLine: 'Línea directa',
  playShowreel: 'Reproducir showreel',
  showreelLabel: 'Showreel · 20 años en movimiento',
  expertiseHeading: 'Servicios',
  projectsHeading: 'Proyectos',
  moreWorkHeading: 'Más trabajos',
  loaderText: 'Recibiendo transmisión',
  systemHeadA: 'El Sistema', systemHeadAccent: 'A.L.I.E.N.', systemHeadB: '',
  systemSubtitle: 'Dos programas. Una transformación: de diseñador a autoridad creativa con impacto.',
  contactHeadA: 'Creemos Algo', contactHeadAccent: 'Inolvidable.',
  contactSub: 'Ya sea una campaña, una marca o una idea que aún no tiene nombre — estoy listo para recibir tu transmisión desde cualquier lugar de la galaxia.',
  footerLine: 'Ahmed Al Badry · it’s THE ALIEN · ♄ El Cairo, Egipto',
  heroCaseStudy: 'Caso destacado',
  closeCaseStudy: 'Cerrar caso',
  caseLabels: {
    client: 'El Cliente', brief: 'El Encargo', role: 'Mi Rol', problem: 'El Problema',
    insight: 'El Insight Sobre el que Construí', concept: 'El Concepto', moodboard: 'Moodboard',
    keyDecisions: 'Decisiones Clave', execution: 'Ejecución', impact: 'El Impacto', learning: 'Lo Que Aprendí',
  },
};

const copyEs: typeof copyEn = {
  heroTagline: 'un director de arte con 20 años construyendo mundos con IA — El Cairo, Egipto',
  aboutHeadingA: 'El Alien,',
  aboutHeadingB: 'Descifrado.',
  aboutParagraph:
    'Soy Ahmed Al Badry — un creativo saturniano que aterrizó en El Cairo con una misión: hacer que las marcas sean imposibles de ignorar. Veinte años en publicidad y construcción de marca, uniendo un oficio riguroso con flujos de trabajo asistidos por IA. Herencia egipcia, visión de otro mundo. Construyamos juntos algo inolvidable.',
  stats: [
    { target: 20, suffix: '+', label: 'Años de Experiencia' },
    { target: 50, suffix: '+', label: 'Clientes Atendidos' },
    { target: 75, suffix: '+', label: 'Proyectos Entregados' },
  ],
  links: copyEn.links,
};

const servicesEs: Service[] = [
  { num: '01', name: 'Dirección de Arte', desc: 'Conceptualización de campañas, dirección de rodaje, narrativa visual. Del brief al fotograma final — traduciendo ideas complejas en imágenes impactantes que funcionan en cada canal.' },
  { num: '02', name: 'Identidad de Marca', desc: 'Sistemas visuales hechos para durar. Logo, color, tipografía, movimiento — reconocibles al instante y escalables sin límite entre mercados, formatos y décadas.' },
  { num: '03', name: 'Producción con IA', desc: 'Flujos híbridos que combinan generación con IA y dirección de arte humana. Más rápido, más rico, más económico — sin sacrificar calidad ni ambición.' },
  { num: '04', name: 'Estrategia de Campaña 360°', desc: 'Campañas integradas en TV, exterior, digital, social y packaging que viven en todas partes y conectan con personas reales — de Egipto a cualquier lugar.' },
];

const programsEs: Program[] = [
  {
    badge: 'Parte 01', part: 'Sistema de Diseño', nameAccent: 'A.L.I.E.N.', name: 'Sistema de Diseño',
    tagline: 'De diseñador común a Alien Creator con impacto. Diseño, IA, narrativa y negocio — para que crees visuales que venden, no solo que se ven "bonitos".',
    modules: [
      { num: 'A', title: 'Mentalidad Alien', desc: 'piensa distinto a los diseñadores comunes — qué hace que un diseño venda, visual ≠ bonito, autenticidad' },
      { num: 'L', title: 'Magnetismo de Layout', desc: 'composición + tipografía que controlan la mirada: dónde cae, hacia dónde va, qué recuerda' },
      { num: 'I', title: 'Colaboración Inteligente con IA', desc: 'la IA como tu copiloto alien — prompting, elegir las mejores imágenes, el stack de herramientas honesto' },
      { num: 'E', title: 'Ejecución en Herramientas', desc: 'entrega piezas reales en Photoshop y Canva — posts, carruseles, ads con acabado de nivel alien' },
      { num: 'N', title: 'Networking y Números', desc: 'nichos, prospección, precios — que los clientes vengan a ti y cobres lo que vale' },
    ],
  },
  {
    badge: 'Parte 02', part: 'Versión de Negocio', nameAccent: 'Alien', name: 'Authority',
    tagline: 'De Alien Designer a Alien Authority — un experto reconocido en tu nicho con un sistema de trabajo, clientes constantes y precios premium.',
    modules: [
      { num: 'A', title: 'Autoridad y Alineación', desc: 'conviértete en la referencia de tu nicho' },
      { num: 'L', title: 'Leverage y Leads', desc: 'haz que tu trabajo genere oportunidades' },
      { num: 'I', title: 'Identidad e Influencia', desc: 'construye una marca personal que atrae' },
      { num: 'E', title: 'Ejecución y Excelencia', desc: 'sistemas para entregar calidad de forma constante' },
      { num: 'N', title: 'Network y Negociación', desc: 'clientes premium, tarifas premium' },
    ],
  },
];

const acronymEs: typeof acronymEn = [
  { letter: 'A', word: 'Auténtico', desc: 'Muéstrate como eres, no como copia de una tendencia' },
  { letter: 'L', word: 'Legendario', desc: 'Trabajo que sobrevive al brief' },
  { letter: 'I', word: 'Intencional', desc: 'Cada píxel tiene una razón' },
  { letter: 'E', word: 'Elevado', desc: 'Por encima del ruido, siempre' },
  { letter: 'N', word: 'Notable', desc: 'Imposible de saltar en el scroll' },
];

const projectsEs: Project[] = [
  { num: '01', category: 'Cliente · 2023', title: 'ARAFA — 100 Million Style', result: '+20M Impresiones · +9M Reproducciones · Ads of the World', desc: 'Convirtió la crisis de la moda en Egipto en un movimiento cultural. Tipografía árabe monumental — TV, exterior, radio, social.', image: '/case/arafa-hero.jpg', slug: 'arafa' },
  { num: '02', category: 'Cliente · 2025', title: 'InstaPay — w INGEZ', result: '12.5M+ Usuarios · Plataforma Fintech Nacional', desc: '"Y hecho" — audaz, de alto contraste, accesible para todas las edades e ingresos. La transformación digital nacional del CBE en una campaña.', image: '/case/instapay-hero.jpg', slug: 'instapay' },
  { num: '03', category: 'Cliente · 2025', title: 'Pretzo — AI Photoshoot', result: '~15% del Costo Tradicional · 4 Días vs 2 Semanas', desc: 'Un sistema de fotografía de producto sin estudio — producto real, mundos construidos con IA, dirigidos a nivel de estudio.', image: '/case/pretzo-hero.jpg', slug: 'pretzo' },
  { num: '04', category: 'Cliente · 2025', title: 'SparX — Branding & Packaging', result: 'Sistema de Marca Escalable', desc: 'Nueva marca de refresco lanzada con una "X" burbujeante. Cada sabor tiene su paleta. Escala en merch, promos y cada lanzamiento futuro.', image: '/case/sparx-hero.jpg', slug: 'sparx' },
  { num: '05', category: 'Cliente · 2024', title: 'Green Pan — Crime. Culprit. Hero.', result: 'Narrativa en 3 Actos · Línea 19481', desc: 'Escenas forenses en miniatura hicieron imposible ignorar un hábito invisible — testigo, acusado, héroe.', image: '/case/greenpan-hero.jpg', slug: 'greenpan' },
  { num: '06', category: 'Cliente · 2025', title: 'Jaguar Snacks', result: 'Identidad con Personalidad · Sistema Always-On', desc: 'Mundo de marca construido sobre una reacción icónica: ¡إيه ده؟! Collage maximalista, movimiento hiperespacial, caos controlado.', image: '/case/jaguar-hero.jpg', slug: 'jaguar' },
];

const caseStudiesEs: CaseStudy[] = [
  {
    slug: 'arafa', title: 'ARAFA — 100 Million Style', category: 'Campaña 360°',
    tagline: 'Convertir un boicot nacional en un movimiento cultural.',
    client: 'Arafa Group — fundada en 1907, la casa de moda y textil más antigua de Egipto. Matriz de Concrete, Guy Laroche y Mario Barutti.',
    brief: 'Proteger la cuota de mercado durante la ola de boicot de 2023 a las marcas occidentales — y posicionar las tiendas Arafa como la opción egipcia obvia.',
    role: 'Director de Arte, Líder de Campaña 360° — dirigí la fotografía, el sistema tipográfico, la producción de exterior, la adaptación a TV/radio y el contenido social.',
    problem: 'Los consumidores buscaban activamente alternativas egipcias, pero aún no veían la moda como un lugar para expresarlo. Las marcas extranjeras seguían dueñas de la percepción de "estilo". Arafa no necesitaba más visibilidad — necesitaba redefinir qué significa "estilo", localmente.',
    insight: 'El boicot no se trata de lo que dejas de comprar — se trata de lo que empiezas a sentir con orgullo.',
    concept: '"100 MILLION STYLE" — cada egipcio es un ícono de estilo. No el modelo. No la campaña. Tú.',
    moodboard: 'Tipografía árabe monumental como ancla visual. Composiciones de estudio limpias con espacio negativo controlado. Casting egipcio diverso de todas las edades. Un campo rojo saturado usado como fuerza cultural, no como decoración.',
    keyDecisions: [
      'Tipografía — árabe bold a escala monumental. El árabe manda, el inglés sigue. El tipo no acompaña al visual; ES el visual.',
      'Casting — egipcios reales, de bebés a abuelos, no modelos. La diversidad era el mensaje.',
      'Paleta — un entorno rojo saturado como campo cultural unificador, nunca decoración.',
      'Fotografía — iluminación de estudio controlada, cada sujeto claramente separado del fondo.',
      'Layout — sujetos distribuidos en el cuadro con presencia, no jerarquía; la tipografía los atraviesa y conecta en una sola declaración.',
    ],
    execution: 'Desplegada en spots de TV, exterior en 10 ubicaciones premium de El Cairo, radio en 4 emisoras nacionales y un concurso social invitando a los egipcios a publicar sus propios looks "100 Million Style".',
    impact: [
      '+20 millones de impresiones en todas las plataformas',
      '+9 millones de reproducciones de video',
      'Exterior en 10 ubicaciones premium de El Cairo',
      'Radio en 4 emisoras nacionales líderes',
      'Destacado en Ads of the World',
    ],
    learning: 'En un momento cultural, no vendas — celebra. Las campañas que intentaron defender el "compra local" se sintieron políticas. La que celebró a las personas se sintió humana. Eso fue lo que la hizo viral.',
    tags: ['Campaña 360°', 'Exterior', 'TV', 'Radio', 'Social', 'Tipografía Árabe'],
    hero: '/case/arafa-hero.jpg', showcase: ['/case/arafa-show.jpg', '/case/arafa-strip1.jpg', '/case/arafa-strip2.jpg', '/case/arafa-strip3.jpg'],
  },
  {
    slug: 'instapay', title: 'InstaPay — w INGEZ', category: 'Campaña Masiva · Fintech',
    tagline: 'Hacer que los pagos instantáneos se sientan naturales en la vida diaria.',
    client: 'InstaPay — la app insignia de la Red de Pagos Instantáneos (IPN) de Egipto, operada por la Egyptian Banks Company bajo el CBE.',
    brief: 'InstaPay ya había escalado — 12M+ usuarios y 1.5B+ transacciones. El reto no era crecimiento. Era comportamiento: ¿cómo haces que los usuarios masivos dejen de recurrir al efectivo?',
    role: 'Director de Arte, Creatividad de Campaña — lideré el sistema visual, la dirección de casting y el enfoque de fotografía con IA en todos los escenarios y plataformas.',
    problem: 'El efectivo no es solo un método de pago en Egipto — es un hábito. Los pagos digitales aún se sentían distantes, no hechos para ellos. Hacer que InstaPay se sintiera premium alienaría a las masas; hacerlo barato rompería la confianza.',
    insight: 'El obstáculo no es entender InstaPay — es sentir que les pertenece. La gente no adopta herramientas. Adopta lo que se siente familiar.',
    concept: '"w INGEZ" (وانجز — "y hecho"). Una frase de la vida egipcia cotidiana, no un eslogan bancario. Corta. Directa. Ya propiedad de la gente.',
    moodboard: 'Micro-momentos egipcios cotidianos — transferencias en el café, un gamer a mitad de partida, amigos dividiendo la cuenta, la duda ante el efectivo. Luz cálida y humana, colorización cinematográfica, tipografía árabe de alto contraste.',
    keyDecisions: [
      'Casting — personas reales de todas las edades y estilos de vida. No actores — gente que reconoces al instante.',
      'Tipografía — titulares árabes bold y de alto contraste, legibles en un segundo incluso en escenas con mucho movimiento.',
      'Paleta — el morado de InstaPay con tonos de piel egipcios cálidos y luz ambiente. Nada de azules corporativos de fintech.',
      'Composición — el teléfono siempre en mano, nunca aislado. Las personas mandan, la app sigue.',
      'Ritmo del copy — cada titular termina en "w INGEZ". La frase se vuelve el ritmo, y la marca.',
    ],
    execution: 'Lanzamiento multimercado: TV, exterior digital, YouTube, Instagram, Facebook, TikTok. Todas las piezas adaptadas en EN/AR con tipografía RTL y jerarquía árabe primero. Versiones para impresión y nativas de social en paralelo.',
    impact: [
      '12.5M+ usuarios respaldados en la plataforma',
      'Sistema visual escalable a escenarios de la vida real',
      'Resultado consistente entre casting y entornos diversos',
      'Plataforma de campaña diseñada para la propiedad de marca a largo plazo',
    ],
    learning: 'El reto no era diseño — era contención. No necesitábamos que se viera "premium". Necesitábamos que se sintiera real. La IA no reemplazó el oficio — nos dio control sobre él.',
    tags: ['Fintech', 'Campaña Masiva', 'Exterior', 'Digital', 'Tipografía Árabe'],
    hero: '/case/instapay-hero.jpg', showcase: ['/case/instapay-show.jpg', '/case/instapay-strip1.jpg', '/case/instapay-strip2.jpg', '/case/instapay-strip3.jpg'],
  },
  {
    slug: 'pretzo', title: 'Pretzo — AI Photoshoot', category: 'IA · Fotografía · Innovación',
    tagline: 'Construir un sistema escalable de fotografía de producto — sin estudio.',
    client: 'Pretzo — marca egipcia de snacks entrando a una categoría FMCG competitiva.',
    brief: 'Una biblioteca premium de fotografía de producto — hero shots, escenas lifestyle, gamas de sabores — a una fracción del costo y tiempo de un estudio tradicional. El lanzamiento era en 3 semanas.',
    role: 'Diseñé y lideré un sistema de producción con IA — del concepto y diseño de escena al compositing final. Construí un flujo repetible para visuales FMCG premium a velocidad y escala.',
    problem: 'La fotografía de comida tradicional es cara y lenta: $15–25K, semanas de producción, equipos de estudio completos. Pretzo no tenía ni el presupuesto ni el tiempo — y el stock se sentía genérico, matando la percepción premium de la marca.',
    insight: 'La IA no reemplaza la fotografía — reemplaza las partes que siempre fueron el cuello de botella: locación, montaje de luz y repeticiones.',
    concept: 'Un flujo híbrido que mantiene el producto real y hace todo lo demás sintético — para que la IA sirva al oficio, no al revés.',
    moodboard: 'Editorial gastronómico · estilo Kinfolk · luz de cocina en hora dorada · mesas egipcias reales · manteles imperfectos · nada de esterilidad de estudio.',
    keyDecisions: [
      'El producto siempre es real — nunca generado.',
      'La IA construye los entornos, props y contexto — nunca el héroe.',
      'Cada escena es dirigida, no autogenerada.',
      'La consistencia se controla en todos los resultados.',
      'Flujo: Definir → Generar → Dirigir → Componer → Pulir.',
    ],
    execution: 'Desplegado en múltiples escenarios de producto — de hero shots a escenas lifestyle completamente construidas. Cada visual armado con un pipeline controlado: integración de producto real, entornos generados con IA, compositing final. Distintas escenas. Mismo sistema.',
    impact: [
      'Suite fotográfica completa a ~15% del costo tradicional',
      'Tiempo de producción: 4 días vs. 2 semanas habituales',
      'Calidad de estudio — sin un rodaje físico',
      'Flujo repetible para futuros lanzamientos de producto',
    ],
    learning: 'La verdadera innovación no era la IA — era cómo la diriges. Las herramientas son accesibles. El buen gusto no.',
    tags: ['IA', 'Fotografía', 'Innovación', 'F&B', 'Diseño de Flujo'],
    hero: '/case/pretzo-hero.jpg', showcase: ['/case/pretzo-show.jpg', '/case/pretzo-strip1.jpg', '/case/pretzo-strip2.jpg', '/case/pretzo-strip3.jpg'],
  },
  {
    slug: 'sparx', title: 'SparX — Branding & Packaging', category: 'Identidad de Marca · Sistema de Packaging',
    tagline: 'Construir un nuevo sistema de marca de refresco — de cero a escala.',
    client: 'SparX Soda — una nueva marca egipcia de refresco de Valley Water, entrando a una categoría FMCG muy competitiva.',
    brief: 'Lanzar un nuevo refresco egipcio en una categoría dominada por gigantes globales. Construir un sistema de identidad completo desde cero — capaz de escalar entre sabores y futuras extensiones.',
    role: 'Dirección Visual, Diseño de Sistema y Supervisión de Diseño — lideré el desarrollo de la identidad, la arquitectura de packaging y el sistema de extensión de sabores.',
    problem: 'Las nuevas marcas de refresco fracasan rápido. La presencia en góndola lo es todo. Si el sistema no es flexible, cada sabor parece una marca distinta. Si es demasiado flexible, nada se siente distintivo.',
    insight: 'Una marca de refresco no es una etiqueta — es un sistema. Acierta la estructura y cada sabor nuevo se vuelve una extensión, no un rediseño.',
    concept: 'Una "X" audaz y burbujeante — construida desde la física de las burbujas. Cada variante expresa su identidad por color e ingredientes, mientras la estructura se mantiene constante.',
    moodboard: 'Branding de bebidas moderno · capas de degradados suaves · visuales orgánicos inspirados en frutas · formas abstractas de burbujas · una estética FMCG limpia y accesible.',
    keyDecisions: [
      'Logo — la "X" como ancla flexible de marca.',
      'Color — paletas distintas por sabor dentro de una estructura controlada.',
      'Tipografía — limpia, moderna, muy legible.',
      'Lenguaje visual — degradados en capas y formas orgánicas.',
      'Jerarquía — marca primero, sabor después.',
    ],
    execution: 'Entregado: logo primario + monograma, 3 SKUs de packaging de sabores de lanzamiento, un marco de extensión para futuros sabores, toolkit de marca (tipo, color, reglas de movimiento) y piezas de lanzamiento social.',
    impact: [
      'Sistema de marca completo construido desde cero',
      'Tres sabores distintos dentro de una identidad cohesiva',
      'Fuerte presencia en góndola en una categoría FMCG competitiva',
      'Sistema escalable listo para futuras extensiones de sabor',
    ],
    learning: 'Un sistema de marca fuerte reduce la complejidad. Cuando la estructura es correcta, cada nueva ejecución se vuelve más rápida, clara y consistente.',
    tags: ['Branding', 'Packaging', 'FMCG', 'Pensamiento de Sistemas', 'Identidad'],
    hero: '/case/sparx-hero.jpg', showcase: ['/case/sparx-show.jpg', '/case/sparx-strip1.jpg', '/case/sparx-strip2.jpg', '/case/sparx-strip3.jpg'],
  },
  {
    slug: 'greenpan', title: 'Green Pan — Crime. Culprit. Hero.', category: 'Impacto Social · Narrativa',
    tagline: 'Una historia en tres actos que cambió qué hacen los egipcios con el aceite usado.',
    client: 'Green Pan — el sistema egipcio de recolección y recompensa de aceite de cocina usado.',
    brief: 'Frenar que hogares y restaurantes tiren el aceite usado por el desagüe — impulsar un cambio de comportamiento con recolección a domicilio y convertir el desecho en una acción recompensada.',
    role: 'Director de Arte y Estratega de Campaña — desarrollé el marco narrativo, dirigí la narrativa visual en tres actos y lideré el rollout en social.',
    problem: 'Desechar aceite usado es invisible. Se siente aburrido y no urgente. La mayoría de las campañas le hablan a la gente — y las ignoran. La audiencia necesitaba una historia de la que no pudiera apartar la mirada.',
    insight: 'La gente no actúa porque se lo digan. Actúa cuando se ve a sí misma en la historia — pasando de testigo, a acusado, a héroe.',
    concept: 'Una narrativa en tres actos construida sobre una escalada visual: escenas de crimen en miniatura → identificar al culpable ("البايظ") → elevar la solución a héroe.',
    moodboard: 'Escenas forenses en miniatura — montajes tipo CSI a micro escala. Manchas de aceite y tuberías tapadas tratadas como "evidencia". Cinta amarilla de precaución, marcadores numerados, iluminación controlada.',
    keyDecisions: [
      'Acto 1 — CRIMEN: escenas forenses en miniatura, realismo de lente macro, marcadores de evidencia, luz de alto contraste.',
      'Acto 2 — CULPABLE: un personaje ilustrado ("البايظ") que une educación y narrativa.',
      'Acto 3 — HÉROE: encuadre cinematográfico del producto, luz cálida, tono aspiracional.',
    ],
    execution: 'Desplegado en social y digital con lógica de secuencia: CRIMEN primero, CULPABLE segundo, HÉROE tercero. Alianzas con Carrefour impulsaron puntos de entrega. Cada escena del crimen se construyó físicamente como miniatura — contraste de escala entre un pequeño hábito y un gran problema.',
    impact: [
      'Narrativa en tres actos desplegada en social y digital',
      'Escenas forenses en miniatura convirtieron un problema oculto en una historia visible',
      'Una idea central adaptada a audiencias B2B y B2C',
      'Llamada a la acción clara y memorable: 19481',
    ],
    learning: 'La gente no actúa cuando se le instruye. Actúa cuando se ve a sí misma en la historia. Conviértela en el héroe — y responde.',
    tags: ['Impacto Social', 'Campaña', 'Narrativa', 'FMCG', 'Narrativa en 3 Actos'],
    hero: '/case/greenpan-hero.jpg', showcase: ['/case/greenpan-show.jpg', '/case/greenpan-strip1.jpg', '/case/greenpan-strip2.jpg', '/case/greenpan-strip3.jpg'],
  },
  {
    slug: 'jaguar', title: 'Jaguar Snacks', category: 'Identidad de Marca · Sistema Creativo',
    tagline: 'Adueñarse de la reacción que todo snack desearía tener.',
    client: 'Jaguar Snacks — marca egipcia de snacks FMCG.',
    brief: 'Crear una identidad visual y un sistema social que convierta a Jaguar de "un snack más" en una personalidad que la gente reconoce al instante — y escalarlo en contenido always-on.',
    role: 'Director de Arte — lideré la identidad de marca, construí el sistema creativo social y definí un lenguaje de contenido escalable entre campañas.',
    problem: 'Toda marca de snacks es ruidosa. Colores fuertes y logos enormes son lo esperado — no lo distintivo. La categoría compite en precio y distribución, no en significado. Jaguar necesitaba algo que la competencia no pudiera descontar: una personalidad.',
    insight: 'No puedes gritar más fuerte que esta categoría. Puedes sentir más. Las marcas que se adueñan de una reacción — no de un color — son las que la gente recuerda.',
    concept: 'Construir la marca alrededor de una reacción icónica: ¡إيه ده؟! — "¿Qué es esto?!" Un momento crudo e involuntario de sorpresa. Cada pieza construye hacia él. Cada pieza aterriza en él.',
    moodboard: 'Energía Nickelodeon de los 90 · collage maximalista · líneas de movimiento hiperespacial · escenas surreales de producto · viñetas de reacción tipo cómic · fotografía de expresión exagerada.',
    keyDecisions: [
      'Vocabulario visual — fotografía real + collage + elementos de snack flotando. Nunca estático, nunca limpio.',
      'Tipografía — display bold e inestable. El tipo siempre reacciona, nunca se queda quieto.',
      'Color — degradados agresivos por sabor. Ruidoso, pero caos controlado.',
      'Lógica de escena — interacciones inesperadas humano/animal/surreal → tensión → remate.',
      'Regla de contenido — detener el scroll en 0.5 segundos. Cero cuadros pasivos.',
    ],
    execution: 'Un sistema de contenido modular hecho para velocidad y escala. Escenas diseñadas como plantillas repetibles — cada una construida sobre tensión, sorpresa y reacción. Fotografía, collage y movimiento combinados en momentos exagerados e imposibles, nativos de la cultura joven.',
    impact: [
      'Identidad distintiva en una categoría visualmente saturada',
      'Transformó a Jaguar de liderada por producto a liderada por personalidad',
      'Sistema de contenido escalable para producción always-on',
      'Un tono de humor y sorpresa que la competencia no puede replicar',
    ],
    learning: 'Construir una marca alrededor de una emoción es más difícil que hacerlo alrededor de una estética. Pero es lo único que la competencia no puede copiar — y lo único que el precio no puede matar.',
    tags: ['FMCG', 'Identidad de Marca', 'Sistema Creativo', 'Social', 'Dirección de Arte'],
    hero: '/case/jaguar-hero.jpg', showcase: ['/case/jaguar-show.jpg', '/case/jaguar-strip1.jpg', '/case/jaguar-strip2.jpg', '/case/jaguar-strip3.jpg'],
  },
];

const moreWorkEs: MoreWorkItem[] = [
  { num: '07', title: 'Elano Water — Campaña Lifestyle', role: 'Dirección de Arte · Identidad Visual de Campaña', blurb: 'Posicionar una marca egipcia de agua como la opción aspiracional del Egipto moderno — fotografía premium y limpia, tipografía segura, orgullo cultural.', image: '/case/elano.jpg', tags: ['Publicidad', 'Lifestyle', 'Bebidas'] },
  { num: '08', title: 'Elano Water — Edición Bandera', role: 'Dirección de Arte · Identidad', blurb: 'El logo como insignia de pertenencia: una marca maestra que integra las banderas de Egipto y Palestina — la identidad misma como mensaje.', image: '/case/elano-flag.jpg', tags: ['Identidad', 'Packaging', 'Cultura'] },
  { num: '09', title: 'Garage Restaurant', role: 'Identidad de Marca · Logo · Packaging · Social', blurb: 'Identidad industrial cruda para un restaurante en Dahab — texturas expuestas, tipografía stencil, negro + ámbar. El contraste es la identidad.', image: '/case/garage.jpg', tags: ['Branding', 'F&B', 'Identidad'] },
];

export const content: Record<Lang, SiteContent> = {
  en: { copy: copyEn, services: servicesEn, programs: programsEn, acronym: acronymEn, projects: projectsEn, caseStudies: caseStudiesEn, moreWork: moreWorkEn, ui: uiEn },
  es: { copy: copyEs, services: servicesEs, programs: programsEs, acronym: acronymEs, projects: projectsEs, caseStudies: caseStudiesEs, moreWork: moreWorkEs, ui: uiEs },
};
