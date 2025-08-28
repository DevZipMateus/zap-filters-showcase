
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Catalogo = () => {
  const produtos = [
    {
      id: 1,
      nome: "Filtro Electrolux PE",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_10_Electrolux PE.jpeg",
      descricao: "Refil para purificadores Electrolux PE"
    },
    {
      id: 2,
      nome: "Filtro Esmaltec",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_11_Esmaltec.jpeg",
      descricao: "Refil compatível com purificadores Esmaltec"
    },
    {
      id: 3,
      nome: "Europa Bliss",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_12_Europa Bliss.jpeg",
      descricao: "Refil para purificadores Europa Bliss"
    },
    {
      id: 4,
      nome: "Europa Noblesse",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_13_Europa Noblesse.jpeg",
      descricao: "Refil para purificadores Europa Noblesse"
    },
    {
      id: 5,
      nome: "IBBL C3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_15_IBBL C3.jpeg",
      descricao: "Refil para purificadores IBBL C3"
    },
    {
      id: 6,
      nome: "Bebedouro K-20",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_1_Bebedouro K-20.jpeg",
      descricao: "Bebedouro industrial K-20"
    },
    {
      id: 7,
      nome: "Bebedouro K-10",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_2_Bebedouro K-10.jpeg",
      descricao: "Bebedouro industrial K-10"
    },
    {
      id: 8,
      nome: "Purificador Top Life",
      categoria: "Purificadores",
      imagem: "/lovable-uploads/galeria/Cliente_3_8_Purificador Top Life preto.jpeg",
      descricao: "Purificador Top Life - modelo preto"
    }
  ];

  const categorias = ["Todos", "Refis", "Bebedouros", "Purificadores"];
  const [categoriaAtiva, setCategoriaAtiva] = React.useState("Todos");

  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaAtiva);

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-accent py-16 sm:py-20 text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Nosso Catálogo
              </h1>
              <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto">
                Explore nossa linha completa de produtos para água pura
              </p>
            </div>
          </section>

          {/* Filtros */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaAtiva(categoria)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      categoriaAtiva === categoria
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Produtos */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {produtosFiltrados.map((produto) => (
                  <Card key={produto.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{produto.nome}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {produto.categoria}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{produto.descricao}</p>
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
                        <span>Consultar Preço</span>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {produtosFiltrados.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nenhum produto encontrado nesta categoria.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco! Trabalhamos com diversas marcas e temos uma ampla variedade de produtos.
              </p>
              <a
                href="https://wa.me/5516981552628"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <img 
                  src="/lovable-uploads/1250d4c5-fe86-426b-825d-4cb14b5de79a.png" 
                  alt="WhatsApp" 
                  className="h-5 w-5"
                />
                <span>Fale Conosco</span>
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HelmetProvider>
  );
};

export default Catalogo;
