import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Check, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGallery from '../components/product/ProductGallery';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/ui/QuantitySelector';
import ProductCard from '../components/ui/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    );
  }
  
  const similarProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link to={`/category/${product.category}`} className="hover:text-blue-600 transition-colors">
              {product.category}
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-900 font-medium truncate">{product.title}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Gallery */}
        <div>
          <Link to={`/category/${product.category}`} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft size={16} className="mr-1" /> Back to {product.category}
          </Link>
          <ProductGallery images={product.images} title={product.title} />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  className="text-amber-400" 
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="px-2 py-0.5 text-sm font-semibold bg-red-100 text-red-700 rounded">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-green-600 flex items-center">
              <Check size={16} className="mr-1" />
              In Stock
            </p>
          </div>
          
          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
          
          {/* Brand */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Brand: <span className="font-medium text-gray-900">{product.brand}</span>
            </p>
          </div>
          
          {/* Add to Cart */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <QuantitySelector 
                quantity={quantity} 
                onChange={setQuantity} 
              />
              
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="sm:flex-grow-0"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="sm:flex-grow-0"
                aria-label="Share product"
              >
                <Share2 size={20} />
              </Button>
            </div>
          </div>
          
          {/* Specifications */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="text-sm font-medium text-gray-600 min-w-[120px]">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className="text-sm text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductPage;