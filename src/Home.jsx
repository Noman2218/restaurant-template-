import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import FoodCard from './components/Foodcard';

const HeroSection = () => {
  return (
    <div>  <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between pt-8 pb-16 relative z-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-red-500 font-medium mb-4">Crispy, every bite taste</p>
            <h1 className="text-8xl font-bold text-white mb-6 leading-tight">
              Delicious <br /> <span className="text-red-500">Fried Chicken</span>
            </h1>

            <div>
              <button>
                <a
                  href="/order"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-4 rounded-md flex items-center transition-all"
                >
                  <h1 className="font-bold text-xl">Order Now</h1>
                </a>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative animate__animated  animate__fadeInUp ">
              <img src="/images/chiken.png" alt="Fried Chicken" className="max-w-full mx-auto z-10" />
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <img src="/images/chilli-shape.png" alt="Chilli" className="absolute -top-0 left-0 z-0 animate__animated  animate__fadeInUp" />
        <img src="/images/fire-shape.png" alt="Fire" className="absolute bottom-0 left-0 z-0 animate__animated  animate__fadeInUp" />
        <img src="/images/chilli-shape-2.png" alt="Chilli" className="absolute top-0 right-0 z-0 animate__animated  animate__fadeInUp" />
        <img src="/images/chilli-shape-3.png" alt="Chilli" className="absolute bottom-0 right-0 z-0 animate__animated  animate__fadeInUp" />
      </div>
    </section>

      {/* // Popular Food Items */}
     <FoodCard/>


    </div>

  );
};

export default HeroSection;
