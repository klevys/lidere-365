import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { COPY, IMAGES, WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 bg-gradient-to-br from-brand-blue to-brand-darkBlue overflow-hidden text-white">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Copy Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-bold tracking-wider mb-2 border border-brand-orange/50">
              PRÉ-VENDA EXCLUSIVA
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              {COPY.hero.headline.split('.')[0]}.
              <br />
              <span className="text-brand-orange">{COPY.hero.headline.split('.')[1]}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              {COPY.hero.subheadline}
            </p>

            <div className="space-y-2">
              {COPY.hero.bullets.map((bullet, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start text-slate-200">
                  <CheckCircle className="w-5 h-5 text-brand-orange mr-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col lg:flex-row items-center gap-6">
              <div className="flex flex-col items-center md:items-start w-full">
                <Button onClick={handlePreOrder} icon className="w-full sm:w-auto shadow-orange-500/20 px-10 py-5 text-xl">
                  {COPY.hero.cta}
                </Button>
                <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest">
                  Envio em Dezembro • Edição Limitada
                </p>
              </div>
            </div>
          </div>

          {/* Book Mockup */}
          <div className="flex-1 flex justify-center relative mt-8 md:mt-0">
            <div className="relative w-64 md:w-80 lg:w-[420px] aspect-[2/3] transform md:rotate-y-12 md:rotate-x-6 transition-transform hover:rotate-0 duration-700">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-brand-orange blur-3xl opacity-20 rounded-full transform translate-y-10"></div>
              
              {/* Book Cover Image Placeholder */}
              <img 
                src={IMAGES.bookCover} 
                alt="Capa do Livro Lidere 365" 
                className="relative rounded-r-xl rounded-l-sm shadow-2xl border-l-4 border-white/10 object-cover h-full w-full z-10"
              />
              
              {/* Spine Effect for 3D look */}
              <div className="absolute top-1 bottom-1 left-0 w-4 bg-white/20 z-20 rounded-l-sm backdrop-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-950"></path>
        </svg>
      </div>
    </section>
  );
};