import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero section */}
  
      <img
        className="absolute righ"
        src="/images/chilli-shape.png"
        alt="left chili"
      />
          <img
        className="absolute right-0"
        src="/images/chilli-shape-2.png"
        alt="right chili"
      />
      <img src="/images/hero-bg.jpg" alt="hero background" />
    </div>
  );
};

export default Home;
