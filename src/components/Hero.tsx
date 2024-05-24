//import React from "react";
import HeroPng from "../assets/hero/hero_png.png";
import Sidebar from '../components/Sidebar';
const Hero = () => {

  return (
    <>
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]"> 
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-50% to-transparent"></div>        
        <div className="relative z-10 flex items-center min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
        <Sidebar />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              {/* content section */}
              <div>
                <p className="text-lg text-blue-800 font-semibold">
                  Discover Games You will Love
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Read About Games That You Enjoy
                </h1>
                <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-800 inline-block px-6 py-3 rounded-2xl font-semibold text-white">
                  Start Exploring
                </button>
              </div>

              {/* image section */}
               <div className="relative"> 
                 <img
                  src={HeroPng}
                  alt="Not found"
                  className="w-full sm:scale-125 md:scale-110"
                /> 
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Hero;
