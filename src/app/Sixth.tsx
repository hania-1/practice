import React from 'react'
import Image from 'next/image'

const Sixth = () => {
  return (
    <div>
      {/* Half-Height Image with Overlay Content */}
      <div className="relative w-full h-[60vh]">
        {/* Background Image */}
        <Image
          className="object-cover" // Ensures the image scales properly
          src="/img12.jpeg" // Updated image path
          alt="Wide Image"
          layout="fill" // Ensures the image covers the container
          priority={true} // Ensures faster loading for above-the-fold images
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-4">Our Instagram</h1>

          {/* Subtitle */}
          <p className="text-lg mb-6 m-4 text-black">Follow us on Instagram</p>

          {/* Button */}
          <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sixth
