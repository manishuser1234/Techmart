import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 99
}) => {
  const increment = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        className="flex items-center justify-center w-8 h-8 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value) && value >= min && value <= max) {
            onChange(value);
          }
        }}
        min={min}
        max={max}
        className="w-10 h-8 text-center border-0 focus:ring-0 focus:outline-none text-gray-800"
      />
      
      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        className="flex items-center justify-center w-8 h-8 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;