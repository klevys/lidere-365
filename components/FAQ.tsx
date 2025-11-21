import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { COPY } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-serif font-bold text-center text-brand-darkBlue mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {COPY.faq.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-slate-800">{item.question}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-slate-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="mt-16 bg-white border-2 border-brand-blue/10 rounded-2xl p-8 text-center">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-brand-darkBlue mb-2">{COPY.guarantee.title}</h3>
            <p className="text-slate-600">{COPY.guarantee.text}</p>
        </div>
      </div>
    </section>
  );
};