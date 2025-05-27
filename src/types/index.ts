export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  specifications: { [key: string]: string };
  featured?: boolean;
  currency?: {
    code: string;
    symbol: string;
    rate: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
}