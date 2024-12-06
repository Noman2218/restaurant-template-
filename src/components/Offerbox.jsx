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
    <div className="flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
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
            }}
          >
            {/* Left Half: Text or Image */}
            <div className="w-1/2 flex flex-col  justify-center items-start z-10 p-4">
              {/* If `card.description` is not text, you can replace it with another image */}
              {card.description ? (
                <h3 className={`text-lg md:text-xl font-bold uppercase ${card.textColor}`}>
                  {card.description}
                </h3>
              ) : (
                <img src="path-to-description-image.png " alt="Description" className="w-full h-auto" />
              )}
              <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${card.textColor}`}>
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
