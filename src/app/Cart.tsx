"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import AboveFooter from "./AboveFooter";

// Define the CartItem type
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [discount, setDiscount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);

      parsedCart.forEach((item) => {
        if (!item.name) {
          console.warn("Item missing name:", item);
          item.name = "No name available";
        }
      });

      setCartItems(parsedCart);

      setDiscount(
        0.1 * parsedCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      );
    }
  }, []);

  const handleQuantityChange = (id: string, action: "increase" | "decrease") => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
          }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setDiscount(
      0.1 * updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setDiscount(
      0.1 * updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCheckout = () => {
    localStorage.setItem("checkoutData", JSON.stringify(cartItems));
    router.push("/checkout");
  };

  const finalTotal = total - discount;

  if (!isHydrated) return null;


  return (
    <>
     <div className="min-h-screen w-full bg-white">
        <div className="relative w-full h-[60vh] flex items-center justify-center">
          <Image
            className="object-cover blur-sm"
            src="/img13.jpeg"
            alt="Wide Image"
            layout="fill"
            priority
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
            <div className="flex items-center space-x-2 mb-10"></div>
            <div className="text-xl font-semibold text-black -mt-12">
              Your Cart, Your Style – Take a Moment to Review!
            </div>
          </div>
        </div>

        <div className="w-full md:w-[1240px] flex flex-col md:flex-row gap-4 justify-between mx-auto px-5 py-12 mt-10">
          <div className="flex flex-col w-full lg:w-[70%] gap-6">
            {cartItems.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center justify-between bg-white rounded-lg p-5 shadow-lg"
                >
                  <div className="w-1/5 h-20 flex justify-center items-center">
                    <Image
                      src={item.image || "/placeholder.jpg"}
                      alt={`Image of ${item.name}`}
                      width={80}
                      height={80}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="w-3/5">
                    {/* Check if the name is available and provide a fallback */}
                    <h2 className="font-semibold text-lg">{item.name || "No name available"}</h2>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>

                  <div className="w-1/5 flex flex-col items-center">
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="text-sm font-semibold mb-1"
                    >
                      Quantity
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, "decrease")}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, "increase")}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold">Remove</span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 mt-1"
                    >
                      <ImBin2 />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col w-full lg:w-[30%] bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            {/* Discount Price */}
            <div className="flex justify-between mb-4">
              <span>Discount:</span>
              <span className="font-semibold text-green-500">-${discount.toFixed(2)}</span>
            </div>

            {/* Final Total Price */}
            <div className="flex justify-between mb-4 font-semibold">
              <span>Final Total:</span>
              <span className="font-bold text-xl">${finalTotal.toFixed(2)}</span>
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <AboveFooter />
    </>
  );
};

export default Cart;
