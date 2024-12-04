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
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Map over the offerbox data */}
        {offerbox.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg overflow-hidden ${card.bgColor} p-6 w-full h-80`}  // Set fixed width and height
            style={{
              backgroundImage: `url(${card.bgImage})`,  // Set the background image dynamically
              backgroundSize: '',  // Ensure the background image covers the entire card
              backgroundPosition: 'center',  // Center the background image
              backgroundRepeat: 'no-repeat',  // Prevent background repetition
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              <h3
                className={`text-lg md:text-xl font-bold uppercase ${card.textColor}`}
              >
                {card.description}
              </h3>
              <h2
                className={`text-3xl md:text-4xl font-bold mt-2 ${card.textColor}`}
              >
                {card.title}
              </h2>

              {/* Discount Badge */}
              {card.discount && (
                <div className="mt-4 text-xl font-bold bg-white text-black inline-block px-3 py-1 rounded">
                  {card.discount}
                </div>
              )}

              {/* Offer */}
              {card.offer && (
                <div className="mt-4 text-lg font-bold italic">
                  {card.offer}
                </div>
              )}
            </div>

            {/* Main Image (Burger or Pizza) */}
            <div
              className={`absolute bottom-0 right-0 transform transition-transform duration-300 hover:scale-110 ${
                card.title.toLowerCase().includes('pizza') ? 'w-48 h-48 md:w-64 md:h-64' : 'w-40 h-40 md:w-48 md:h-48'
              }`} // Conditional scaling based on the title (Pizza vs Burger)
            >
              <img
                src={card.mainImage}
                alt="Food Item"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerbox;
