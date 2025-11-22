
import React from 'react';
import { Battery, Users, Target, Heart, AlertCircle } from 'lucide-react';
import { COPY } from '../constants';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Diagnóstico</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Não deixe 2026 ser <br/>apenas "mais um ano".
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-lg">
            A liderança exige renovação constante. Sem ela, até os melhores líderes estagnam.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Large */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
              <Battery className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Esgotamento Mental</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              A pressão por resultados sem uma fonte de reabastecimento é a receita para o burnout. Em 2026, você precisa de uma pausa produtiva diária.
            </p>
          </div>

          {/* Card 2 - Vertical */}
          <div className="md:row-span-2 bg-brand-darkBlue p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Heart className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Frieza Espiritual</h3>
              <p className="text-slate-300 leading-relaxed">
                O maior perigo do líder é trabalhar para Deus e esquecer de andar com Ele. Este livro é seu antídoto diário.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
               <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Risco Alto</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Target className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Falta de Direção</h3>
            <p className="text-slate-600">
              A rotina intensa embaça a visão. Você precisa de uma bússola para calibrar o norte todos os dias.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
              <Users className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Solidão</h3>
            <p className="text-slate-600">
              Liderar é solitário, mas você não precisa caminhar sozinho. Tenha um mentor em suas mãos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
