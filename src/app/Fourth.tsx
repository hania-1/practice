import React from 'react'
import Image from 'next/image'

const Fourth = () => {
  return (
    <div>
      <div className='relative bg-[#FFF9E5]'>
        <Image
          className="object-cover rounded-xl"
          src="/img8.png"
          alt="Trenton modular sofa"
          width={800} // Increased size
          height={380} // Adjusted height for consistent ratio
          priority={true}
        />

        {/* Text and Box on the Right */}
        <div className="absolute top-20 right-6 text-black m-32 "> {/* Adjusted the right value */}
          {/* New Arrivals Text */}
          <div className="text-1xl font-semibold mr-44 ">New Arrivals</div>

          {/* Asgaard Sofa Text */}
          <p className="mt-4 text-5xl font-semibold text-center ">Asgaard sofa</p>

          {/* Order Now Rectangular Box with Border */}
          <div className="mt-4 border-2 border-black w-32 h-10 flex items-center justify-center mr-44 hover:bg-black hover:text-white">
            Order Now
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fourth
