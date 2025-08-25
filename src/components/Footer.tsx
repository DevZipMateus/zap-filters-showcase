
import React from 'react';
import { Droplets, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/20 rounded-lg p-2">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Zap Filtros</h1>
                <p className="text-sm text-blue-200">Multimarcas</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 max-w-md">
              Especialistas em venda e manutenção de purificadores e bebedouros. 
              Oferecemos soluções completas para água pura e saudável.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-200" />
                <a href="tel:16981552628" className="text-blue-100 hover:text-white transition-colors">
                  (16) 98155-2628
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-200" />
                <a href="mailto:laineramos2251@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  laineramos2251@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-200 mt-1" />
                <div className="text-blue-100">
                  Avenida Jornalista Roque de Rosa, 881<br />
                  Santo André
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Manutenção de Purificadores</li>
              <li>Higienização Completa</li>
              <li>Troca de Filtros</li>
              <li>Venda de Equipamentos</li>
              <li>Bebedouros Industriais</li>
              <li>Acessórios Multimarcas</li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Atendimento</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-200" />
                <div className="text-blue-100">
                  <div>Seg - Sex: 08:30 - 18:00</div>
                  <div>Sáb: 09:00 - 13:00</div>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mb-3">Redes Sociais</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/zapfiltros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                aria-label="Instagram da Zap Filtros"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/zapfiltrosibitinga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                aria-label="Facebook da Zap Filtros"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5516981552628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500/80 p-2 rounded-lg hover:bg-green-500 transition-colors"
                aria-label="WhatsApp da Zap Filtros"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">
              © {currentYear} Zap Filtros. Todos os direitos reservados.
            </div>
            
            <div className="text-blue-100 text-sm">
              CNPJ: 26.596.714/0001-06
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
