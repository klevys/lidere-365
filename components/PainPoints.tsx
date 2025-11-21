import React from 'react';
import { COPY } from '../constants';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-darkBlue mb-4">
            {COPY.pain.title}
          </h2>
          <p className="text-xl text-slate-600">
            {COPY.pain.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COPY.pain.points.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="mb-6 p-4 bg-brand-light rounded-full inline-block group-hover:bg-brand-orange/10 transition-colors">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-darkBlue mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};