
import React from 'react';
import { Droplets, Shield, Award, Phone } from 'lucide-react';

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

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Água Pura,
            <br />
            <span className="text-blue-200">Vida Saudável</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
            Especialistas em purificadores, bebedouros e filtros multimarcas
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5" />
              <span>Multimarcas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5" />
              <span>Manutenção Especializada</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Droplets className="h-5 w-5" />
              <span>Higienização Completa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="btn-hero"
            >
              Nossos Serviços
            </button>
            <a 
              href="https://wa.me/5516981552628" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500/20 text-white border border-green-400/60 hover:bg-green-500 hover:text-white hover:border-green-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Company info */}
          <div className="mt-12 text-blue-200 text-sm">
            <p>📍 Avenida Jornalista Roque de Rosa, 881 - Santo André</p>
            <p>📞 (16) 98155-2628 | ✉️ laineramos2251@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
