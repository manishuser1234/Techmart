import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.name}`}
      className="group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-medium text-lg mb-1">
            {category.name}
          </h3>
          <p className="text-white/80 text-sm">
            {category.count} Products
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;