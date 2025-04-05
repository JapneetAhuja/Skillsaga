import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GuildsSection from './components/GuildsSection';
import QuestsSection from './components/QuestsSection';
import LeaderboardSection from './components/LeaderboardSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <GuildsSection />
      <QuestsSection />
      <LeaderboardSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
