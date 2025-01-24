import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import AboveFooter from "./AboveFooter";


const CheckoutPage = () => {
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
          <div className="flex items-center space-x-2 mb-10">
            <Link href="/" passHref>
              <span className="text-1xl font-semibold cursor-pointer">
                Home
              </span>
            </Link>
            <IoIosArrowForward />
            <span className="text-1xl font-normal">Check Out</span>
          </div>
        </div>
      </div>


      {/* Billing Details */}
      <div className="flex flex-wrap gap-12 py-16 px-16">
        {/* Left Section: Billing Details */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-[36px] font-[600] mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-[16px] font-normal"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-1 hover:bg-gray-200" 
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-[16px] font-normal hover:cursor-help"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-[16px] font-normal"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-[16px] font-normal hover:cursor-help"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-full border rounded-md p-4 text-[16px] bg-white"
              >
                <option value="">Select a country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="united-states">United States</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="singapore">Singapore</option>
                <option value="new-zealand">New Zealand</option>
                <option value="south-africa">South Africa</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block mb-2 text-[16px] font-normal "
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="city"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Town / City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="province"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Province
                </label>
                <input
                  id="province"
                  type="text"
                  className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-[16px] font-normal"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-[16px] font-normal"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[16px] font-normal"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded-md p-4 text-[16px] hover:cursor-help hover:bg-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block mb-2 text-[16px] font-normal"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                className="w-full border rounded-md p-4 text-[16px] hover:bg-gray-200"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Section: Order Details */}
        <div className="flex-1 min-w-[300px] p-2 rounded-md">
          <h2 className="text-[32px] font-[600] mb-9">Product</h2>
          <div className="mb-8 text-[16px]">
            <div className="flex justify-between mb-4">
              <p className="text-gray-400">Angora Sofa x 1</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Subtotal</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between text-gray-800 font-semibold mb-6">
              <p>Total</p>
              <p className="text-[24px] font-700 text-[#B88E2F]">Rs. 250,000</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-[14px] text-gray-500 ml-6">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
            <p className="text-[14px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="hover:bg-gray-200 w-[318px] bg-white text-black border-2 border-black rounded-md text-[20px] font-medium py-4 mt-6">
              Place Order
            </button>
          </div>
        </div>
      </div>

      <AboveFooter />
    </div>

  );
};

export default CheckoutPage;