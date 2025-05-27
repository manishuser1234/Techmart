import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const currency = product.currency || { code: 'INR', symbol: '₹', rate: 83 };
  const price = Math.round(product.price * currency.rate);
  const originalPrice = Math.round(product.originalPrice * currency.rate);
  
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-2 right-2 z-10">
        <button 
          className="p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>
      
      {product.discount > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-gray-800 font-medium text-lg mb-1 truncate hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center text-amber-400">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{currency.symbol}{price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">{currency.symbol}{originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
        
        <Button 
          variant="primary" 
          size="sm" 
          fullWidth 
          onClick={() => addToCart(product)}
          className="flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;