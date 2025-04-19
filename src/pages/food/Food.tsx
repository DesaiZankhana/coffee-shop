import React, { useState } from 'react';
import chilliToast from '../../assets/images/food/chilli-cheese-toast.jpg';
import basilTomato from '../../assets/images/food/basil-tomato-mozzarella.jpg';
import spinachCorn from '../../assets/images/food/spinach-corn-sandwich.webp';
import paneerTikka from '../../assets/images/food/paneer-tikka-sandwich.jpg';
import mediterranean from '../../assets/images/food/mediterranean-focaccia.webp';

const categories = [
  'Sandwiches & Wraps',
  'Croissants & More',
  'Cookies & Desserts',
  'Puffs & Pies'
];

const filterTags = [
  'Veg',
  'Bakery',
  'Cake',
  'Dessert',
  'Spicy',
  'Sweet',
  'Healthy'
];

const foodItems = [
  {
    id: 1,
    name: 'Chilli Cheese Toast',
    image: chilliToast,
    description: 'Cheesy and fiery snack on a toasted French-style baguette, t...',
    price: 372.75,
    isVeg: true,
    isOutOfStock: true
  },
  {
    id: 2,
    name: 'Basil Tomato Mozzarella Cheese Sandwich',
    image: basilTomato,
    description: 'Tomato and mozzarella slices on a layer of basil sauce sandw...',
    price: 393.75,
    isVeg: true,
    isOutOfStock: true
  },
  {
    id: 3,
    name: 'Spinach & Corn Sandwich',
    image: spinachCorn,
    description: 'A savory blend of spinach and corn, garlic & herb aioli, mel...',
    price: 273.00,
    isVeg: true,
    isOutOfStock: true
  },
  {
    id: 4,
    name: 'Paneer Tikka Sandwich',
    image: paneerTikka,
    description: 'Marinated tandoori paneer filling, sliced cheese, and whole ...',
    price: 294.00,
    isVeg: true,
    isOutOfStock: true
  },
  {
    id: 5,
    name: 'Mediterranean Focaccia Sandwich',
    image: mediterranean,
    description: 'Crispy fried aubergine on a bed of roasted tomatoes v & bell...',
    price: 393.75,
    isVeg: true,
    isOutOfStock: true,
    isNewLaunch: true
  }
];

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sandwiches & Wraps');
  const [selectedFilter, setSelectedFilter] = useState('Veg');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Navigation */}
      {/* <div className="relative mb-8">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-base font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div> */}
      {/* Filter Tags */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${selectedFilter === tag 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sandwiches & Wraps</h1>
        <p className="text-gray-600 mt-2">
          Signature breads made with fresh ingredients and in-house sauces.
        </p>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
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
                <div className="flex items-start gap-2">
                  {item.isVeg && (
                    <div className="w-4 h-4 border border-green-600 p-[2px] rounded-sm flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-green-600"></div>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    {item.isNewLaunch && (
                      <span className="inline-block px-2 py-1 text-xs text-green-600 bg-green-50 rounded-full mt-1">
                        New Launch
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Price and Add Button */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="font-medium text-gray-900">₹ {item.price.toFixed(2)}</span>
              {/* <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${item.isOutOfStock 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-deep'}`}
                disabled={item.isOutOfStock}
              >
                {item.isOutOfStock ? 'Out of Stock' : 'Add Item'}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;