import React from 'react'
import Image from 'next/image'

const Second = () => {
  return (
    <div className="bg-[#FAF4F4] flex items-center justify-center min-h-screen gap-10">
      {/* First Image with Text */}
      <div className="flex flex-col items-center -mt-96">
        <Image
          className="object-contain rounded-xl"
          src="/img2.png"
          alt="Picture of the first author"
          width={605}
          height={562}
          priority={true}
        />
        <div className="mt-[-96px] mr-52 text-3xl font-semibold m-2">Side Table</div>
        <p className='mr-64 hover:text-slate-600'>View More</p>
        <hr className="border-gray-800 border-2 mt-2 w-20 mr-64" />
      </div>

      {/* Second Image with Text */}
      <div className="flex flex-col items-center">
        <Image
          className="object-contain rounded-xl"
          src="/img3.png"
          alt="Picture of the second author"
          width={605}
          height={562}
          priority={true}
        />
        {/* Text below the second image */}
        <div className="mt-4 text-3xl font-semibold">Side Sofa</div>
        <p className='mt-2 hover:text-slate-600'>View More</p>
        <hr className="border-gray-800 border-2 mt-2 w-20" />
      </div>
    </div>
  )
}

export default Second
