
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender você com o melhor em purificadores e bebedouros
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100/50">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Avenida Jornalista Roque de Rosa, 881<br />
                      Santo André - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <a 
                      href="https://wa.me/5516981552628" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
                    >
                      (16) 98155-2628
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                    <a 
                      href="mailto:laineramos2251@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base break-all"
                    >
                      laineramos2251@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <div className="text-muted-foreground space-y-1 text-sm sm:text-base">
                      <p>Segunda a Sexta: 08:30 às 18:00</p>
                      <p>Sábado: 09:00 às 13:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-blue-100">
                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Nos siga nas redes sociais</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a 
                    href="https://www.instagram.com/zapfiltros" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 sm:p-3 rounded-lg transition-all duration-300"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/zapfiltrosibitinga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 sm:p-3 rounded-lg transition-all duration-300"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 text-white text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Atendimento Rápido</h3>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                Entre em contato conosco pelo WhatsApp para um atendimento personalizado
              </p>
              <a 
                href="https://wa.me/5516981552628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-green-50 transition-colors w-full sm:w-auto"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100/50">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Nossa Localização</h3>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2038260861596!2d-46.54649762408367!3d-23.569888678721047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590c5c3c7525%3A0x45b4c8a4b9c5d8e7!2sAvenida%20Jornalista%20Roque%20de%20Rosa%2C%20881%20-%20Vila%20Assun%C3%A7%C3%A3o%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009031-260!5e0!3m2!1spt-BR!2sbr!4v1703883600000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Zap Filtros"
              />
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/78xDzg9JdwzDwoSu9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors text-sm sm:text-base"
              >
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Ver no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
