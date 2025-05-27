import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max',
    description: 'Apple iPhone 15 Pro Max with A17 Pro chip, 48MP camera system, and Dynamic Island.',
    price: 1099,
    originalPrice: 1199,
    discount: 8,
    rating: 4.8,
    reviews: 1243,
    images: [
      'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg',
      'https://images.pexels.com/photos/5750002/pexels-photo-5750002.jpeg'
    ],
    category: 'Smartphones',
    brand: 'Apple',
    inStock: true,
    specifications: {
      display: '6.7-inch Super Retina XDR display',
      processor: 'A17 Pro chip',
      camera: '48MP main camera',
      battery: 'Up to 29 hours video playback',
      storage: '256GB',
      os: 'iOS 17'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra with 200MP camera, S Pen, and AI features.',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    rating: 4.7,
    reviews: 876,
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg'
    ],
    category: 'Smartphones',
    brand: 'Samsung',
    inStock: true,
    specifications: {
      display: '6.8-inch Dynamic AMOLED 2X display',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP main camera',
      battery: '5000mAh',
      storage: '512GB',
      os: 'Android 14'
    },
    featured: true
  },
  {
    id: '3',
    title: 'MacBook Pro 16"',
    description: 'Apple MacBook Pro with M3 Pro chip, Liquid Retina XDR display, and all-day battery life.',
    price: 2499,
    originalPrice: 2699,
    discount: 7,
    rating: 4.9,
    reviews: 542,
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
      'https://images.pexels.com/photos/48605/pexels-photo-48605.jpeg'
    ],
    category: 'Laptops',
    brand: 'Apple',
    inStock: true,
    specifications: {
      display: '16-inch Liquid Retina XDR display',
      processor: 'M3 Pro chip',
      memory: '32GB unified memory',
      storage: '1TB SSD',
      battery: 'Up to 22 hours',
      os: 'macOS Sonoma'
    },
    featured: true
  },
  {
    id: '4',
    title: 'Dell XPS 15',
    description: 'Dell XPS 15 with 12th Gen Intel Core processors, NVIDIA RTX graphics, and InfinityEdge display.',
    price: 1899,
    originalPrice: 2099,
    discount: 10,
    rating: 4.6,
    reviews: 328,
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg'
    ],
    category: 'Laptops',
    brand: 'Dell',
    inStock: true,
    specifications: {
      display: '15.6-inch FHD+ InfinityEdge display',
      processor: 'Intel Core i9-12900HK',
      memory: '32GB DDR5',
      storage: '1TB SSD',
      graphics: 'NVIDIA RTX 3050 Ti',
      os: 'Windows 11 Pro'
    }
  },
  {
    id: '5',
    title: 'iPad Pro 12.9"',
    description: 'Apple iPad Pro with M2 chip, Liquid Retina XDR display, and Apple Pencil support.',
    price: 1099,
    originalPrice: 1199,
    discount: 8,
    rating: 4.8,
    reviews: 456,
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'
    ],
    category: 'Tablets',
    brand: 'Apple',
    inStock: true,
    specifications: {
      display: '12.9-inch Liquid Retina XDR display',
      processor: 'M2 chip',
      memory: '8GB RAM',
      storage: '256GB',
      camera: '12MP Wide camera',
      os: 'iPadOS 16'
    },
    featured: true
  },
  {
    id: '6',
    title: 'Sony WH-1000XM5',
    description: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones with 30-hour battery life.',
    price: 349,
    originalPrice: 399,
    discount: 13,
    rating: 4.7,
    reviews: 782,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    category: 'Audio',
    brand: 'Sony',
    inStock: true,
    specifications: {
      type: 'Over-ear, closed-back',
      battery: 'Up to 30 hours',
      connectivity: 'Bluetooth 5.2, 3.5mm',
      features: 'Active Noise Cancellation, Ambient Sound Mode',
      color: 'Black'
    }
  },
  {
    id: '7',
    title: 'Samsung 65" OLED TV',
    description: 'Samsung 65" Class S95C OLED 4K Smart TV with Quantum HDR OLED and Dolby Atmos.',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    rating: 4.8,
    reviews: 325,
    images: [
      'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg',
      'https://images.pexels.com/photos/6782428/pexels-photo-6782428.jpeg'
    ],
    category: 'TVs',
    brand: 'Samsung',
    inStock: true,
    specifications: {
      size: '65 inches',
      resolution: '4K UHD (3840 x 2160)',
      panel: 'OLED',
      hdr: 'Quantum HDR OLED',
      audio: 'Dolby Atmos',
      smartFeatures: 'Tizen OS, Voice Assistant'
    },
    featured: true
  },
  {
    id: '8',
    title: 'Apple Watch Series 9',
    description: 'Apple Watch Series 9 with Always-On Retina display, advanced health sensors, and watchOS 10.',
    price: 399,
    originalPrice: 429,
    discount: 7,
    rating: 4.7,
    reviews: 651,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
    ],
    category: 'Wearables',
    brand: 'Apple',
    inStock: true,
    specifications: {
      display: 'Always-On Retina display',
      processor: 'S9 chip',
      sensors: 'Heart rate, ECG, Blood Oxygen',
      connectivity: 'GPS, Bluetooth 5.3, Wi-Fi',
      battery: 'Up to 18 hours',
      waterResistance: '50 meters'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};