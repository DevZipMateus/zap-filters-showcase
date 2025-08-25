
import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: "100%", label: "Multimarcas" },
    { icon: Users, value: "1000+", label: "Clientes Atendidos" },
    { icon: Clock, value: "24h", label: "Suporte Técnico" },
    { icon: MapPin, value: "Ibitinga", label: "e Região" }
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Sobre a Zap Filtros
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Somos uma empresa especializada em <strong>purificadores multimarcas</strong>, oferecendo 
              soluções completas para a purificação de água em residências, escritórios e empresas.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Nossa missão é garantir que nossos clientes tenham acesso à <strong>água pura e saudável</strong> 
              através de equipamentos de qualidade e serviços técnicos especializados.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary text-sm sm:text-base">Atendimento Multimarcas</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Trabalhamos com todas as marcas do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary text-sm sm:text-base">Serviços Especializados</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Manutenção, higienização e vendas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary text-sm sm:text-base">Qualidade Garantida</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Produtos originais e garantia nos serviços</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5516981552628" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Fale com Nossa Equipe
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-scale-in order-1 lg:order-2">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card-gradient border border-blue-100/50 rounded-2xl p-4 sm:p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 sm:mt-16 bg-primary/5 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
              Horário de Funcionamento
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Estamos prontos para atender você nos seguintes horários
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Segunda a Sexta</h4>
              <p className="text-xl sm:text-2xl font-bold text-primary">08:30 - 18:00</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Sábado</h4>
              <p className="text-xl sm:text-2xl font-bold text-primary">09:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
