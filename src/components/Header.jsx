import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faSearch,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faVimeoV, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header >
      <div className=" py-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li><span className='font-bold text-red-600' >100%</span> Secure delivery without contacting the courier</li>
            <li><FontAwesomeIcon className='text-red-600' icon={faTruck} /> Track Your Order</li>
          </ul>
          <div className="flex space-x-4">
            <div className="relative">
              <button className="text-white"><FontAwesomeIcon className="text-black" icon={faSearch} /></button>
              <input className="pl-10 py-1 px-4 rounded-md border border-gray-300" placeholder="Search" aria-label="Search" />
            </div>
            <div className="  flex space-x-4">
              <a href="#" className="text-black"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-black"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-black"><FontAwesomeIcon icon={faVimeoV} /></a>
              <a href="#" className="text-black"><FontAwesomeIcon icon={faPinterestP} /></a>
            </div>
          </div>
        </div>
      </div>
<div className='bg-black w-full h-0.5 opacity-50 ' ></div>
      <div id="header-sticky" className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.svg" alt="logo-img" className="h-12" />
            </a>
          </div>
          <div className="flex space-x-6">
            <nav>
              <ul className="flex space-x-4">
                <li className="relative">
                  <a href="/" className="flex items-center space-x-2">
                    <span>Home Page</span>
                  </a>
                  <ul className="absolute left-0 bg-white shadow-lg mt-2 hidden">
                    <li>
                      <div className="flex space-x-4">
                        <div className="w-1/3">
                          <div className="relative">
                            <img src="assets/img/header/home-1.jpg" alt="img" className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-center">
                              <a href="/" className="theme-btn">View Demo</a>
                            </div>
                          </div>
                          <h4 className="text-center py-2">
                            <a href="/">Home 01</a>
                          </h4>
                        </div>
                        <div className="w-1/3">
                          <div className="relative">
                            <img src="assets/img/header/home-2.jpg" alt="img" className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-center">
                              <a href="index-2" className="theme-btn">View Demo</a>
                            </div>
                          </div>
                          <h4 className="text-center py-2">
                            <a href="index-2">Home 02</a>
                          </h4>
                        </div>
                        <div className="w-1/3">
                          <div className="relative">
                            <img src="assets/img/header/home-3.jpg" alt="img" className="w-full h-auto" />
                            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-center">
                              <a href="index-3" className="theme-btn">View Demo</a>
                            </div>
                          </div>
                          <h4 className="text-center py-2">
                            <a href="index-3">Home 03</a>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="relative">
                  <a href="shop" className="flex items-center space-x-2">
                    <span>Shop</span>
                  </a>
                </li>
                <li className="relative">
                  <a href="news" className="flex items-center space-x-2">
                    <span>Blog</span>
                
                  </a>
                  <ul className="absolute left-0 bg-white shadow-lg mt-2 hidden">
                    <li><a href="news" className="block py-2 px-4">Blog</a></li>
                    <li><a href="news-details" className="block py-2 px-4">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="contact" className="text-gray-800">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="flex space-x-6 items-center">
            <div className= "relative">
              <a href="shop-cart" className="cart-icon"><FontAwesomeIcon icon={faShoppingBasket} className="text-gray-800" /></a>
            </div>
            <div className="header-button">
              <a href="contact" className="theme-btn bg-red-500">Contact Us</a>
            </div>
            <div className="header__hamburger d-xl-block">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
