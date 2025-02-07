import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineDotsHorizontal, HiOutlineViewGrid } from "react-icons/hi";
import Link from "next/link";

const Product = () => {

  
  return (
    <div>
      {/* Half-Height Image with Overlay Content */}
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
          <h1 className="text-5xl font-bold mb-4">Shop</h1>

          {/* Navigation Block */}
      

          <Link href="/">
            <button className="bg-white text-black px-2 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* New Section Below Image */}
      <div className="relative w-full bg-[#FAF4F4] py-3 px-6 mt-10 flex items-center justify-between">
        {/* Filter Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <HiOutlineDotsHorizontal className="text-2xl" />
            <span className="text-lg font-semibold ml-5">Filter</span>
          </div>
          <HiOutlineViewGrid className="text-2xl" />
          <FaXmark className="text-2xl" />
        </div>
        <nav className="border-l-2 border-gray-300 absolute top-[-40px] left-48 h-10 mt-12 ml-7">
          <div className="text-base font-normal ml-5 mt-2">
            Showing 1–16 of 32 results
          </div>
        </nav>

        {/* Right-Aligned Section */}
        <div className="flex items-center space-x-4">
          {/* Default Text */}
          <div className="flex items-center justify-center text-base font-normal">
            Show
          </div>

          {/* Square Box for Number */}
          <div className="flex items-center justify-center w-8 h-8 bg-white border ">
            <span className="text-lg font-normal text-[#9F9F9F]">16</span>
          </div>

          {/* Rectangular Box for Text */}
          <div className="flex items-center justify-center text-base font-normal">
            Short By
          </div>

          <div className="flex items-center justify-center px-4 py-2 h-8  bg-white border ">
            <span className="text-lg font-normal text-[#9F9F9F]">Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
