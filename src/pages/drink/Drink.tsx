import React, { useState } from 'react';
import cappuccino from '../../assets/images/coffee/cappuccino.jpg';
import latte from '../../assets/images/coffee/latte.jpg';
import classicIced from '../../assets/images/coffee/classic-iced-coffee.jpg';
import classicHot from '../../assets/images/coffee/classic-hot-coffee.jpg';
import honeyAlmond from '../../assets/images/coffee/honey-almond.jpg';
import honeyOat from '../../assets/images/coffee/honey-almond.jpg';

const filterCategories = [
  'Hot', 'Cold', 'Milkshake', 'Black', 'Blended', 'Caffeine free', 
  'Nitro', 'On Tap', 'Ice Cream', 'Cream', 'Brew', 'Juice', 'Ice & Cream'
];

const coffeeItems = [
  {
    id: 1,
    name: 'Cappuccino',
    image: cappuccino,
    size: 'PICCOLO(180 ml)',
    calories: '85 kcal',
    description: 'Dark, Rich in flavour espresso lies in wait under a smoothed...',
    price: 225.75,
    isVeg: true
  },
  {
    id: 2,
    name: 'Latte',
    image: latte,
    size: 'PICCOLO(180 ml)',
    calories: '76 kcal',
    description: 'Our dark, Rich in flavour espresso balanced with steamed mil...',
    price: 231.00,
    isVeg: true
  },
  {
    id: 3,
    name: 'Classic Iced Coffee',
    image: classicIced,
    size: 'SHORT(237 ml)',
    calories: '128 kcal',
    description: 'Savour our premium coffee made with top 3% Arabica beans in ...',
    price: 236.25,
    isVeg: true
  },
  {
    id: 4,
    name: 'Classic Hot Coffee',
    image: classicHot,
    size: 'Classic Hot Coffee(180 ml)',
    calories: '105 kcal',
    description: 'Savour our premium coffee made with top 3% Arabica beans in ...',
    price: 157.50,
    isVeg: true
  },
  {
    id: 5,
    name: 'Honey Almond Flat White',
    image: honeyAlmond,
    size: 'SHORT(237 ml)',
    calories: '89 kcal',
    description: 'Your daily cup of coffee gets even better in our Plant-Based...',
    price: 409.50,
    isVeg: true
  },
  {
    id: 6,
    name: 'Honey Oat Flat White',
    image: honeyOat,
    size: 'SHORT(237 ml)',
    calories: '94 kcal',
    description: 'Your daily cup of coffee gets even better in our Plant-Based...',
    price: 409.50,
    isVeg: true
  }
];

const Drink = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hot');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Espresso</h1>
        <p className="text-gray-600 mt-2">
          Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-4">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Coffee Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeItems.map((item) => (
          <div key={item.id} className="bg-[#f9f9f9] hover:bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-200">
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
                <div className="gap-2 mb-1">
                  {item.isVeg && (
                    <div className="w-4 h-4 border border-green-600 p-[2px] rounded-sm flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-green-600"></div>
                    </div>
                  )}
                  <h3 className="font-medium text-gray-900 mt-1">{item.name}</h3>
                </div>
                <p className="text-xs text-gray-500">
                  {item.size} · {item.calories}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Price and Add Button */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="font-medium text-gray-900">₹ {item.price.toFixed(2)}</span>
              {/* <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-deep transition-colors duration-200">
                Add Item
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drink;