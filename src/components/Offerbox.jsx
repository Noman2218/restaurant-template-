import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Offerbox = () => {
  const [offerbox, setOfferbox] = useState([]); // State for storing food items

  // Fetching data from the server
  useEffect(() => {
    axios.get('http://localhost:3000/Offerbox')  // Make sure this endpoint is correct
      .then((response) => {
        setOfferbox(response.data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
      });
  }, []); // Empty dependency array to fetch data only once

  return ( 
    <div className="flex justify-center items-center container mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 p-6">
        {/* Map over the offerbox data */}
        {offerbox.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg overflow-hidden bg-white p-6 w-full h-80 group flex`} // Added 'flex'
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundRepeat: 'repeat',
            }}
          >
            {/* Left Half: Text or Image */}
            <div className="w-1/2 flex flex-col  justify-center items-start z-10 p-4">
              {/* If `card.description` is not text, you can replace it with another image */}
              <img
                src={card.titleImage} 
                alt="text image"
                className="w-full h-auto object-contain"
              />
             <h3>
              {card.description}
             </h3>
              <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${card.textColor}`}>
                {card.title}
              </h2>

              {/* Discount Badge */}
              {card.discount && (
                <div className="mt-4 text-xl font-bold bg-white text-black inline-block px-3 py-1 rounded">
                  {card.discount}
                </div>
              )}

            </div>

            {/* Right Half: Main Image */}
            <div className="w-1/2 flex justify-center transform transition-transform duration-300  group-hover:scale-110 items-center relative">
              <img
                src={card.mainImage} // Pizza or Burger image
                alt="Food Item"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Offerbox;
