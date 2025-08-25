
import React from 'react';
import { Wrench, Droplets, ShoppingCart, Sparkles, Factory, Filter } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Especializada",
      description: "Conserto de vazamentos e manutenção preventiva em bebedouros e purificadores de todas as marcas",
      features: ["Diagnóstico gratuito", "Peças originais", "Garantia do serviço"]
    },
    {
      icon: Sparkles,
      title: "Higienização Completa",
      description: "Limpeza profunda e sanitização para garantir a qualidade da água e prolongar a vida útil dos equipamentos",
      features: ["Produtos especializados", "Processo certificado", "Agenda programada"]
    },
    {
      icon: Filter,
      title: "Troca de Filtros e Refis",
      description: "Substituição de filtros e refis com produtos de qualidade para manter a pureza da água",
      features: ["Filtros originais", "Todas as marcas", "Entrega rápida"]
    },
    {
      icon: ShoppingCart,
      title: "Venda de Equipamentos",
      description: "Bebedouros, purificadores e filtros de torneira das melhores marcas do mercado",
      features: ["Produtos novos", "Preços competitivos", "Garantia de fábrica"]
    },
    {
      icon: Factory,
      title: "Soluções Empresariais",
      description: "Bebedouros industriais e filtros centrais para empresas e condomínios",
      features: ["Projeto personalizado", "Instalação completa", "Suporte técnico"]
    },
    {
      icon: Droplets,
      title: "Acessórios Multimarcas",
      description: "Peças de reposição e acessórios para equipamentos de todas as marcas",
      features: ["Estoque completo", "Peças originais", "Pronta entrega"]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
            Oferecemos soluções completas para purificação de água com atendimento especializado e produtos de qualidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-scale-in p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-primary" />
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-2 sm:mb-3 md:mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm md:text-base text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-2 sm:mb-3 md:mb-4">
              Precisa de Atendimento?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
              Entre em contato conosco para agendar um serviço ou esclarecer suas dúvidas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-4">
              <a 
                href="https://wa.me/5516981552628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="tel:16981552628"
                className="btn-outline w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
