import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-section.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elite Coffee Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Coffee Shop is the place where you can get flavorful coffee 
            strains from global elite brands and roasters at very affordable 
            price.
          </p>
          <Link
            to="/about"
            className="inline-block bg-primary-deep text-white px-8 py-3 rounded-md 
            font-medium hover:bg-primary-mild transition-colors duration-300 
            uppercase tracking-wider text-sm"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 