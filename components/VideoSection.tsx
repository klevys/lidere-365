import React from 'react';
import { Play } from 'lucide-react';
import { IMAGES } from '../constants';

export const VideoSection: React.FC = () => {
  const handleVideoClick = () => {
    // Placeholder action for video play
    alert("O vídeo de apresentação será reproduzido aqui.");
  };

  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue via-slate-950 to-slate-950"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Conheça o <span className="text-brand-orange">Lidere 365</span> por dentro
          </h2>
          <p className="text-slate-400 text-lg">
            Assista à apresentação oficial e descubra como este devocional vai transformar sua jornada de liderança em 2026.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-brand-orange/10 ring-1 ring-white/10 group cursor-pointer"
            onClick={handleVideoClick}
          >
            {/* Thumbnail */}
            <img 
              src={IMAGES.videoThumbnail} 
              alt="Thumbnail do Vídeo" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 transform group-hover:scale-105"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                 {/* Pulse Effect */}
                 <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-75"></div>
                 
                 <div className="relative w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                 </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
               <p className="text-white font-bold text-lg">Apresentação Oficial • Pr. Klevys Silva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};