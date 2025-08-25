
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
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Oferecemos soluções completas para purificação de água com atendimento especializado e produtos de qualidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-scale-in p-6 sm:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
              Precisa de Atendimento?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
              Entre em contato conosco para agendar um serviço ou esclarecer suas dúvidas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="https://wa.me/5516981552628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="tel:16981552628"
                className="btn-outline w-full sm:w-auto"
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
