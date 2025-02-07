"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoTrash,  } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboveFooter from "../AboveFooter";
type ProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  size: string;
  rating: number;
  category: string;
  stock: number;
  discount: number; // Percentage discount
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<ProductType[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleAddToCart = (product: ProductType) => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    // Check if the product is already in the cart
    const isProductInCart = cart.some((item: ProductType) => item.id === product.id);

    if (isProductInCart) {
      // Show notification if the product is already in the cart
      setNotification(`${product.name} is already in your cart!`);
      setTimeout(() => setNotification(null), 2000); // Hide after 3 seconds
      return;
    }

    // Add product to the cart if it's not already there
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="relative">
      <Navbar
  setCurrentPage={() => console.log('setCurrentPage called')}
  likedProducts={[]} // or some other default value
  setLikedProducts={(products) => console.log('setLikedProducts called', products)}
/>
      {/* Header Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          className="object-cover blur-sm"
          src="/img13.jpeg"
          alt="Wide Image"
          layout="fill"
          priority={true}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-start text-black pt-16">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/img35.png"
              alt="Logo"
              layout="fill"
              className="object-contain rounded-full"
            />
            
          </div>
          <h1 className="text-5xl font-bold mb-4">Wishlist</h1>
          {/* Navigation Block with Home Icon and Quote */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center space-x-2">
              <Link href="/Shop" passHref>
              
                <div className="flex items-center cursor-pointer">
                  <FaShoppingBag size={24}  className="mr-1" />
                  <span className="text-xl font-semibold"></span>
                </div>
              </Link>
              <IoIosArrowForward />
              <span className="text-xl font-normal">Back to Shop</span>
            </div>
            <div className="mt-4 text-xl font-semibold text-black">
              Your Wishlist, Your Favorites – Save the items you love!
            </div>
          </div>
        </div>
      </div>

      {/* Notification Section */}
      {notification && (
        <div className="fixed top-4 right-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
          {notification}
        </div>
      )}

      {/* Wishlist Section */}
      <h1 className="text-2xl font-bold mb-6 font-mono text-gray-600 text-center mt-4">
        My Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center m-5">Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {wishlist.map((product) => (
  <div
    key={product.id}
    className="bg-white p-6 rounded-lg shadow-md relative min-h-[450px] flex flex-col items-center m-10"
  >
    {/* Discount Badge */}
    {product.discount > 0 && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        {product.discount}% Off
      </span>
    )}

    {/* Product Image */}
    <Image
      src={product.image || "/placeholder.jpg"}
      alt={`Image of ${product.name}`}
      width={150}
      height={150}
      className="object-cover rounded-md mx-auto"
    />

    {/* Product Details */}
    <h3 className="text-lg font-semibold mt-3 text-center">{product.name}</h3>
    <p className="text-gray-600 text-center text-sm">{product.description}</p>
    <p className="text-base font-semibold text-center">Price: ${product.price.toFixed(2)}</p>
    <p className="text-sm text-center text-gray-500">Category: {product.category}</p>
    <p className="text-sm text-yellow-500 text-center">Rating: {product.rating} ⭐</p>

    {/* Buttons */}
    <div className="flex justify-center space-x-6 mt-6">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => handleRemoveFromWishlist(product.id)}
      >
        <IoTrash className="inline-block mr-1" />
        Remove
      </button>
              </div>
            </div>
          ))}
        </div>
        
      )}
      <AboveFooter />
<Footer setCurrentPage={(page) => console.log(page)} />    </div>
    
  );
};

export default Wishlist;
