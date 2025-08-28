
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`nav-fixed ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/c33aa6b9-c21e-4795-a9f9-ddddc1d68a38.png" 
                alt="Zap Filtros Multimarcas" 
                className="h-10 w-auto md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Serviços
            </button>
            <Link 
              to="/catalogo"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Catálogo
            </Link>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contato
            </button>
            <a 
              href="https://wa.me/5516981552628" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <img 
                src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
                alt="WhatsApp" 
                className="h-4 w-4"
              />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100/50">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 transition-colors duration-300"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 transition-colors duration-300"
              >
                Serviços
              </button>
              <Link
                to="/catalogo"
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Catálogo
              </Link>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 transition-colors duration-300"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-blue-50 transition-colors duration-300"
              >
                Contato
              </button>
              <div className="px-4 py-2">
                <a 
                  href="https://wa.me/5516981552628" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                >
                  <img 
                    src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
                    alt="WhatsApp" 
                    className="h-4 w-4"
                  />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
