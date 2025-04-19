import React from 'react';
import { Link } from 'react-router-dom';
import coffeeBrewingImg from '../assets/images/coffee-brewing.jpg';

const LearnCoffee = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-900">Learn more about the world of coffee!</h2>
          <Link 
            to="/learn-more" 
            className="text-[#00754a] hover:text-[#005e3b] font-medium transition-colors duration-200"
          >
            Discover More
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-2xl group">
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium">
              Coffee Culture
            </span>
          </div>
          <div className="relative max-h-[400px] overflow-hidden">
            <img
              src={coffeeBrewingImg}
              alt="Coffee Brewing"
              className="w-full h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <h3 className="text-3xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Art & Science Of Coffee Brewing
            </h3>
            <p className="text-gray-200 mb-5 max-w-2xl transform group-hover:translate-y-[-4px] transition-transform duration-300 delay-75">
              Master the perfect brew with Terres de Café! Learn the art and science of coffee brewing.
            </p>
            <Link
              to="/learn-more"
              className="inline-block bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium 
                hover:bg-[#00754a] hover:text-white transition-colors duration-300 transform 
                group-hover:translate-y-[-4px] delay-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCoffee; 