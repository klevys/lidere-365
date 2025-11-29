
import React from 'react';
import { Button } from './Button';
import { WHATSAPP_LINK, IMAGES, COPY } from '../constants';
import { MessageCircle, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const CTASection: React.FC = () => {
  const handlePreOrder = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="py-24 bg-brand-darkBlue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="w-3 h-3" />
              Oferta válida até 30/12
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Seu 2026 começa <br/>agora.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Não deixe para janeiro o que vai definir a trajetória de todo o seu ano. Garanta sua cópia da 1ª edição com valor especial antes do reajuste.
            </p>
            
            <div className="flex flex-col gap-4">
              <Button onClick={handlePreOrder} className="w-full md:w-auto justify-center py-5 text-lg shadow-xl shadow-orange-500/20">
                <MessageCircle className="mr-2 w-5 h-5" />
                Pré-venda
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Compra direta e segura com a editora</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-3xl transform scale-90"></div>
            <img 
              src={IMAGES.bookCover} 
              alt="Lidere 365" 
              className="relative w-64 md:w-72 drop-shadow-2xl hover:scale-105 transition-all duration-500 z-10"
              onError={(e) => {
                e.currentTarget.src = "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/livro-1.png";
              }}
            />
            
            {/* Price Tag */}
            <div className="absolute -bottom-6 -right-6 bg-[#0B1120] text-white p-6 rounded-2xl shadow-xl z-20 animate-float delay-100 border border-white/10">
              <p className="text-xs text-slate-400 uppercase mb-1">Valor Promocional</p>
              <p className="text-3xl font-bold text-brand-orange leading-none">R$ 39,90</p>
              <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-red-400 font-bold uppercase tracking-wide text-center">
                Sobe em 01/01
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};