
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de solicitar informações:\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Mensagem: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5516981552628?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para agendar um serviço ou esclarecer suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Telefone</h3>
                  <a 
                    href="tel:16981552628" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (16) 98155-2628
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <a 
                    href="mailto:laineramos2251@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    laineramos2251@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Avenida Jornalista Roque de Rosa, 881<br />
                    Santo André
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Horário</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Seg - Sex: 08:30 - 18:00</p>
                    <p>Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-primary mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/zapfiltros" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Instagram da Zap Filtros"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/zapfiltrosibitinga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Facebook da Zap Filtros"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-8 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="(16) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva como podemos ajudá-lo..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Enviar via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8642857859863!2d-48.82474!3d-21.7573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8d4c7a8b3b647%3A0x7f4e1e4e4e4e4e4e!2sAv.%20Jornalista%20Roque%20de%20Rosa%2C%20881%20-%20Vila%20Esperan%C3%A7a%2C%20Araraquara%20-%20SP!5e0!3m2!1spt!2sbr!4v1625000000000!5m2!1spt!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-cross-origin"
                className="rounded-xl"
                title="Localização da Zap Filtros"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
