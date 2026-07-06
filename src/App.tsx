import { Loader } from './components/Loader';
import { Hero } from './sections/Hero';
import { Ticker } from './components/Ticker';
import { Marquee } from './sections/Marquee';
import { Showreel } from './sections/Showreel';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { AlienSystem } from './sections/AlienSystem';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <main id="top" className="bg-void" style={{ overflowX: 'clip' }}>
      <Loader />
      <div className="grain-overlay" />
      <Hero />
      <Ticker />
      <Marquee />
      <Showreel />
      <About />
      <Expertise />
      <AlienSystem />
      <Projects />
      <Contact />
    </main>
  );
}
