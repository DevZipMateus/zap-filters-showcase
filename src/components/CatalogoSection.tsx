
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const CatalogoSection = () => {
  const produtosDestaque = [
    {
      id: 1,
      nome: "Filtro Electrolux PE",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_10_Electrolux PE.jpeg",
      descricao: "Refil para purificadores Electrolux PE"
    },
    {
      id: 2,
      nome: "Europa Bliss",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_12_Europa Bliss.jpeg",
      descricao: "Refil para purificadores Europa Bliss"
    },
    {
      id: 3,
      nome: "Bebedouro K-20",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_1_Bebedouro K-20.jpeg",
      descricao: "Bebedouro industrial K-20"
    },
    {
      id: 4,
      nome: "Purificador Top Life",
      categoria: "Purificadores",
      imagem: "/lovable-uploads/galeria/Cliente_3_8_Purificador Top Life preto.jpeg",
      descricao: "Purificador Top Life - modelo preto"
    }
  ];

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos produtos da nossa linha completa de filtros, purificadores e bebedouros
          </p>
        </div>

        {/* Produtos em Destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {produtosDestaque.map((produto) => (
            <Card key={produto.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{produto.nome}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {produto.categoria}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm">{produto.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Explore nosso catálogo completo com mais de 100 produtos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/catalogo"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Ver Catálogo Completo</span>
            </Link>
            <a
              href="https://wa.me/5516981552628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium"
            >
              <img 
                src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
                alt="WhatsApp" 
                className="h-5 w-5"
              />
              <span>Consultar Produtos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoSection;
