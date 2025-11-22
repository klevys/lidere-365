import { BookOpen, Shield, Target, Heart, Battery, Users, ArrowRight } from 'lucide-react';
import React from 'react';

export const WHATSAPP_LINK = "https://wa.me/5563984602383?text=Ol%C3%A1!%20Gostaria%20de%20garantir%20minha%20pr%C3%A9-reserva%20do%20livro%20Lidere%20365%20pelo%20valor%20promocional%20de%20R$%2039,90.";

export const VIDEO_URL = "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/lidere365_video.mp4";

export const IMAGES = {
  // IMPORTANTE: Salve a imagem da capa que você enviou como 'capa-lidere365.png' na pasta public
  bookCover: "/capa-lidere365.png", 
  
  // Foto do autor atualizada
  author: "https://klevysonline.wordpress.com/wp-content/uploads/2025/11/autor.jpeg", 
  
  // Placeholders para o resto
  backgroundHero: "https://placehold.co/1920x1080/003f5f/005f8f?text=Background",
  videoThumbnail: "https://placehold.co/1280x720/003f5f/ffffff?text=Apresentacao+Lidere+365"
};

export const COPY = {
  hero: {
    // Designed to be split by period for styling: "White Text. Orange Text."
    headline: "Sua Leitura. Para 2026.",
    subheadline: "Comece o ano com visão renovada. O devocional definitivo para quem deseja crescer como líder na família, no trabalho e no ministério em 2026.",
    cta: "Pré-venda",
    bullets: [
      "Planeje seu crescimento para 2026",
      "Pré-reserva Promocional: R$ 39,90",
      "Atendimento Exclusivo via WhatsApp"
    ]
  },
  pain: {
    title: "Como será o seu 2026?",
    description: "Não deixe que os mesmos desafios de sempre limitem sua liderança no próximo ano.",
    points: [
      {
        icon: <Battery className="w-8 h-8 text-brand-orange" />,
        title: "Esgotamento Mental",
        text: "Sem uma renovação diária, a pressão por resultados em 2026 pode drenar sua energia rapidamente."
      },
      {
        icon: <Users className="w-8 h-8 text-brand-orange" />,
        title: "Solidão Ministerial",
        text: "Não caminhe sozinho no próximo ano. Aprenda a liderar compartilhando a carga."
      },
      {
        icon: <Target className="w-8 h-8 text-brand-orange" />,
        title: "Falta de Direção",
        text: "A rotina intensa pode embaçar sua visão. Você precisa de uma bússola diária."
      },
      {
        icon: <Heart className="w-8 h-8 text-brand-orange" />,
        title: "Frieza Espiritual",
        text: "O perigo de trabalhar tanto para Deus e esquecer de se relacionar com Ele."
      }
    ]
  },
  transformation: {
    title: "365 Dias de Mentoria",
    text: "O 'Lidere 365' será seu companheiro de jornada em 2026. Imagine ter, todos os dias, uma direção clara fundamentada na Palavra e na experiência prática, pronta para ser aplicada aos desafios reais da sua liderança."
  },
  bookDetails: {
    title: "Sua Jornada em 2026",
    subtitle: "Uma estrutura diária pensada para o líder moderno.",
    features: [
      "Inspiração Bíblica Diária",
      "Reflexões de Liderança Prática",
      "Orações de Alinhamento",
      "Declarações de Fé e Coragem"
    ]
  },
  benefits: [
    "Comece 2026 com propósito definido",
    "Disciplina espiritual consistente",
    "Equilíbrio entre família e ministério",
    "Sabedoria para tomadas de decisão",
    "Renovação mental diária",
    "Mentoria acessível todos os dias"
  ],
  socialProof: {
    author: "Pr. Walmir Andrade",
    role: "Prefácio",
    text: "Esta obra é um convite para mergulhar em águas profundas. Klevys não escreve apenas para informar, mas para transformar. É leitura obrigatória para quem deseja liderar com integridade."
  },
  author: {
    name: "Pr. Klevys Silva",
    bio: "Pastor, escritor e conferencista, Pr. Klevys Silva tem dedicado sua vida a formar líderes relevantes. Com uma trajetória que une experiência prática no ministério e profundidade bíblica, ele compreende as pressões de quem vai à frente. Casado e pai de quatro filhos, Klevys traz em 'Lidere 365' a essência de uma liderança que começa no coração."
  },
  faq: [
    {
      question: "Quando receberei o livro?",
      answer: "O livro estará disponível na primeira quinzena de dezembro, a tempo de você se preparar para o início de 2026."
    },
    {
      question: "Qual o valor da pré-reserva?",
      answer: "Aproveite o valor promocional de R$ 39,90 exclusivo para a pré-venda pelo WhatsApp."
    },
    {
      question: "É um livro físico?",
      answer: "Sim, é um livro físico de alta qualidade, pensado para ser seu companheiro de cabeceira durante todo o ano."
    }
  ],
  guarantee: {
    title: "Invista na sua Liderança",
    text: "Este é o melhor investimento que você pode fazer para iniciar 2026 com o pé direito e o coração alinhado."
  },
  ctaSection: {
    title: "Seu 2026 Começa Agora",
    text: "Garanta seu exemplar da 1ª edição. O estoque de lançamento é limitado.",
    button: "Pré-venda",
    secure: "Compra Segura e Direta"
  }
};