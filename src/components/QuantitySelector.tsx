
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  onQuantityChange: (quantity: number) => void;
  onAddToCart: (quantity: number) => void;
  productName: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  onQuantityChange,
  onAddToCart,
  productName
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="h-8 w-8"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
          className="w-16 text-center h-8"
          min="1"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleQuantityChange(quantity + 1)}
          className="h-8 w-8"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        onClick={handleAddToCart}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

export default QuantitySelector;
