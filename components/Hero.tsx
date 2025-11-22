
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';
import { COPY, IMAGES, WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1120] text-white overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-brand-blue rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Star className="w-4 h-4 text-brand-orange fill-current" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-slate-300">PRÉ-VENDA EXCLUSIVA</span>
            </div>

            {/* Huge Typography */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
              Sua Leitura <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Para 2026.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light border-l-2 border-brand-blue/30 pl-6">
              {COPY.hero.subheadline}
            </p>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={handlePreOrder} icon className="bg-brand-orange hover:bg-orange-600 text-white shadow-[0_0_30px_-10px_rgba(255,127,64,0.5)]">
                {COPY.hero.cta}
              </Button>
              <div className="flex items-center justify-center px-6 py-4 rounded-full border border-white/10 text-sm text-slate-400 bg-white/5">
                <span className="font-mono font-bold text-white mr-2">R$ 39,90</span>
                <span>na pré-reserva</span>
              </div>
            </div>

            {/* Social Proof Mini */}
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#0B1120] flex items-center justify-center text-xs text-slate-500 overflow-hidden">
                    <img src={`https://placehold.co/100x100/333/CCC?text=${i}`} className="w-full h-full object-cover opacity-50" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">Junte-se a centenas de líderes.</p>
            </div>
          </div>

          {/* Right Content (Book Mockup) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative z-10 w-64 md:w-80 lg:w-[450px] animate-float group">
               {/* Glow effect behind book */}
               <div className="absolute inset-0 bg-brand-blue/40 blur-[60px] rounded-full transform scale-90"></div>
               
               <div className="relative w-full transition-transform duration-500 hover:scale-105">
                  <img 
                    src={IMAGES.bookCover} 
                    alt="Lidere 365 Capa" 
                    className="w-full h-auto drop-shadow-2xl"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.src = "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/livro-1.png";
                    }}
                  />
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 text-[120px] font-bold text-white/5 leading-none select-none z-0">
              365
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
