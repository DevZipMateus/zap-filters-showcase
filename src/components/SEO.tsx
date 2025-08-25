
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Zap Filtros Multimarcas - Purificadores, Bebedouros e Manutenção em Ibitinga",
  description = "Especialistas em venda e manutenção de purificadores e bebedouros. Higienização, troca de filtros e acessórios para todas as marcas. Atendimento em Ibitinga e região.",
  keywords = "purificadores, bebedouros, filtros, manutenção, higienização, Ibitinga, multimarcas, água pura",
  image = "/favicon.ico",
  url = "https://zapfiltros.com.br/"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zap Filtros" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Zap Filtros" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-navbutton-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zap Filtros",
          "image": image,
          "description": description,
          "url": url,
          "telephone": "+5516981552628",
          "email": "laineramos2251@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Jornalista Roque de Rosa, 881",
            "addressLocality": "Santo André",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "openingHours": [
            "Mo-Fr 08:30-18:00",
            "Sa 09:00-13:00"
          ],
          "sameAs": [
            "https://www.instagram.com/zapfiltros",
            "https://www.facebook.com/zapfiltrosibitinga"
          ],
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Debit Card, PIX",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Zap Filtros",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Manutenção de Purificadores",
                  "description": "Conserto e manutenção preventiva de purificadores de água"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Higienização de Equipamentos",
                  "description": "Limpeza profunda e sanitização de purificadores e bebedouros"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Venda de Purificadores",
                  "description": "Purificadores e bebedouros de todas as marcas"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
