import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Education from './components/Education';
// import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Curriculum from './components/Curriculum';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
        <Header />
        <Hero />
        {/* <About /> */}
        <Education />
        {/* <Experience /> */}
        <Certificates />
        <Curriculum />
        <Awards />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
