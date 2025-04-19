import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  size: string;
  calories: string;
  description: string;
  price: number;
  isVeg?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  size,
  calories,
  description,
  price,
  isVeg = true
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <div className="w-4 h-4 border border-green-600 p-[2px] rounded-sm">
              <div className={`w-full h-full rounded-full ${isVeg ? 'bg-green-600' : 'bg-transparent'}`}></div>
            </div>
          </div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {size} · {calories}
          </p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <span className="font-medium text-gray-900">₹ {price.toFixed(2)}</span>
        {/* <button className="bg-primary-deep text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-mild transition-colors duration-200">
          Add Item
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard; 