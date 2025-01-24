import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { SiDarkreader } from "react-icons/si";
import { useRouter } from "next/navigation";

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

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, likedProducts = [], setLikedProducts }) => {
  const [isCartPopupVisible, setCartPopupVisible] = useState(false);
  const [isWishlistPopupVisible, setWishlistPopupVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const router = useRouter();

  const handleCartClick = () => setCartPopupVisible(!isCartPopupVisible);
  const handleWishlistClick = () => setWishlistPopupVisible(!isWishlistPopupVisible);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle dark mode class
  };

  // Temporary usage to prevent unused variable error
  console.log(setLikedProducts);

  return (
    <div className="hidden md:flex justify-center font-poppins relative bg-[#FBEBB5] dark:bg-gray-800">
      {/* Navigation Links */}
      {["home", "shop", "About", "Contact", "Blog"].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className="font-normal text-xl gap-10 m-10 text-black dark:text-white"
        >
          {page.toUpperCase()}
        </button>
      ))}

      {/* Icons Section */}
      <div onClick={() => setCurrentPage("MyAccount")} className="absolute top-[4.67px] right-[170px] p-1 rounded-md m-7 cursor-pointer">
        <BsPersonCircle className="w-[23.33px] h-[18.67px] text-black dark:text-white" />
      </div>

      <div className="absolute top-[2.33px] right-[130px] p-1 rounded-md m-7">
        <PiMagnifyingGlassLight className="w-[22.17px] h-[22.17px] text-black dark:text-white" />
      </div>

      <div onClick={handleWishlistClick} className="absolute top-[3.5px] right-[90px] p-1 rounded-md m-7 cursor-pointer">
        <IoHeartOutline className="w-[23.33px] h-[20.81px] text-black dark:text-white" />
        {likedProducts.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            {likedProducts.length}
          </span>
        )}
      </div>

      <div onClick={handleCartClick} className="absolute top-[3.55px] right-[50px] p-1 rounded-md m-7 cursor-pointer">
        <MdOutlineShoppingCart className="w-[24.53px] h-[22.06px] text-black dark:text-white" />
      </div>

      <div onClick={toggleDarkMode} className="absolute top-[3.55px] right-[10px] p-1 rounded-md m-7 cursor-pointer">
        {isDarkMode ? (
          <CiLight className="w-[24px] h-[24px] text-white" />
        ) : (
          <SiDarkreader className="w-[24px] h-[24px] text-black" />
        )}
      </div>

      {/* Cart Popup */}
      {isCartPopupVisible && (
        <div className="absolute top-20 right-10 bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg z-50 w-[300px]">
          <button onClick={() => setCartPopupVisible(false)} className="absolute top-2 right-2 text-xl font-semibold text-gray-600 dark:text-gray-400">
            &times;
          </button>
          <h1 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">Shopping Cart</h1>
          <div className="flex justify-between mt-4">
            <button onClick={() => setCurrentPage("Cart")} className="w-full py-2 px-4 bg-[#FBEBB5] dark:bg-gray-700 rounded-md text-lg text-black dark:text-white">
              View Cart
            </button>
            <button onClick={() => setCurrentPage("CheckOut")} className="w-full py-2 px-4 bg-black text-white rounded-md text-lg ml-2">
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Wishlist Popup */}
      {isWishlistPopupVisible && (
        <div className="absolute top-20 right-10 bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg z-50 w-[300px]">
          <button onClick={() => setWishlistPopupVisible(false)} className="absolute top-2 right-2 text-xl font-semibold text-gray-600 dark:text-gray-400">
            &times;
          </button>
          <h1 className="text-2xl font-semibold mb-4 text-center text-black dark:text-white">Wishlist</h1>
          <button onClick={() => router.push("/Wishlist")} className="w-full py-2 px-4 bg-[#FBEBB5] dark:bg-gray-700 rounded-md text-lg text-black dark:text-white mt-4">
            View Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
