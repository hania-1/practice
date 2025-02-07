import React from "react";
import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
import AboveFooter from "./AboveFooter";


const MyAccount = () => { 
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
          <h1 className="text-5xl font-bold mb-4">My Account</h1>
        </div>
      </div>

      {/* Login & Register Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32">
        <div className="flex flex-wrap justify-center md:justify-evenly gap-12">
          {/* Log In Form */}
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h2 className="text-[36px] font-[600] mb-8">Log In</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-4 text-[16px] font-normal "
                >
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full border rounded-md p-5 text-[16px] font-normal hover:bg-slate-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-4 text-[16px] font-normal"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border rounded-md p-5 text-[16px] font-normal hover:bg-slate-200"
                />
              </div>
              <div className="flex items-center space-x-2 ">
                <input type="checkbox" id="remember" className="w-4 h-4 " />
                <label htmlFor="remember" className="text-[16px] ">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <button className="hover:bg-gray-300 w-full md:w-[212px] h-[64px] bg-white text-black border  text-[20px] font-400 py-3 rounded-[15px]">
                  Log In
                </button>
                <p className="text-[16px] text-center mt-3 md:mt-0">
                  <a href="#" className="text-gray-500">
                    Lost Your Password?
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h2 className="text-[36px] font-[600] mb-8 ">Register</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-4 text-[16px] font-normal "
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border rounded-md p-5 text-[16px] font-normal hover:bg-slate-200"
                />
              </div>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                Personal data will be used to support your experience throughout
                this website and for other purposes described in our{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy.
                </a>
              </p>
              <button className="hover:bg-gray-300 w-full md:w-[212px] h-[64px] bg-white text-black border text-[20px] font-400 py-3 rounded-[15px]">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <AboveFooter />
    </div>
    
  );
};

export default MyAccount;