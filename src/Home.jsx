import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative ">
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
        {/* Hero background */}
        <img
          className="w-full h-full bg-cover "
          src="/images/hero-bg.jpg"
          alt="hero background"
        />
      </div>
    </div>
  );
};

export default Home;
