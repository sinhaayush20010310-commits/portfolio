import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import CommandPalette from './components/ui/CommandPalette';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './styles/globals.css';

function PortfolioApp() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <CommandPalette />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
