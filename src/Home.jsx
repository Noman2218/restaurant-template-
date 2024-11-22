import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative">
        {/* Left chili */}
        <img
          className="absolute left-0 top-0"
          src="/images/chilli-shape.png"
          alt="left chili"
        />
        {/* Right chili */}
        <img
          className="absolute right-0 top-0"
          src="/images/chilli-shape-2.png"
          alt="right chili"
        />
        <img
          className="absolute right-0 bottom-0"
          src="/images/chilli-shape-3.png"
          alt="right chili"
        />
        {/* Fire shape at bottom-left */}
        <img
          className="absolute bottom-0 left-0"
          src="/images/fire-shape.png"
          alt="bottom left fire shape"
        />

        {/* Faded Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[150px] font-extrabold text-white opacity-5 tracking-wide"
            style={{ zIndex: 1 }}
          >
            FAST FOOD
          </h1>
        </div>

        {/* Main Content */}

        <div className="absolute inset-0 flex flex-col items-center justify-center w-3/4   z-10">

          <span className="text-red-500 font-medium text-lg tracking-widest">
            CRISPY, EVERY BITE TASTE
          </span>
          {/* DELICIOUS with Droplet */}
          <div className="relative inline-block">
            <h1 className="text-7xl font-bold text-white">DELICIOUS</h1>
            <img
              className="absolute -top-8 -right-8 w-12"
              src="/images/droplets.png"
              alt="droplet"
            />
            <h1 className="text-7xl font-bold text-white text-balance mt-4">FRIED CHICKEN</h1>
          </div>
          {/* FRIED CHICKEN */}
          

          {/* Button */}
          <button className="mt-8 px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600">
            ORDER NOW
          </button>
        </div>

        {/* Chicken Bucket Image */}
        <div className="absolute right-10 bottom-10 z-20">
          <img
            className="w-[400px] h-auto object-contain"
            src="/images/chiken.png"
            alt="chicken bucket"
          />
        </div>

        {/* Hero background */}
        <img
          className="w-full h-full bg-cover"
          src="/images/hero-bg.jpg"
          alt="hero background"
        />
      </div>
    </div>
  );
};

export default Home;
