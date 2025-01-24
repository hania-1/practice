import React from 'react';
import Image from 'next/image';
interface ThirdProps {
  setCurrentPage: (page: string) => void;
}

const Third: React.FC<ThirdProps> = ({ setCurrentPage }) => {
  return (
    <div>
      <div className="bg-[#FFFF] flex justify-center m-20 text-3xl font-semibold">
        Top Pickups For You
      </div>
      <p className="text-[#9F9F9F] flex justify-center mt-10">
        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {/* Image 4 */}
        <div className="flex flex-col items-center mt-12 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <Image
            className="object-cover rounded-xl"
            src="/img4.png"
            alt="Trenton modular sofa"
            width={400}
            height={380}
            // priority={true}
          />
          <div className="text-center mt-4">Trenton modular sofa_3</div>
          <div className="text-center text-[#9F9F9F]">Rs. 25,000.00</div>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center mt-32 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <Image
            className="object-cover rounded-xl"
            src="/img5.png"
            alt="Granite dining table"
            width={300}
            height={280}
            // priority={true}
          />
          <div className="text-center mt-4">Granite dining table with dining chair</div>
          <div className="text-center text-[#9F9F9F]">Rs. 25,000.00</div>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center mt-8 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <Image
            className="object-cover rounded-xl"
            src="/img6.png"
            alt="Outdoor bar table"
            width={200}
            height={100}
            // priority={true}
          />
          <div className="text-center mt-4">Outdoor bar table and stool</div>
          <div className="text-center text-[#9F9F9F]">Rs. 25,000.00</div>
        </div>

        {/* Image 7 */}
        <div className="flex flex-col items-center mt-32 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <Image
            className="object-cover rounded-xl"
            src="/img7.png"
            alt="Plain console with teak mirror"
            width={300}
            height={280}
            // priority={true}
          />
          <div className="text-center mt-4">Plain console with teak mirror</div>
          <div className="text-center text-[#9F9F9F]">Rs. 25,000.00</div>
        </div>
      </div>

      <div className="m-20 text-center">
  <button
    onClick={() => setCurrentPage("shop")} // Using setCurrentPage to navigate to the shop page
    className="hover:text-slate-600 m-0"
  >
    View More
  </button>
  <hr className="border-gray-800 border-2 w-20 mx-auto mt-2" />
</div>

    </div>
  );
};

export default Third;
