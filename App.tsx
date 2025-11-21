import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { PainPoints } from './components/PainPoints';
import { Transformation } from './components/Transformation';
import { BookDetails } from './components/BookDetails';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Author } from './components/Author';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { WHATSAPP_LINK } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <main className="font-sans text-slate-900 antialiased selection:bg-brand-orange selection:text-white">
      {/* 1. Visual Focus: Book */}
      <Hero />

      {/* 2. Dedicated Video Section */}
      <VideoSection />
      
      {/* 3. Visual Focus: Author */}
      <Author />
      
      {/* 4. The Problem */}
      <PainPoints />
      
      {/* 5. The Solution */}
      <Transformation />
      
      {/* 6. What's inside */}
      <BookDetails />
      
      {/* 7. Validation */}
      <SocialProof />
      <Benefits />
      
      {/* 8. Closing */}
      <FAQ />
      <CTASection />
      <Footer />

      {/* Sticky Mobile/Desktop CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-2xl z-50 transition-transform duration-300 transform ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto flex items-center justify-between md:justify-center gap-4">
          <div className="hidden md:block font-bold text-brand-darkBlue text-lg">
            Lidere 365 - Leitura para 2026: <span className="text-brand-orange">R$ 39,90</span>
          </div>
          <div className="md:hidden font-bold text-brand-darkBlue text-sm">
            Leitura 2026: <span className="text-brand-orange">R$ 39,90</span>
          </div>
          <Button onClick={handlePreOrder} className="w-auto text-sm md:text-base py-3 px-6 flex items-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            RESERVAR AGORA
          </Button>
        </div>
      </div>
    </main>
  );
};

export default App;