
import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
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
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">Zap Filtros</h1>
              <p className="text-xs text-muted-foreground">Multimarcas</p>
            </div>
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
              className="btn-primary"
            >
              WhatsApp
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
                  className="btn-primary w-full text-center block"
                >
                  WhatsApp
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
