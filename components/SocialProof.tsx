import React from 'react';
import { Quote } from 'lucide-react';
import { COPY } from '../constants';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-16 h-16 text-brand-orange mx-auto mb-8 opacity-80" />
          
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "{COPY.socialProof.text}"
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="h-1 w-20 bg-brand-orange mb-4 rounded-full"></div>
            <h4 className="text-xl font-bold">{COPY.socialProof.author}</h4>
            <p className="text-brand-orange opacity-90">{COPY.socialProof.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};