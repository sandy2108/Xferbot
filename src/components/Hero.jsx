import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white relative">
      <div className="w-full mx-auto px-2 min-h-screen overflow-hidden  gradientbg ">
        <Navbar />
        <div className="max-w-[1340px] mx-auto ">
          <div className="absolute bottom-0">
            <div className="max-w-[600px]">
              <h1 className="text-xl mb-5 md:text-2xl font-bold ">
                AUTIOMATED CROSS_CHAIN SWAPS
              </h1>
              <h2 className="text-left text-gray-200 mb-5 text-balance text-md md:text-xl">
                Swap crypto securely and privately - directly through our
                Telegram Bot.
              </h2>
              <div className="md:flex items-center  gap-5">
                <div class="rounded-full bg-white shadow-md text-[16px] font-normal leading-normal text-[#232323] py-2 px-4">
                  SPACEBRIDGEBOT
                </div>
                <div class="rounded-full bg-transparent shadow-md my-5 text-[16px] font-normal leading-normal border-2 border-white text-[#ffffff] py-2 px-4 flex">
                  LEARN MORE{" "}
                  <Image
                    src="/arrow.svg"
                    className="ml-3"
                    width={25}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
