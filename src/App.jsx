import { useCallback, useEffect, useState } from 'react';
import { BuildingNow } from './components/BuildingNow/BuildingNow';
import { CommandPalette } from './components/CommandPalette/CommandPalette';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ParticleCanvas } from './components/ParticleCanvas/ParticleCanvas';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

export function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Header onOpenPalette={openPalette} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <BuildingNow />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </>
  );
}
