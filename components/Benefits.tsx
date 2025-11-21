import React from 'react';
import { Check } from 'lucide-react';
import { COPY } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-3xl font-serif font-bold text-center text-brand-darkBlue mb-10">
            O impacto na sua vida e liderança
          </h2>
          
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            {COPY.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center p-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-lg text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};