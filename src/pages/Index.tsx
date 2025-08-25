
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HelmetProvider>
  );
};

export default Index;
