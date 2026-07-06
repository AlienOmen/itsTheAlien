import { Hero } from './sections/Hero';

export default function App() {
  return (
    <main className="bg-void min-h-screen" style={{ overflowX: 'clip' }}>
      <div className="grain-overlay" />
      <Hero />
    </main>
  );
}
