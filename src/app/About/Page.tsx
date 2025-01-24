import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import AboveFooter from "../AboveFooter";

const page = () => {
  return (
    <div>
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
          <h1 className="text-5xl font-bold mb-4">About Us</h1>

          {/* Navigation Text with Arrow */}
          <div className="flex items-center space-x-2 mb-10">
            <Link href="/" passHref>
              <span className="text-xl font-semibold cursor-pointer">
                Home
              </span>
            </Link>
            <IoIosArrowForward />
            <span className="text-xl font-normal">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section with Details */}
      <div className="px-6 py-16 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-center mb-6">
            We are a passionate team committed to providing exceptional service and quality. Our goal is to make your experience with us seamless and memorable, whether you are here for shopping, information, or just browsing.
          </p>

          {/* Our Vision */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-lg">
              Our vision is to be the leading provider of innovative products and services that make a difference in the lives of our customers. We strive to create an environment where you feel at home, and we continuously improve our offerings to meet your needs.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">Customer Satisfaction: We prioritize our customers above all else.</li>
              <li className="text-lg">Innovation: We embrace creativity and constantly strive to improve.</li>
              <li className="text-lg">Integrity: We believe in transparency, honesty, and ethical practices.</li>
              <li className="text-lg">Quality: We are committed to delivering only the best products and services.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Want to Learn More?</h3>
            <p className="text-lg mb-6">
              We’d love to hear from you! Whether you have questions or feedback, feel free to reach out to us. Our team is always here to help.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <AboveFooter />
    </div>
  );
};

export default page;
