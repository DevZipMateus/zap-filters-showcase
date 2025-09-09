import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import CartFloat from '../components/CartFloat';
import QuantitySelector from '../components/QuantitySelector';
import { useCart } from '../contexts/CartContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Catalogo = () => {
  const { addToCart } = useCart();

  const produtos = [
    // Cliente 1 - Refis
    {
      id: 1,
      nome: "Avanti IBBL",
      categoria: "Refis", 
      imagem: "/lovable-uploads/galeria/Cliente_1_1_Avanti IBBL.jpeg",
      descricao: "Refil para purificadores Avanti IBBL"
    },
    {
      id: 2,
      nome: "Bebedouro",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_2_Bebed.jpeg",
      descricao: "Refil para bebedouros"
    },
    {
      id: 3,
      nome: "CNOVAS",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_3_CNOVAS.jpeg",
      descricao: "Refil CNOVAS"
    },
    {
      id: 4,
      nome: "Colormaq",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_4_Colormaq.jpeg",
      descricao: "Refil para purificadores Colormaq"
    },
    {
      id: 5,
      nome: "Colormaq Novo",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_5_Colormaq Novo.jpeg",
      descricao: "Refil para purificadores Colormaq - modelo novo"
    },
    {
      id: 6,
      nome: "Com Engate Rápido",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_6_Com egate rpido.jpeg",
      descricao: "Refil com engate rápido"
    },
    {
      id: 7,
      nome: "Electrolux P12a",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_7_Electrolux P12a.jpeg",
      descricao: "Refil para purificadores Electrolux P12a"
    },
    {
      id: 8,
      nome: "Electrolux PA",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_8_Electrolux PA.jpeg",
      descricao: "Refil para purificadores Electrolux PA"
    },
    {
      id: 9,
      nome: "Electrolux PA21G",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_9_Electrolux PA21G 11X 11B.jpeg",
      descricao: "Refil para purificadores Electrolux PA21G 11X 11B"
    },
    {
      id: 10,
      nome: "Electrolux PE",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_10_Electrolux PE.jpeg",
      descricao: "Refil para purificadores Electrolux PE"
    },
    {
      id: 11,
      nome: "Esmaltec",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_11_Esmaltec.jpeg",
      descricao: "Refil compatível com purificadores Esmaltec"
    },
    {
      id: 12,
      nome: "Europa Bliss",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_12_Europa Bliss.jpeg",
      descricao: "Refil para purificadores Europa Bliss"
    },
    {
      id: 13,
      nome: "Europa Noblesse",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_13_Europa Noblesse.jpeg",
      descricao: "Refil para purificadores Europa Noblesse"
    },
    {
      id: 14,
      nome: "Evolution",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_14_Evolution.jpeg",
      descricao: "Refil Evolution"
    },
    {
      id: 15,
      nome: "IBBL C3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_15_IBBL C3.jpeg",
      descricao: "Refil para purificadores IBBL C3"
    },
    {
      id: 16,
      nome: "IBBL C3 Speciale",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_16_IBBL C3 Speciale.jpeg",
      descricao: "Refil para purificadores IBBL C3 Speciale"
    },
    {
      id: 17,
      nome: "Latina",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_17_Latina.jpeg",
      descricao: "Refil Latina"
    },
    {
      id: 18,
      nome: "Libel Fit",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_18_Libel Fit.jpeg",
      descricao: "Refil Libel Fit"
    },
    {
      id: 19,
      nome: "Libell Acquaflex",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_19_Libell Acquaflex.jpeg",
      descricao: "Refil Libell Acquaflex"
    },
    {
      id: 20,
      nome: "Líder",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_20_Lder.jpeg",
      descricao: "Refil Líder"
    },
    {
      id: 21,
      nome: "Master Frio Bico Fino",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_21_Master frio Bico fino.jpeg",
      descricao: "Refil Master Frio com bico fino"
    },
    {
      id: 22,
      nome: "Master Frio Rótulo Azul",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_22_Master frio Rtulo Azul.jpeg",
      descricao: "Refil Master Frio com rótulo azul"
    },
    {
      id: 23,
      nome: "Multiuso",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_23_Multiuso.jpeg",
      descricao: "Refil multiuso"
    },
    {
      id: 24,
      nome: "New Up",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_24_New Up.jpeg",
      descricao: "Refil New Up"
    },
    {
      id: 25,
      nome: "Pré-Filtro CNOVAS",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_25_Pr CNOVAS.jpeg",
      descricao: "Pré-filtro CNOVAS"
    },
    {
      id: 26,
      nome: "Pré-Filtro IBBL",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_26_Pr Filtro IBBL.jpeg",
      descricao: "Pré-filtro IBBL"
    },
    {
      id: 27,
      nome: "Refil Carbon 5 Rosca",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_27_Refil carbon 5 rosca.jpeg",
      descricao: "Refil de carvão ativado 5 polegadas com rosca"
    },
    {
      id: 28,
      nome: "Refil Carbon 7",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_28_Refil carbon 7.jpeg",
      descricao: "Refil de carvão ativado 7 polegadas"
    },
    {
      id: 29,
      nome: "Refil Carbon 5",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_29_Refil Carbon 5.jpeg",
      descricao: "Refil de carvão ativado 5 polegadas"
    },
    {
      id: 30,
      nome: "Refil Carbon 7 Standard",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_30_Refil Carbon 7.jpeg",
      descricao: "Refil de carvão ativado 7 polegadas padrão"
    },
    {
      id: 31,
      nome: "Refil Carbon 9 3/4",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_31_Refil Carbon 9 3 4.jpeg",
      descricao: "Refil de carvão ativado 9 3/4 polegadas"
    },
    {
      id: 32,
      nome: "Refil Carbon 9 3/4 Rosca",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_32_Refil Carbon 9 3 4 rosca.jpeg",
      descricao: "Refil de carvão ativado 9 3/4 polegadas com rosca"
    },
    {
      id: 33,
      nome: "Side by Side",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_33_Side by Side.jpeg",
      descricao: "Refil para refrigeradores Side by Side"
    },
    {
      id: 34,
      nome: "Soft Everest",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_1_34_Soft Everest.jpeg",
      descricao: "Refil Soft Everest"
    },
    {
      id: 35,
      nome: "Torneira CNOVAS",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_1_35_Torneira Cnovas.jpeg",
      descricao: "Torneira CNOVAS"
    },
    // Cliente 2 - Bebedouros
    {
      id: 36,
      nome: "Bebedouro K-20",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_1_Bebedouro K-20.jpeg",
      descricao: "Bebedouro industrial K-20"
    },
    {
      id: 37,
      nome: "Bebedouro K-10",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_2_Bebedouro K-10.jpeg",
      descricao: "Bebedouro industrial K-10"
    },
    {
      id: 38,
      nome: "Bebedouro K-11",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_3_Bebedouro k-11.jpeg",
      descricao: "Bebedouro industrial K-11"
    },
    {
      id: 39,
      nome: "Bebedouro Industrial CNOVAS 10",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_4_Bebedouro industrial CNOVAS 10.jpeg",
      descricao: "Bebedouro industrial CNOVAS 10 litros"
    },
    {
      id: 40,
      nome: "Bebedouro Industrial 200L",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_5_Bebedouro industrial 200 litro.jpeg",
      descricao: "Bebedouro industrial 200 litros"
    },
    {
      id: 41,
      nome: "Bebedouro Industrial 50L",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_6_Bebedouro industrial 50 litros.jpeg",
      descricao: "Bebedouro industrial 50 litros"
    },
    {
      id: 42,
      nome: "Bebedouro Industrial 50L Modelo 2",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_2_7_Bebedouro industrial 50 litros.jpeg",
      descricao: "Bebedouro industrial 50 litros - modelo 2"
    },
    {
      id: 43,
      nome: "Acessório Modelo 8",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_2_8_29902731BADC9ADCAC0912AD339473.jpeg",
      descricao: "Acessório para bebedouros"
    },
    {
      id: 44,
      nome: "Acessório Modelo 9",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_2_9_48566F3413B7FC9D7DB47F699ECA73.jpeg",
      descricao: "Acessório para bebedouros"
    },
    {
      id: 45,
      nome: "Acessório Modelo 10",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_2_10_831CF3762FF19DD7169F0B182F490F.jpeg",
      descricao: "Acessório para bebedouros"
    },
    {
      id: 46,
      nome: "Acessório Modelo 11",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_2_11_331CE734AE88826893E0BF17E137D7.jpeg",
      descricao: "Acessório para bebedouros"
    },
    {
      id: 47,
      nome: "Acessório Modelo 12",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_2_12_5C953B9F1CCC35DBFB963639D7127A.jpeg",
      descricao: "Acessório para bebedouros"
    },
    {
      id: 48,
      nome: "Refil Multiuso Cliente 2",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_2_13_Refil Multiuso.jpeg",
      descricao: "Refil multiuso para bebedouros"
    },
    // Cliente 3 - Purificadores e Acessórios
    {
      id: 49,
      nome: "Torneira para Bebedouro",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_3_1_Torneira para bebedouro.jpeg",
      descricao: "Torneira para bebedouro"
    },
    {
      id: 50,
      nome: "Refil Multi Uso Cliente 3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_2_Refil Multi uso.jpeg",
      descricao: "Refil multi uso"
    },
    {
      id: 51,
      nome: "Refil Europa Nobless Cliente 3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_3_Refil Europa Nobless.jpeg",
      descricao: "Refil Europa Nobless"
    },
    {
      id: 52,
      nome: "Refil Europa Bliss Cliente 3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_4_Refil Europa Bliss.jpeg",
      descricao: "Refil Europa Bliss"
    },
    {
      id: 53,
      nome: "Refil Colormaq Compressor",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_5_Refil Colormaq Compressor.jpeg",
      descricao: "Refil Colormaq com compressor"
    },
    {
      id: 54,
      nome: "Refil Colormaq Cliente 3",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_6_Refil Colormaq.jpeg",
      descricao: "Refil Colormaq"
    },
    {
      id: 55,
      nome: "Refil Bebedouro de Pressão",
      categoria: "Refis",
      imagem: "/lovable-uploads/galeria/Cliente_3_7_Refil Bebedouro de presso.jpeg",
      descricao: "Refil para bebedouro de pressão"
    },
    {
      id: 56,
      nome: "Purificador Top Life Preto",
      categoria: "Purificadores",
      imagem: "/lovable-uploads/galeria/Cliente_3_8_Purificador Top Life preto.jpeg",
      descricao: "Purificador Top Life - modelo preto"
    },
    {
      id: 57,
      nome: "Purificador Top Life Prata",
      categoria: "Purificadores",
      imagem: "/lovable-uploads/galeria/Cliente_3_9_Purificador Top Life prata.jpeg",
      descricao: "Purificador Top Life - modelo prata"
    },
    {
      id: 58,
      nome: "Purificador Top Life Branco",
      categoria: "Purificadores",
      imagem: "/lovable-uploads/galeria/Cliente_3_10_Purificador Top Life branco.jpeg",
      descricao: "Purificador Top Life - modelo branco"
    },
    {
      id: 59,
      nome: "Filtro 9 3/4 para Cavalete Bebedouro",
      categoria: "Filtros",
      imagem: "/lovable-uploads/galeria/Cliente_3_11_Filtro 9 3 4 para cavalete beb.jpeg",
      descricao: "Filtro 9 3/4 polegadas para cavalete de bebedouro"
    },
    {
      id: 60,
      nome: "Filtro 9 3/4 Azul para Cavalete",
      categoria: "Filtros",
      imagem: "/lovable-uploads/galeria/Cliente_3_12_Filtro 9 3 4 azul para cavalet.jpeg",
      descricao: "Filtro 9 3/4 polegadas azul para cavalete"
    },
    {
      id: 61,
      nome: "Acessório Especial",
      categoria: "Acessórios",
      imagem: "/lovable-uploads/galeria/Cliente_3_13_FE3EC3B8C8349E53633AE7C019613D.jpeg",
      descricao: "Acessório especial para purificadores"
    },
    {
      id: 62,
      nome: "Bebedouro Libell Stillo",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_14_Bebedouro Libell Stillo.jpeg",
      descricao: "Bebedouro Libell Stillo"
    },
    {
      id: 63,
      nome: "Bebedouro Libell Master Inox",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_15_Bebedouro libell master inox.jpeg",
      descricao: "Bebedouro Libell Master em aço inox"
    },
    {
      id: 64,
      nome: "Bebedouro K-200",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_16_Bebedouro K-200.jpeg",
      descricao: "Bebedouro industrial K-200"
    },
    {
      id: 65,
      nome: "Bebedouro K-100",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_17_Bebedouro K-100.jpeg",
      descricao: "Bebedouro industrial K-100"
    },
    {
      id: 66,
      nome: "Bebedouro K-31I",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_18_Bebedouro K-31I.jpeg",
      descricao: "Bebedouro industrial K-31I"
    },
    {
      id: 67,
      nome: "Bebedouro K-31",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_19_Bebedouro K-31.jpeg",
      descricao: "Bebedouro industrial K-31"
    },
    {
      id: 68,
      nome: "Bebedouro K-30I",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_20_Bebedouro K-30I.jpeg",
      descricao: "Bebedouro industrial K-30I"
    },
    {
      id: 69,
      nome: "Bebedouro K-30",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_21_Bebedouro K-30.jpeg",
      descricao: "Bebedouro industrial K-30"
    },
    {
      id: 70,
      nome: "Bebedouro K-25",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_22_Bebedouro K-25.jpeg",
      descricao: "Bebedouro industrial K-25"
    },
    {
      id: 71,
      nome: "Bebedouro K-21",
      categoria: "Bebedouros",
      imagem: "/lovable-uploads/galeria/Cliente_3_23_Bebedouro K-21.jpeg",
      descricao: "Bebedouro industrial K-21"
    }
  ];

  const categorias = ["Todos", "Refis", "Bebedouros", "Purificadores", "Filtros", "Acessórios"];
  const [categoriaAtiva, setCategoriaAtiva] = React.useState("Todos");

  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaAtiva);

  const handleAddToCart = (produto: typeof produtos[0], quantidade: number) => {
    addToCart(produto, quantidade);
  };

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
                  <Card key={produto.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
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
                    <CardContent className="flex flex-col h-full">
                      <p className="text-gray-600 mb-4 flex-grow">{produto.descricao}</p>
                      <div className="mt-auto space-y-3">
                        <QuantitySelector
                          onQuantityChange={() => {}}
                          onAddToCart={(quantidade) => handleAddToCart(produto, quantidade)}
                          productName={produto.nome}
                        />
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
                      </div>
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
        <CartFloat />
      </div>
    </HelmetProvider>
  );
};

export default Catalogo;
