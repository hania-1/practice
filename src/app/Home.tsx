import React from "react";
import Image from "next/image";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="flex items-center justify-center bg-[#FBEBB5]">
      {/* Text Section */}
      <div className="text-left mb-80 m-20">
        <p className="font-normal text-6xl leading-none">Rocket Single</p>
        <p className="font-normal text-6xl leading-none mt-2">Seater</p>
        <br />
        <div>
          <button
            onClick={() => setCurrentPage("shop")}
            className="font-normal text-2xl leading-none mt-32"
          >
            Shop Now
          </button>
        </div>
        <hr className="border-gray-800 border-2 mt-2 w-28" />
      </div>

      {/* Image Section */}
      <Image
        className="rounded-xl ml-20 -mt-20"
        src="/img1.png"
        alt="Picture of the author"
        width={853}
        height={1000}
      />
    </div>
  );
};

export default Home;
