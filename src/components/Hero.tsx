
import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c88a6b1d-819a-4c06-98cd-0144fad00295.png')`
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-brand-blue-500/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center text-white relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Água Pura,
            <br />
            <span className="text-blue-200">Vida Saudável</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10 text-blue-100 font-light px-2 sm:px-4 max-w-4xl mx-auto">
            Especialistas em purificadores, bebedouros e filtros multimarcas
          </p>

          {/* Features - Responsive layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm md:text-base px-2">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-0">
              <span className="whitespace-nowrap">Multimarcas</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-0">
              <span className="whitespace-nowrap">Manutenção Especializada</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-0">
              <span className="whitespace-nowrap">Higienização Completa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-4 sm:px-8 max-w-2xl mx-auto">
            <button
              onClick={scrollToServices}
              className="btn-hero w-full sm:w-auto min-w-0 flex-shrink-0 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5"
            >
              Nossos Serviços
            </button>
            <a 
              href="https://wa.me/5516981552628" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500/20 text-white border border-green-400/60 hover:bg-green-500 hover:text-white hover:border-green-500 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl transition-all duration-300 w-full sm:w-auto min-w-0 flex-shrink-0 text-sm sm:text-base lg:text-lg"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="whitespace-nowrap">Fale Conosco</span>
            </a>
          </div>

          {/* Company info */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-blue-200 text-xs sm:text-sm md:text-base px-2 sm:px-4 max-w-3xl mx-auto">
            <p className="mb-2 sm:mb-3">📍 Avenida Jornalista Roque de Rosa, 881 - Santo André</p>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 lg:space-x-6 space-y-1 sm:space-y-0">
              <p className="break-words">📞 (16) 98155-2628</p>
              <p className="break-all">✉️ laineramos2251@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 lg:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
