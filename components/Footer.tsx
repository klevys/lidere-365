import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-white text-xl font-bold mb-4">Lidere 365</p>
        <p className="mb-6 text-sm">
          © {new Date().getFullYear()} Klevys Silva. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};