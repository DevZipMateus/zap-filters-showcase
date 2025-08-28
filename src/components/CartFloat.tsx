
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, X, Minus, Plus, Send } from 'lucide-react';
import { Input } from './ui/input';

const CartFloat: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return;

    let message = "Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.nome}\n`;
      message += `   Categoria: ${item.categoria}\n`;
      message += `   Quantidade: ${item.quantidade}\n`;
      message += `   Descrição: ${item.descricao}\n\n`;
    });

    message += "Aguardo retorno com os preços e condições de pagamento. Obrigado!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5516981552628?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsOpen(false);
  };

  if (getTotalItems() === 0) return null;

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <div className="fixed bottom-32 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg relative"
        >
          <ShoppingCart className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 text-xs">
            {getTotalItems()}
          </Badge>
        </Button>
      </div>

      {/* Modal do carrinho */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Meu Carrinho</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-[60vh]">
              {items.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Carrinho vazio</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.nome}</h4>
                        <p className="text-sm text-gray-600">{item.categoria}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantidade - 1)}
                            className="h-6 w-6"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantidade}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center h-6 text-sm"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantidade + 1)}
                            className="h-6 w-6"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8 text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            {items.length > 0 && (
              <div className="p-6 border-t">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1"
                  >
                    Limpar Carrinho
                  </Button>
                  <Button
                    onClick={generateWhatsAppMessage}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Solicitar Orçamento</span>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default CartFloat;
