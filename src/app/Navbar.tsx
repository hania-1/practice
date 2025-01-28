'use client';

import React, { useState, useEffect } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { CiLight } from 'react-icons/ci';
import { SiDarkreader } from 'react-icons/si';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton), { ssr: false });
const SignInButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignInButton), { ssr: false });

type Product = {
  id: string;
  name: string;
  price: number;
};

type NavbarProps = {
  setCurrentPage: (page: string) => void;
  likedProducts: Product[];
  setLikedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, likedProducts = [] }) => {
  const [isCartPopupVisible, setCartPopupVisible] = useState(false);
  const [isWishlistPopupVisible, setWishlistPopupVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Sync dark mode state with initial DOM state
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const handleCartClick = () => setCartPopupVisible(!isCartPopupVisible);
  const handleWishlistClick = () => setWishlistPopupVisible(!isWishlistPopupVisible);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="hidden md:flex justify-between font-poppins relative bg-[#FBEBB5] dark:bg-gray-800 ">
      {/* Left Side - SignIn or User Button */}
      <div className="flex items-center space-x-4 ml-10 mt-10 m-4">
        <SignInButton />
        <UserButton />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-10 justify-center mt-10 m-4">
        {['home', 'shop', 'About', 'Contact', 'Blog'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="font-normal text-xl text-black dark:text-white"
          >
            {page.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-2 mr-10 mt-10 m-4">
        <div onClick={() => setCurrentPage('MyAccount')} className="p-1 rounded-md cursor-pointer">
          <BsPersonCircle className="w-[23.33px] h-[18.67px] text-black dark:text-white" />
        </div>

        <div className="p-1 rounded-md">
          <PiMagnifyingGlassLight className="w-[22.17px] h-[22.17px] text-black dark:text-white" />
        </div>

        <div onClick={handleWishlistClick} className="p-1 rounded-md cursor-pointer relative">
          <IoHeartOutline className="w-[23.33px] h-[20.81px] text-black dark:text-white" />
          {likedProducts.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {likedProducts.length}
            </span>
          )}
        </div>

        <div onClick={handleCartClick} className="p-1 rounded-md cursor-pointer">
          <MdOutlineShoppingCart className="w-[24.53px] h-[22.06px] text-black dark:text-white" />
        </div>

        <div onClick={toggleDarkMode} className="p-1 rounded-md cursor-pointer">
          {isDarkMode ? (
            <CiLight className="w-[24px] h-[24px] text-white" />
          ) : (
            <SiDarkreader className="w-[24px] h-[24px] text-black" />
          )}
        </div>
      </div>

      {/* Cart Popup */}
      {typeof window !== 'undefined' && isCartPopupVisible && (
        <div className="absolute top-20 right-10 bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg z-50 w-[300px]">
          <button
            onClick={() => setCartPopupVisible(false)}
            className="absolute top-2 right-2 text-xl font-semibold text-gray-600 dark:text-gray-400"
          >
            &times;
          </button>
          <h1 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">
            Shopping Cart
          </h1>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage('Cart')}
              className="w-full py-2 px-4 bg-[#FBEBB5] dark:bg-gray-700 rounded-md text-lg text-black dark:text-white"
            >
              View Cart
            </button>
            <button
              onClick={() => setCurrentPage('CheckOut')}
              className="w-full py-2 px-4 bg-black text-white rounded-md text-lg ml-2"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Wishlist Popup */}
      {typeof window !== 'undefined' && isWishlistPopupVisible && (
        <div className="absolute top-20 right-10 bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg z-50 w-[300px]">
          <button
            onClick={() => setWishlistPopupVisible(false)}
            className="absolute top-2 right-2 text-xl font-semibold text-gray-600 dark:text-gray-400"
          >
            &times;
          </button>
          <h1 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">
            Wishlist
          </h1>
          <button
            onClick={() => router.push('/Wishlist')}
            className="w-full py-2 px-4 bg-[#FBEBB5] dark:bg-gray-700 rounded-md text-lg text-black dark:text-white mt-4"
          >
            View Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
