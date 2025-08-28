import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 sm:pr-4">
            <div className="flex items-center mb-3 sm:mb-4">
              <img 
                src="/lovable-uploads/c33aa6b9-c21e-4795-a9f9-ddddc1d68a38.png" 
                alt="Zap Filtros Multimarcas" 
                className="h-8 w-auto md:h-10"
              />
            </div>
            
            <p className="text-blue-100 mb-3 sm:mb-4 md:mb-6 max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
              Especialistas em venda e manutenção de purificadores e bebedouros. 
              Oferecemos soluções completas para água pura e saudável.
            </p>
            
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200 flex-shrink-0" />
                <a href="tel:16981552628" className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm md:text-base break-words">
                  (16) 98155-2628
                </a>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200 flex-shrink-0" />
                <a href="mailto:laineramos2251@gmail.com" className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm md:text-base break-all">
                  laineramos2251@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-xs sm:text-sm md:text-base">
                  <div className="break-words">Av. Jrn. Roque de Rosa, 881</div>
                  <div className="break-words">Jardim Paulista, Ibitinga - SP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">Nossos Serviços</h3>
            <ul className="space-y-1 sm:space-y-2 text-blue-100 text-xs sm:text-sm md:text-base">
              <li className="break-words">Manutenção de Purificadores</li>
              <li className="break-words">Higienização Completa</li>
              <li className="break-words">Troca de Filtros</li>
              <li className="break-words">Venda de Equipamentos</li>
              <li className="break-words">Bebedouros Industriais</li>
              <li className="break-words">Acessórios Multimarcas</li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">Atendimento</h3>
            
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-xs sm:text-sm md:text-base">
                  <div className="break-words">Seg - Sex: 08:30 - 18:00</div>
                  <div className="break-words">Sáb: 09:00 - 13:00</div>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mb-1 sm:mb-2 md:mb-3 text-xs sm:text-sm md:text-base">Redes Sociais</h4>
            <div className="flex space-x-2 sm:space-x-3">
              <a 
                href="https://www.instagram.com/zapfiltros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-1.5 sm:p-2 rounded-lg hover:bg-white/30 transition-colors flex-shrink-0"
                aria-label="Instagram da Zap Filtros"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </a>
              <a 
                href="https://www.facebook.com/zapfiltrosibitinga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-1.5 sm:p-2 rounded-lg hover:bg-white/30 transition-colors flex-shrink-0"
                aria-label="Facebook da Zap Filtros"
              >
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </a>
              <a 
                href="https://wa.me/5516981552628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500/80 p-1.5 sm:p-2 rounded-lg hover:bg-green-500 transition-colors flex-shrink-0"
                aria-label="WhatsApp da Zap Filtros"
              >
                <img 
                  src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
                  alt="WhatsApp" 
                  className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <div className="text-blue-100 text-xs sm:text-sm break-words">
              © {currentYear} Zap Filtros. Todos os direitos reservados.
            </div>
            
            <div className="text-blue-100 text-xs sm:text-sm break-words">
              CNPJ: 26.596.714/0001-06
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
