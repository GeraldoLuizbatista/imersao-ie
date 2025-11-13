import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Instructors from './components/Instructors';
import Agenda from './components/Agenda';
import Results from './components/Results';
import ForWho from './components/ForWho';
import Pricing from './components/Pricing';
import Bonus from './components/Bonus';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import FloatingCTA from './components/FloatingCTA';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <CountdownTimer />
      <ImpactStats />
      <Problem />
      <Solution />
      <Instructors />
      <Agenda />
      <Results />
      <ForWho />
      <Pricing />
      <Bonus />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      
      {showFloatingCTA && <FloatingCTA />}
    </div>
  );
}

export default App;
