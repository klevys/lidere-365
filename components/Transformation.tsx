import React from 'react';
import { Compass, Star } from 'lucide-react';
import { COPY } from '../constants';

export const Transformation: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Decor */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute inset-0 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
             <div className="relative z-10 bg-gradient-to-br from-brand-darkBlue to-brand-blue p-10 rounded-3xl text-white shadow-2xl">
                <Compass className="w-16 h-16 text-brand-orange mb-6" />
                <h3 className="text-2xl font-bold mb-4 border-b border-white/20 pb-4">Liderança Transformacional</h3>
                <ul className="space-y-4">
                  {[
                    "Alinhamento Interior",
                    "Sabedoria para Decidir",
                    "Fé Fortalecida",
                    "Propósito Restaurado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-lg">
                      <Star className="w-5 h-5 text-brand-orange mr-3 fill-current" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             {/* Decoration Pattern */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-darkBlue mb-6 leading-tight">
              {COPY.transformation.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {COPY.transformation.text}
            </p>
            <div className="border-l-4 border-brand-orange pl-6 py-2">
              <p className="italic text-brand-darkBlue font-medium text-lg">
                "Liderar não é sobre estar no comando, é sobre cuidar daqueles que estão sob sua responsabilidade."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};