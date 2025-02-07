"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AboveFooter from "../AboveFooter";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ReviewProps {
  setCurrentPage: (page: string) => void;
}
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // optional
}

const Review: React.FC<ReviewProps> = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [reviews, setReviews] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState({
    websiteFeedback: "",
    featureImprovement: "",
    recommendation: "",
    experienceSuggestions: "",
    navigationFeedback: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // To handle error messages
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      setCartItems(JSON.parse(storedCart) as CartItem[]);
    }
  }, []);
  

  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleReviewChange = (productId: string, review: string) => {
    setReviews((prev) => ({
      ...prev,
      [productId]: review,
    }));

    // Reset the error message when user starts typing
    if (review.trim() !== "") {
      setErrorMessage(null);
    }
  };

  const handleReviewSubmit = (productId: string) => {
    if (reviews[productId].trim() === "") {
      setErrorMessage("Please enter a review before submitting.");
    } else {
      alert(`Review for ${productId}: ${reviews[productId]}`);
      // Optionally save the review to localStorage or a backend
      setErrorMessage(null); // Reset error message after successful submission
    }
  };

  const handleReviewClose = (productId: string) => {
    setReviews((prev) => {
      const newReviews = { ...prev };
      delete newReviews[productId];
      return newReviews;
    });
  };

  const handleFeedbackChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: string
  ) => {
    setFeedback((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleFeedbackSubmit = () => {
    alert("Feedback Submitted!");
    // Optionally handle feedback submission (e.g., store or send to a backend)
  };

  if (!isHydrated) return null;

  return (
    <div className="min-h-screen w-full bg-gray-100">
       <Navbar
  setCurrentPage={() => console.log('setCurrentPage called')}
  likedProducts={[]} // or some other default value
  setLikedProducts={(products) => console.log('setLikedProducts called', products)}
/>
      {/* Image Section */}
      <div className="relative w-full h-[40vh]">
        <Image
          className="object-cover blur-sm"
          src="/img13.jpeg"
          alt="Wide Image"
          layout="fill"
          priority={true}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          <h1 className="text-5xl font-bold mb-4">Review Your Order</h1>
          <p className="text-lg mb-8">Here is a quick look at your cart.</p>
        </div>
      </div>

      <div className="px-16 py-16 flex">
        {/* Left Section - Cart Items Section */}
        <div className="flex-1 mr-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Items in Your Cart</h2>
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                <div className="flex flex-col space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col bg-white p-4 rounded-lg shadow-md w-full max-w-[400px]"
                    >
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image || "/placeholder.jpg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="rounded-md object-contain"
                        />
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-lg font-semibold mt-2">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Review Your Thoughts Section */}
                      <div className="mt-4">
                        <button
                          onClick={() =>
                            handleReviewChange(item.id, reviews[item.id] || "")
                          }
                          className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition"
                        >
                          Review Your Thoughts
                        </button>

                       {/* Textarea & Submit Button */}
{reviews[item.id] !== undefined && (
  <div className="mt-2">
    <textarea
      placeholder="Write your thoughts here..."
      value={reviews[item.id]}
      onChange={(e) =>
        handleReviewChange(item.id, e.target.value)
      }
      className="w-full p-2 border rounded-md mb-2"
    />
    {errorMessage && (
      <p className="text-red-500 text-sm mt-1">
        {errorMessage}
      </p>
    )}
    <div className="flex justify-between mt-2">
      <button
        onClick={() => handleReviewSubmit(item.id)}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        disabled={reviews[item.id].trim() === ""}
      >
        Submit Review
      </button>
      <button
        onClick={() => handleReviewClose(item.id)}
        className="text-red-600 hover:underline"
      >
        Close
      </button>
    </div>
  </div>
)}

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className=" p-4 rounded-lg mt-8">
              <div className="flex justify-between items-center">
                <button
                  className="bg-slate-300 text-black py-2 px-4 rounded-lg hover:bg-slate-400 transition"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Feedback Questions */}
        <div className="w-[300px] flex-none m-20 mt-6">
          <div className="space-y-9">
            <h2 className="text-2xl font-bold">Tell Us About Our Website</h2>
            <div>
              <label className="block text-lg font-medium">
                📝 How did you like our website?
              </label>
              <textarea
                value={feedback.websiteFeedback}
                onChange={(e) => handleFeedbackChange(e, "websiteFeedback")}
                placeholder="Your thoughts..."
                className="w-full p-2 border rounded-md mt-2"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">
                🌐 What features do you think we should improve?
              </label>
              <textarea
                value={feedback.featureImprovement}
                onChange={(e) => handleFeedbackChange(e, "featureImprovement")}
                placeholder="Your suggestions..."
                className="w-full p-2 border rounded-md mt-2"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">
                👍 Would you recommend us to others? Why?
              </label>
              <textarea
                value={feedback.recommendation}
                onChange={(e) => handleFeedbackChange(e, "recommendation")}
                placeholder="Your opinion..."
                className="w-full p-2 border rounded-md mt-2"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">
                🚀 Any suggestions for making the shopping experience better?
              </label>
              <textarea
                value={feedback.experienceSuggestions}
                onChange={(e) =>
                  handleFeedbackChange(e, "experienceSuggestions")
                }
                placeholder="Your ideas..."
                className="w-full p-2 border rounded-md mt-2"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">
                🔍 Was it easy to navigate and find what you wanted?
              </label>
              <textarea
                value={feedback.navigationFeedback}
                onChange={(e) => handleFeedbackChange(e, "navigationFeedback")}
                placeholder="Your thoughts on navigation..."
                className="w-full p-2 border rounded-md mt-2"
              />
            </div>

            <div className="flex flex-col mt-8 w-full max-w-[400px] mx-auto">
              {/* Submit Feedback Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleFeedbackSubmit}
                  className="bg-slate-300 text-black py-2 px-4 rounded-lg hover:bg-slate-400 transition"
                >
                  Submit Feedback
                </button>
              </div>

              {/* Proceed to Checkout Button and Total Price Section */}

              {/* Total Price Section */}
              <div className="flex items-center m-6 bg-slate-300 rounded-md hover:bg-slate-400 transition">
                <h3 className="text-xl font-semibold mr-2 hover:underline">
                  Total Price:
                </h3>
                <div className="text-lg font-semibold">
                  ${totalCartPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboveFooter />
      <Footer setCurrentPage={(page: string) => console.log(page)} />
            </div>
  );
};

export default Review;
