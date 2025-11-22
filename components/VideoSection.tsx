
import React from 'react';
import { Play } from 'lucide-react';
import { IMAGES } from '../constants';

export const VideoSection: React.FC = () => {
  return (
    <section className="bg-[#050914] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
             <span className="text-brand-orange font-medium tracking-[0.2em] text-sm uppercase">Trailer Oficial</span>
             <h2 className="text-3xl text-white mt-3 font-serif">Por dentro do Lidere 365</h2>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer border border-white/10">
            <img 
              src={IMAGES.videoThumbnail} 
              alt="Video Preview" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white font-bold text-xl">A Visão por trás do Livro</p>
              <p className="text-slate-400 text-sm">com Pr. Klevys Silva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
