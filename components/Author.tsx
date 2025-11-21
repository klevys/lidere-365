import React from 'react';
import { COPY, IMAGES } from '../constants';

export const Author: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange rounded-full transform translate-x-4 translate-y-4"></div>
              <img 
                src={IMAGES.author} 
                alt={COPY.author.name} 
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-2">Sobre o Autor</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-darkBlue mb-6">{COPY.author.name}</h3>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>{COPY.author.bio}</p>
            </div>
            
            {/* Signature placeholder visualization */}
            <div className="mt-8 font-serif italic text-2xl text-brand-blue">
              Klevys Silva
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};