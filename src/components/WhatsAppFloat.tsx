
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5516981552628"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contate-nos via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;
