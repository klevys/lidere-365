import React from 'react';
import { BookOpen, MessageCircle, Heart, Shield } from 'lucide-react';
import { COPY } from '../constants';

const icons = [BookOpen, MessageCircle, Heart, Shield];

export const BookDetails: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Estrutura do Devocional</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">{COPY.bookDetails.title}</h2>
          <p className="text-slate-400 mt-4">{COPY.bookDetails.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {COPY.bookDetails.features.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="flex items-start p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-brand-blue p-3 rounded-lg mr-4 shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-orange">Passo {idx + 1}</h4>
                  <p className="text-slate-300">{feature}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};