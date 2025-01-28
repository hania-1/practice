import React from 'react';
import Image from 'next/image';
import { CiCalendarDate } from 'react-icons/ci';
import { LuClock5 } from 'react-icons/lu';

const Fifth = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#FFFF] flex justify-center m-20 text-3xl font-semibold">Our Blogs</div>
      <p className="text-[#9F9F9F] flex justify-center mt-10">
        Find a bright ideal to suit your taste with our great selection
      </p>

      {/* Images Section */}
      <div className="flex justify-center gap-8 mt-10">
        {/* Blog Card 1 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover rounded-xl"
            src="/img9.jpeg"
            alt="Blog Image 1"
            width={300}
            height={200}
          />
          <div className="text-center mt-4 text-xl font-semibold">Going all-in with millennial design</div>
          <div className="text-center mt-2 text-black font-semibold cursor-pointer">Read More</div>
          <hr className="border-black w-20 mx-auto mt-2 border-2" />
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <LuClock5 />
            <span>5 min</span>
            <CiCalendarDate />
            <span>21st Oct 2020</span>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover rounded-xl"
            src="/img10.jpeg"
            alt="Blog Image 2"
            width={300}
            height={200}
          />
          <div className="text-center mt-4 text-xl font-semibold">Going all-in with millennial design</div>
          <div className="text-center mt-2 text-black font-semibold cursor-pointer">Read More</div>
          <hr className="border-black w-20 mx-auto mt-2 border-2" />
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <LuClock5 />
            <span>5 min</span>
            <CiCalendarDate />
            <span>21st Oct 2020</span>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col items-center">
          <Image
            className="object-cover rounded-xl"
            src="/img11.jpeg"
            alt="Blog Image 3"
            width={300}
            height={200}
          />
          <div className="text-center mt-4 text-xl font-semibold">Going all-in with millennial design</div>
          <div className="text-center mt-2 text-black font-semibold cursor-pointer">Read More</div>
          <hr className="border-black w-20 mx-auto mt-2 border-2" />
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <LuClock5 />
            <span>5 min</span>
            <CiCalendarDate />
            <span>21st Oct 2020</span>
          </div>
        </div>
      </div>

      {/* View More Section */}
      <div className="m-20">
        
      </div>
    </div>
  );
};

export default Fifth;
