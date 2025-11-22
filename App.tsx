
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
import { MessageCircle, BookOpen } from 'lucide-react';

// Simple Navbar Component
const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 py-6 border-b border-white/5">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2 font-serif font-bold text-xl text-white">
        <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white">
          <BookOpen className="w-5 h-5" />
        </div>
        LIDERE 365
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
        <a href="#sobre" className="hover:text-white transition-colors">O Livro</a>
        <a href="#autor" className="hover:text-white transition-colors">Autor</a>
        <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <main className="font-sans text-slate-900 selection:bg-brand-orange selection:text-white bg-[#f8fafc]">
      <Navbar />
      
      <Hero />
      <div id="sobre"><VideoSection /></div>
      <Author id="autor" />
      <PainPoints />
      <Transformation />
      <BookDetails />
      <SocialProof />
      <Benefits />
      <div id="faq"><FAQ /></div>
      <CTASection />
      <Footer />

      {/* Modern Glassmorphism Sticky CTA */}
      <div className={`fixed bottom-6 left-0 w-full z-50 px-4 transition-all duration-500 transform ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <div className="container mx-auto max-w-3xl">
          <div className="glass-dark rounded-full p-2 pr-3 flex items-center justify-between shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center gap-3 pl-4">
              <div className="hidden sm:block text-white font-bold">
                Lidere 365 <span className="font-normal text-slate-400">| Pré-venda</span>
              </div>
              <div className="text-brand-orange font-bold text-lg">
                R$ 39,90
              </div>
            </div>
            <Button 
              onClick={handlePreOrder} 
              className="rounded-full !py-2 !px-6 !text-sm !h-10 shadow-none"
            >
              Pré-venda
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;