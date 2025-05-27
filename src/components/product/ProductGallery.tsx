import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  
  return (
    <div className="grid gap-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden aspect-square">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`border rounded-md overflow-hidden aspect-square ${
              mainImage === image ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;