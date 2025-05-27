import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';
import { categories } from '../../data/categories';

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <Link to="/categories" className="text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;