import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react'

const Offerbanner = () => {



    // useEffect(() => {
    //     axios.get('http://localhost:3000/Offerbox')  // Make sure this endpoint is correct
    //         .then((response) => {
    //             Offerbanner(response.data); // Store the data in state
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching food items:", error);
    //         });
    // }, []); // Empty dependency array to fetch data only once

    return (
        <div>
            <section
                className="relative bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/main-bg.jpg")' }}
            >
               <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between pt-8 pb-16 relative z-10">
            <div className="w-full lg:w-1/2">
              <p className="text-2xl text-red-500 font-barlow font-medium ">
                Crispy, every bite taste
              </p>
              <h1 className="text-8xl font-bold font-barlow text-white mb-6 leading-tight">
                Delicious <br /> <span className="text-red-500">Fried Chicken</span>
              </h1>
              <div>
                <a
                  href="/order"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-4 rounded-md flex items-center transition-all"
                >
                  <h1 className="font-bold text-xl ml-2 "> <FontAwesomeIcon icon={faTruck} /> Order Now</h1>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative animate__animated animate__fadeInUp">
                <img
                  src="/images/grilled.png"
                  alt="Fried Chicken"
                  className="max-w-full mx-auto z-10"
                />
              </div>
            </div>
          </div>
        </div>



            </section>
        </div>
    )
}

export default Offerbanner
