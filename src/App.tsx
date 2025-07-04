import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioSamples from './components/AudioSamples';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Ratings from './components/Ratings';
import Features from './components/Features';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const handleLanguageChange = (lang: 'en' | 'kn') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <AudioSamples language={language} />
      <Projects language={language} />
      <Features language={language} />
      <Ratings language={language} />
      <Testimonials language={language} />
      <JoinUs language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;