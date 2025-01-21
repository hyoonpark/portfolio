import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
