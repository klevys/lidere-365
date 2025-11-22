
import React from 'react';
import { COPY, IMAGES } from '../constants';

interface AuthorProps {
  id?: string;
}

export const Author: React.FC<AuthorProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          
          {/* Background Typography Decor */}
          <div className="absolute top-0 left-0 text-[200px] font-black text-slate-50 leading-none -translate-y-1/2 -translate-x-10 select-none z-0 pointer-events-none">
            AUTOR
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Image Section */}
            <div className="lg:col-span-5 lg:col-start-2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-orange transform translate-x-4 translate-y-4 rounded-none"></div>
                <img 
                  src={IMAGES.author} 
                  alt={COPY.author.name} 
                  className="relative w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 bg-[#0B1120] text-white p-6 max-w-[80%]">
                  <p className="font-serif text-2xl font-bold text-brand-orange">Klevys Silva</p>
                  <p className="text-sm text-slate-400 uppercase tracking-widest mt-1">Pastor</p>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:col-span-5 lg:pl-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Liderança forjada no <span className="text-brand-blue underline decoration-brand-orange decoration-4 underline-offset-4">campo de batalha</span>.
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Esqueça as teorias de gabinete. <strong className="text-slate-900">Pr. Klevys Silva</strong> traz para estas páginas 19 anos de vivência real, lidando com as pressões, as dores e as alegrias do ministério e da liderança familiar.
                </p>
                <p>
                  Casado, pai de quatro filhos e pastor, ele entende que a verdadeira liderança começa quando ninguém está olhando.
                </p>
              </div>

              <div className="mt-10 p-6 bg-slate-50 border-l-4 border-brand-orange">
                <p className="font-serif italic text-slate-800 text-xl">
                  "Este livro não é sobre o que você faz, é sobre quem você se torna enquanto lidera."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
