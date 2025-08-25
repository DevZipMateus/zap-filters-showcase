
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
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Zap Filtros
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Somos uma empresa especializada em <strong>purificadores multimarcas</strong>, oferecendo 
              soluções completas para a purificação de água em residências, escritórios e empresas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              Nossa missão é garantir que nossos clientes tenham acesso à <strong>água pura e saudável</strong> 
              através de equipamentos de qualidade e serviços técnicos especializados.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-primary">Atendimento Multimarcas</h4>
                  <p className="text-muted-foreground">Trabalhamos com todas as marcas do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-primary">Serviços Especializados</h4>
                  <p className="text-muted-foreground">Manutenção, higienização e vendas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-primary">Qualidade Garantida</h4>
                  <p className="text-muted-foreground">Produtos originais e garantia nos serviços</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5516981552628" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale com Nossa Equipe
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card-gradient border border-blue-100/50 rounded-2xl p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Horário de Funcionamento
            </h3>
            <p className="text-muted-foreground">
              Estamos prontos para atender você nos seguintes horários
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">Segunda a Sexta</h4>
              <p className="text-2xl font-bold text-primary">08:30 - 18:00</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">Sábado</h4>
              <p className="text-2xl font-bold text-primary">09:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
