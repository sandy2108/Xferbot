import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Security = () => {
  const data = [
    {
      title: "XFER Debit Card",
      Description:
        "Swap Crypto into fiat using VISA XFERs we offers $USD , $CAD",
    },
    {
      title: "XFER Gift Card",
      Description: "We offer Gift cards where you can buy amazon, KFC etc.,",
    },
    {
      title: "Maestro Ecosystem",
      Description:
        "Integrated the sniper ecosystem for the community. snipe any tokens!",
    },
    {
      title: "Banana Ecosystem",
      Description: "Integrated Lightning fast sniper and all in one place",
    },
  ];

  return (
    <div className="w-full min-h-screen utilities">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="mt-20  glassmorphism text-white">
          <div className=" flex items-center justify-center rounded-3xl flex-wrap overflow-hidden border-2 border-[#e7e7e7] md:h-[700px] m-auto">
            <div className="w-full h-full ">
              <div className="max-w-[1240px] mx-auto p-4">
                <div className="md:my-1 lg:my-7 lg:mx-0 py-10 lg:px-0 lg:mx:15 text-white lg:flex ">
                  <div className="my-2 md:my-5 lmd:w-full">
                    <p className="text-[30px] md:text-3xl lg:text-6xl font-[500] text-[#a0f5bc] leading-15">
                      Space Bridge Offers!.
                    </p>
                    <button className="cursor-pointer bg-[black] hover:bg-green-300 hover:text-black rounded-3xl border-2 text-[#ffffff] border-[#eaf7ff] flex  my-2 lg:my-7 px-4 py-2 ">
                      Learn More! <BsArrowRight size={22} className="mx-2" />{" "}
                    </button>
                  </div>
                  <div className="mx-auto">
                    <p className="lg:my-10 my-10  text-[20px] font-bold text-[#ffffff]">
                      The SpaceBridge are offered to everything to asset owners
                      in the single place
                    </p>
                  </div>
                </div>

                <div className="my-10 border-t-2 border-[#e7e7e7]  ">
                  <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-4 lg:grid-cols-4">
                    {data.map((item, index) => (
                      <div key={index}>
                        <div className="mb-4">
                          <Link href="https://t.me/SpaceBridgeBot" target="_blank" className="font-Inter font-medium mb-5 text-[24px] leading-6 text-[#a0f5bc]">
                            {item.title}
                          </Link>
                        </div>
                        <div>
                          <p className=" font-medium mb-5 lg:w-full md:w-[85%] w-[70%] text-[18px] leading-6 text-white">
                            {item.Description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
