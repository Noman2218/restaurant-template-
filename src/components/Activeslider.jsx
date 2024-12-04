import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Foodcard from "./Foodcard";
import axios from 'axios';

const Activeslider = () => {
  const [foodItems, setFoodItems] = useState([]); // State for storing food items

  // Fetching data from the server
  useEffect(() => {
    axios.get('http://localhost:3000/foodItems')
      .then((response) => {
        setFoodItems(response.data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
      });
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <div className='container mt-12'>
        <p className='ml-12 sm:ml-24 md:ml-48 font-barlow font-bold text-red-600 text-xl sm:text-2xl md:text-3xl'>
          CRISPY, EVERY BITE TASTE
        </p>
        <h1 className="ml-12 sm:ml-24 md:ml-48 mt-3 mb-6 text-4xl sm:text-5xl md:text-6xl font-barlow font-bold text-black">
          Popular Food Items
        </h1>
      </div>

      {/* Slider Section */}
      <div className="container flex mx-auto py-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {foodItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Foodcard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Activeslider;
