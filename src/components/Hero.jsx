import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="w-full text-white">
      <div className="w-full mx-auto px-2 min-h-screen overflow-hidden  gradientbg ">
        <Navbar />
        <div className="max-w-[1340px] md:mt-20 mx-auto ">
          <div className="flex items-center justify-center">
            <h1 className="max-w-[920px] md:text-7xl text-5xl py-8 px-3 text-center font-bold text-balance tracking-tight">
              Automated cross-chain swaps.{" "}
            </h1>
          </div>
          <div className="flex mt-[300px] items-center justify-center">
            <h2 className="text-center flex items-center justify-center max-w-[800px] text-gray-200 mb-10 text-balance text-xl md:text-2xl">
              Swap crypto securely and privately - directly through our Telegram
              Bot.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
