import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Samples from './components/Samples';
import HowItWorks from './components/HowItWorks';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
      <Hero />
      <Benefits />
      <Samples />
      <HowItWorks />
      <BonusSection />
      <Testimonials />
      <Guarantee />
      <PricingSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;