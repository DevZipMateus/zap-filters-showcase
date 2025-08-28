
import React from 'react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5516981552628"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Contate-nos via WhatsApp"
    >
      <img 
        src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
        alt="WhatsApp" 
        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
      />
    </a>
  );
};

export default WhatsAppFloat;
