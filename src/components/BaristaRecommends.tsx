import React from 'react';
import { Link } from 'react-router-dom';

interface RecommendedProductProps {
  image: string;
  title: string;
  size: string;
  calories: string;
  price: number;
  isVeg?: boolean;
}

const RecommendedProduct: React.FC<RecommendedProductProps> = ({
  image,
  title,
  size,
  calories,
  price,
  isVeg = true
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 border border-green-600 p-[2px] rounded-sm flex-shrink-0">
              <div className={`w-full h-full rounded-full ${isVeg ? 'bg-green-600' : 'bg-transparent'}`}></div>
            </div>
            <h3 className="font-medium text-gray-900">{title}</h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {size} · {calories}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <span className="font-medium text-gray-900">₹ {price.toFixed(2)}</span>
        <button className="bg-primary-deep text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-mild transition-colors duration-200">
          Add Item
        </button>
      </div>
    </div>
  );
};

const BaristaRecommends = () => {
  const recommendedProduct = {
    image: '/src/assets/images/coffee/java-chip-frappuccino.jpg',
    title: 'Java Chip Frappuccino',
    size: 'TALL(345 ml)',
    calories: '392 kcal',
    price: 420.00,
    isVeg: true
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Barista Recommends</h2>
        </div>
        <div className="max-w-sm">
          <RecommendedProduct {...recommendedProduct} />
        </div>
      </div>
    </div>
  );
};

export default BaristaRecommends; 