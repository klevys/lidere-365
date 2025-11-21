import React from 'react';
import { Button } from './Button';
import { COPY, WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

export const CTASection: React.FC = () => {
  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section id="checkout" className="py-24 bg-brand-darkBlue text-white text-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          {COPY.ctaSection.title}
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          {COPY.ctaSection.text}
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            variant="primary" 
            className="px-12 py-5 text-xl shadow-orange-500/50"
            onClick={handlePreOrder}
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            {COPY.ctaSection.button}
          </Button>
          <span className="text-sm text-slate-400 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            {COPY.ctaSection.secure}
          </span>
        </div>
      </div>
    </section>
  );
};