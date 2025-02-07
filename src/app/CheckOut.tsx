"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AboveFooter from "./AboveFooter";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setIsHydrated(true);
    setIsClient(true); // Set client-side flag after hydration
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    }
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setShowPopup(true); // Show the popup when "Confirm Order" is clicked
  };

  const handlePopupResponse = (response: string) => {
    if (response === "yes") {
      window.location.href = "/Review";  // Imperative navigation to the review page
    }
    setShowPopup(false); // Close the popup in both cases
  };

  if (!isHydrated || !isClient) return null; // Prevent rendering on server-side

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          className="object-cover blur-sm"
          src="/img13.jpeg"
          alt="Wide Image"
          layout="fill"
          priority={true}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          {/* Logo Image */}
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/img35.png"
              alt="Logo"
              layout="fill"
              className="object-contain rounded-full"
            />
          </div>
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-4">Check Out</h1>
          {/* Navigation Text with Arrow */}
          <div className="flex items-center space-x-2 mb-10 font-semibold font-serif text-lg mt-7">
            Almost There! Now Wrap It Up and Get Your Items on the Way!
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="flex flex-wrap gap-12 py-16 px-16">
        {/* Left Section: Cart Items Summary */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-[36px] font-[600] mb-6">Your Cart Items</h2>
          <div>
            {cartItems.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="mb-4 p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={item.image || "/placeholder.jpg"}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <p className="ml-4 text-lg">{item.name}</p>
                    </div>
                    <p className="text-lg">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary - Moved under Cart Items */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleConfirmOrder} // Trigger popup
            >
              Confirm Order
            </button>
          </div>
        </div>

        {/* Right Section: Billing Details */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-[36px] font-[600] mb-6">Billing Details</h2>
          <form className="space-y-6">
            {/* Form Fields */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border p-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border p-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="mb-2 font-semibold">
                Address
              </label>
              <textarea
                id="address"
                className="border p-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your address"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg transform transition-all duration-300 ease-out scale-105">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Before Checking Out
            </h3>
            <p className="text-center text-lg mb-6">
              Would you like to review our website and the products? Your thoughts
              mean a lot to us and help us improve for a better future.
            </p>
            <div className="flex justify-center gap-6">
              <button
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handlePopupResponse("yes")}
              >
                Yes, Sure
              </button>
              <button
                className="bg-gray-400 text-white px-8 py-3 rounded-full hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handlePopupResponse("no")}
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <AboveFooter />
    </div>
  );
};

export default CheckoutPage;
