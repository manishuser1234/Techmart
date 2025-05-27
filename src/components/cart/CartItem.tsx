import React from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import QuantitySelector from '../ui/QuantitySelector';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  updateQuantity, 
  removeItem 
}) => {
  const { product, quantity } = item;
  
  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200">
      <div className="sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-wrap justify-between mb-2">
          <Link to={`/product/${product.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
            {product.title}
          </Link>
          <div className="font-medium text-gray-900">
            ${product.price}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">
          {product.brand}
        </p>
        
        <div className="flex flex-wrap items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQuantity) => updateQuantity(product.id, newQuantity)}
          />
          
          <div className="flex items-center mt-4 sm:mt-0">
            <span className="mr-4 font-medium">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeItem(product.id)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;