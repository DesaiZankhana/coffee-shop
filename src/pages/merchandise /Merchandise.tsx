import React, { useState } from 'react';
import mug1 from '../../assets/images/merchandise/mug1.jpg';
import mug2 from '../../assets/images/merchandise/mug2.jpg';
import mug3 from '../../assets/images/merchandise/mug3.jpg';
import cup1 from '../../assets/images/merchandise/cup1.jpg';
import cup2 from '../../assets/images/merchandise/cup2.jpg';
import cup3 from '../../assets/images/merchandise/cup3.jpg';
import tumbler1 from '../../assets/images/merchandise/tumbler1.jpg';
import tumbler2 from '../../assets/images/merchandise/tumbler2.jpg';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  size: string
}

type ProductCategory = 'Mugs' | 'Cups' | 'Tumblers' | 'Water Bottles';

type ProductsData = Record<ProductCategory, Product[]>;

interface CategoryInfo {
  title: string;
  description: string;
//   subcategories: string[];
}

const categoryInfo: Record<ProductCategory, CategoryInfo> = {
  'Mugs': {
    title: 'Coffee Mugs Collection',
    description: 'Discover our exclusive collection of carefully crafted coffee mugs, designed to enhance your coffee experience.',
  },
  'Cups': {
    title: 'Premium Cups Selection',
    description: 'Explore our range of premium cups perfect for your favorite beverages.',
  },
  'Tumblers': {
    title: 'Travel Tumblers',
    description: 'Keep your beverages at the perfect temperature with our collection of stylish tumblers.',
  },
  'Water Bottles': {
    title: 'Hydration Collection',
    description: 'Stay hydrated in style with our collection of water bottles.',
  }
};

const merchandiseTypes: ProductCategory[] = ['Mugs', 'Cups', 'Tumblers', 'Water Bottles'];

const products: ProductsData = {
  'Mugs': [
    {
      id: 1,
      name: 'Iconic Siren Demi Ceramic Mug (89 Ml)',
      image: mug1,
      description: 'An all white demi mug with the classic iconic siren logo wit...',
      price: 600.00,
      size: '89 ML',
    },
    {
      id: 2,
      name: 'Mumbai Been There Ceramic Cup (414 Ml)',
      image: mug2,
      description: 'Inspired by beautiful Indian city Mumbai, enjoy your daily c...',
      price: 750.00,
      size: '414 ML',
    },
    {
      id: 3,
      name: 'India Been There Ceramic Cup (414 Ml)',
      image: mug3,
      description: 'Inspired by beautiful Indian cities, enjoy your daily coffee...',
      price: 750.00,
      size: '414 ML',
    },
  ],
  'Cups': [
    {
        id: 1,
        name: 'Mint Green Hot Reusable Cup (473 Ml)',
        image: cup1,
        description: 'Enjoy your hot beverage in this reusable coffee cup while be...',
        price: 350.00,
        size: '473 ML',
      },
      {
        id: 2,
        name: 'HOLIDAY HCUP REU FY25 473 ML',
        image: cup2,
        description: 'Global holiday reusable cup is here! Enjoy your beverages on...',
        price: 350.00,
        size: '473 ML',
      },
  ],
  'Tumblers': [
    {
        id: 1,
        name: 'New Greens Light Tumbler - 355 ml',
        image: tumbler1,
        description: 'Tumbler with sophisticated gradient painting with subtle str...',
        price: 2990.00,
        size: '355 ML',
      },
      {
          id: 2,
          name: 'TMBL Summer Gradient 547 ml',
          image: tumbler2,
          description: 'Enjoy the summer with the all new gradient tumbler',
          price: 1600.00,
          size: '547 ML',
        },
  ],
  'Water Bottles': [
    {
        id: 1,
        name: 'New Greens Light Tumbler - 355 ml',
        image: tumbler1,
        description: 'Tumbler with sophisticated gradient painting with subtle str...',
        price: 2990.00,
        size: '355 ML',
      },
  ]
};

const Merchandise = () => {
  const [selectedType, setSelectedType] = useState<ProductCategory>('Mugs');

  const filteredProducts = products[selectedType];
   

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Category Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-4">
          {merchandiseTypes.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedType(category);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${selectedType === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Category Title and Description */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{categoryInfo[selectedType].title}</h1>
        <p className="text-gray-600 text-sm">
          {categoryInfo[selectedType].description}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item: Product) => (
          <div key={item.id} className="bg-[#f9f9f9] hover:bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex gap-4">
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Price and Add Button */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="font-medium text-gray-900">₹ {item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
