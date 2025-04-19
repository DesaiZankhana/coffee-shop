import React from 'react'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import BaristaRecommends from '../../components/BaristaRecommends'

// Import coffee images
import coldCoffee from '../../assets/images/coffee/cold-coffee.jpg'
import javaChip from '../../assets/images/coffee/java-chip-frappuccino.jpg'
import americano from '../../assets/images/coffee/americano.jpeg'
import doubleChocolate from '../../assets/images/coffee/double-chocolate.jpg'
import cappuccino from '../../assets/images/coffee/cappuccino.jpg'
import LearnCoffee from '../../components/LearnCoffee'

const bestsellerProducts = [
  {
    image: coldCoffee,
    title: "Cold coffee",
    size: "TALL(345 ml)",
    calories: "354 kcal",
    description: "Everybody's favourite indulgence. Crafted expertly with prem...",
    price: 320.25,
    isVeg: true
  },
  {
    image: javaChip,
    title: "Java Chip Frappuccino",
    size: "TALL(345 ml)",
    calories: "392 kcal",
    description: "Mocha sauce and Frappuccino® chips blended with with Frappu...",
    price: 346.50,
    isVeg: true
  },
  {
    image: americano,
    title: "Caffe Americano",
    size: "SHORT(237 ml)",
    calories: "0 kcal",
    description: "Rich in flavour, full-bodied espresso with hot water in true...",
    price: 252.00,
    isVeg: true
  },
  {
    image: doubleChocolate,
    title: "Double Chocolate Chip Frappuccino",
    size: "TALL(345 ml)",
    calories: "415 kcal",
    description: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
    price: 393.75,
    isVeg: true
  },
  {
    image: cappuccino,
    title: "Cappuccino",
    size: "PICCO(180 ml)",
    calories: "95 kcal",
    description: "Dark, Rich in flavour espresso lies in wait under a smoothed...",
    price: 225.75,
    isVeg: true
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      <BaristaRecommends />
      <div className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-bold mb-1'>Bestseller</h1>
          <p className='text-gray-500 mb-8 text-sm tracking-wide'>
            Everyone's favorite Terres de Café put together in a specially curated collection.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2p xl:grid-cols-3 gap-6'>
            {bestsellerProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
      <LearnCoffee />
    </div>
  )
}

export default Home