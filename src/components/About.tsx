import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Award,
    value: "100%",
    label: "Multimarcas"
  }, {
    icon: Users,
    value: "1000+",
    label: "Clientes Atendidos"
  }, {
    icon: Clock,
    value: "24h",
    label: "Suporte Técnico"
  }, {
    icon: MapPin,
    value: "Ibitinga",
    label: "e Região"
  }];
  return <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
              Sobre a Zap Filtros
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Somos uma empresa especializada em <strong>purificadores multimarcas</strong>, oferecendo 
              soluções completas para a purificação de água em residências, escritórios e empresas.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Nossa missão é garantir que nossos clientes tenham acesso à <strong>água pura e saudável</strong> 
              através de equipamentos de qualidade e serviços técnicos especializados.
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-primary text-sm sm:text-base md:text-lg break-words">Atendimento Multimarcas</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-words">Trabalhamos com todas as marcas do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-primary text-sm sm:text-base md:text-lg break-words">Serviços Especializados</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-words">Manutenção, higienização e vendas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-primary text-sm sm:text-base md:text-lg break-words">Qualidade Garantida</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-words">Produtos originais e similares e garantia nos serviços</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/5516981552628" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
              Fale com Nossa Equipe
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 animate-scale-in order-1 lg:order-2">
            {stats.map((stat, index) => <div key={index} className="bg-card-gradient border border-blue-100/50 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1 sm:mb-2 break-words">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">{stat.label}</div>
              </div>)}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-primary/5 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-2 sm:mb-3">
              Horário de Funcionamento
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Estamos prontos para atender você nos seguintes horários
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Segunda a Sexta</h4>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">08:30 - 18:00</p>
            </div>
            
            <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Sábado</h4>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">09:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;