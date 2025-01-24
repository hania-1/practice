import React from "react";
import Link from "next/link";
import AboveFooter from "./AboveFooter";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
// import Pagination from "../Components/Pagination";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa6";

const page = () => {
  return (
    <>
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
          <h1 className="text-5xl font-bold mb-4">Blog</h1>

          {/* Navigation Text with Arrow */}
          <div className="flex items-center space-x-2 mb-10">
            <Link href="/" passHref>
              <span className="text-1xl font-semibold cursor-pointer">
                Home
              </span>
            </Link>
            <IoIosArrowForward />
            <span className="text-1xl font-normal">Blog</span>
          </div>
        </div>
      </div>

      {/* images section rright side  */}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full items-center justify-center">
          {/* first image  */}
          <div className="flex  mt-24 px-2 sm:pl-36 sm:w-[50%]">
            <div className="w-full  flex flex-col sm:flex-row space-y-6 sm:space-y-0">
              <div className="w-full flex justify-center mb-6 sm:mb-0">
                <Image
                  src={"/img36.png"}
                  alt="pic10"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="px-4 sm:pl-36 mt-7 sm:w-[60%] space-y-4 ">
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <IoPersonSharp />
              <p>Admin</p>
              <SlCalender />
              <p>14 Oct 2022</p>
              <FaTag />
              <p>Wood</p>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Going all-in with millennial design
            </h2>

            <p className="text-gray-600 w-full  text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in.
            </p>

            <p className="text-gray-500 text-lg font-semibold cursor-pointer underline underline-offset-8 transition-transform hover:scale-105 hover:underline">
              Read more
            </p>
          </div>

          {/* 2nd image  */}
          <div className="flex items-start mt-24 px-2 sm:pl-36 sm:w-[50%]">
            <div className="w-full  flex flex-col sm:flex-row space-y-6 sm:space-y-0">
              <div className="w-full flex justify-center mb-6 sm:mb-0">
                <Image
                  src={"/img36.png"}
                  alt="pic10"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="px-4 sm:pl-36 mt-7 sm:w-[60%] space-y-4">
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <IoPersonSharp />
              <p>Admin</p>
              <SlCalender />
              <p>14 Oct 2022</p>
              <FaTag />
              <p>Wood</p>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Going all-in with millennial design
            </h2>

            <p className="text-gray-600 w-full  text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in.
            </p>

            <p className="text-gray-500 text-lg font-semibold cursor-pointer underline underline-offset-8 transition-transform hover:scale-105 hover:underline">
              Read more
            </p>
          </div>

          <div className="flex items-start mt-24 px-2 sm:pl-36 sm:w-[50%]">
            <div className="w-full  flex flex-col sm:flex-row space-y-6 sm:space-y-0">
              <div className="w-full flex justify-center mb-6 sm:mb-0">
                <Image
                  src={"/img36.png"}
                  alt="pic10"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* third image  */}

          <div className=" px-4 sm:pl-36 mt-7 sm:w-[60%] space-y-4">
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <IoPersonSharp />
              <p>Admin</p>
              <SlCalender />
              <p>14 Oct 2022</p>
              <FaTag />
              <p>Wood</p>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Going all-in with millennial design
            </h2>

            <p className="text-gray-600 w-full  text-sm leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in.
            </p>

            <p className="text-gray-500 text-lg font-semibold cursor-pointer underline underline-offset-8 transition-transform hover:scale-105 hover:underline">
              Read more
            </p>
          </div>
        </div>
        {/* left side section  */}

        <div className="sm:w-[40%] mt-20">
          <div className="w-full">
            <div className="bg-white p-6 w-full rounded-lg mb-6 sm:mb-0">
              <div className="flex items-center space-x-2 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full relative px-4 focus:outline-none py-2 border rounded-lg text-sm "
                />
                <FaSearch className="cursor-pointer absolute right-2" />
              </div>
            </div>

            <div className="px-6">
              <p className="text-lg font-semibold mb-6">Categories</p>
              <ul className="text-gray-400 space-y-8">
                <li className="flex justify-between">
                  <span>Crafts</span>
                  <span>2</span>
                </li>
                <li className="flex justify-between">
                  <span>Design</span>
                  <span>8</span>
                </li>
                <li className="flex justify-between">
                  <span>Handmade</span>
                  <span>7</span>
                </li>
                <li className="flex justify-between">
                  <span>Interior</span>
                  <span>1</span>
                </li>
                <li className="flex justify-between">
                  <span>Wood</span>
                  <span>6</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-6">
              {[
                {
                  image: "/img9.jpeg",
                  title: "Going all-in with millennial design",
                  date: "03 Aug 2022",
                  
                },
                {
                  image: "/img30.png",
                  title: "Exploring new ways of decorating",
                  date: "03 Aug 2022",
                },
                {
                  image: "/img34.png",
                  title: "Handmade pieces that took time to make",
                  date: "03 Aug 2022",
                },
                {
                  image: "/img31.png",
                  title: "Modern home in Milan",
                  date: "03 Aug 2022",
                },
                {
                  image: "/img33.png",
                  title: "Colorful office redesign",
                  date: "03 Aug 2022",
                },
              ].map((post, index) => (
                <div key={index} className="flex space-x-3">
                  <Image src={post.image} height={100} width={100} alt="" />
                  <div>
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Pagination Buttons */}
      <div className="flex justify-center items-center mt-14 mb-20">
        <button className="bg-white flex-center items-center justify-center text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
          1
        </button>

        <button className="bg-white flex-center items-center justify-center text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
          2
        </button>

        <button className="bg-white flex-center items-center justify-center text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
          3
        </button>

        <button className="bg-white flex-center items-center justify-center text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Next
        </button>
      </div>

      <div className="mt-10">
        <AboveFooter />
      </div>
    </>
  );
};

export default page;