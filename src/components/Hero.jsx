import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative  text-white">
      {/* Bottom Rounded Curve */}
      <div className="w-full mx-auto py-4 px-2 min-h-screen overflow-hidden bg-[#232323] rounded-b-[100px] herobgimage relative">
        <div className="max-w-[1340px] md:mt-20 mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="max-w-[920px] md:text-7xl text-5xl py-8 px-3 text-center font-bold text-balance tracking-tight ">
              Transform Your Crypto Trading With{" "}
              <span className="text-green-500">PERPBOT</span>
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <button className="rounded-2xl py-3 px-2 m-3 bg-[#c7eb03] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-xl text-[#262722] text-center  shadow-[#c7eb03]">
              Join the P2B
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <p>In association with</p>
          </div>

          <div className="flex items-center justify-center gap-5 text-xl ">
            <Image src="/dydx.svg" width={100} height={100} alt="dydx" />
            <div>
              <Image
                src="/hegic.png"
                width={100}
                height={100}
                alt="hegic"
                className="h-30 w-[130px]"
              />
            </div>
          </div>
         
          <div className="flex items-center justify-center overflow-hidden">
        <Image src="/mk.png" width={1000} height={100} alt="/" />
        <div className="footer-gradient"></div>
        </div>
        
        </div>
       
      
      
       
      </div>
    </section>
  );
};

export default Hero;
