"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import Link from "next/link";
import AboveFooter from "./AboveFooter";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  const [cartItems, setCartItems] = useState<
    {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }[]
  >([]);
  const [isHydrated, setIsHydrated] = useState(false); // Ensure hydration

  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      setCartItems(cart);
    }
  }, []);

  const handleQuantityChange = (
    id: string,
    action: "increase" | "decrease"
  ) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              action === "increase"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isHydrated) return null; // Prevent rendering until hydrated

  return (
    <>
      <div className="min-h-screen w-full bg-white">
        {/* Image Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center">
          <Image
            className="object-cover blur-sm"
            src="/img13.jpeg"
            alt="Wide Image"
            layout="fill"
            priority={true}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/img35.png"
                alt="Logo"
                layout="fill"
                className="object-contain rounded-full"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Cart</h1>
            <div className="flex items-center space-x-2 mb-10">
              <Link href="/" passHref>
                <span className="text-1xl font-semibold cursor-pointer">
                  Home
                </span>
              </Link>
              <IoIosArrowForward />
              <span className="text-1xl font-normal">Cart</span>
            </div>
          </div>
        </div>

        {/* Main container */}
        <div className="w-full md:w-[1240px] flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mx-auto m-7">
          {/* Left Section */}
          <div className="w-full md:w-[60%] rounded-md p-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 mt-4 items-center bg-white"
                >
                  <div className="w-[106px] h-[106px] rounded-lg bg-[#FBEBB5] flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image?.startsWith("http") ? item.image : "/placeholder.png"}
                      alt={`Image of ${item.name}`}
                      width={106}
                      height={106}
                      className="object-cover rounded-md"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full items-start mr-4 mt-8">
                    <ul className="flex flex-col md:flex-row justify-between w-full gap-2">
                      <li className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                        {item.name}
                      </li>
                      <li className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                        Rs. {item.price}
                      </li>
                      <li className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "decrease")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "increase")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </li>
                      <li className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                        Rs. {item.price * item.quantity}
                      </li>
                    </ul>
                    <div className="mt-2 sm:mt-0">
                      <ImBin2
                        className="text-[#FBEBB5] text-base sm:text-lg md:text-xl cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">
                Your cart is empty!
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[35%] bg-[#FFF9E5] rounded-md p-4 ml-auto mr-4 mt-8">
            <h1 className="text-[24px] text-black text-center">Cart Totals</h1>
            <div className="flex justify-between mt-6 mb-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">
                Rs. {total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-[#FBEBB5] text-black py-2 px-4 rounded-md hover:bg-[#f5e2a0] w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <AboveFooter />
    </>
  );
};

export default Cart;
