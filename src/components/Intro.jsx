import React from "react";
import Image from "next/image";
import Link from "next/link";


import panda from "../../public/sniper.png";

const Intro = () => {
  const cardData = [
    {
      imageSrc: panda,
      alt: "/",
      content:
        "Lightning-fast XFER FUTURES BOT allows you to leverage futures trades with up to 50x leverage on Telegram.",
      title: "XFER FUTURES BOT",
      location: "https://t.me/XferFuturesBot",
    },
    {
      imageSrc: panda,
      alt: "/",
      content:
        "Telegram private payment offers a bot that sends money privately and anonymously without revealing your address.",
      title: "XFER PRIVATE PAYMENT BOT",
      location: "https://t.me/XferPrivatePaybot",
    },
  ];

  return (
    <div className="w-full introbg">
      <div className="max-w-[1340px] mx-auto text-white p-4">
        <div className="">
          <div className="flex items-center justify-center mt-10">
            <h1 className="max-w-[1020px]  md:text-6xl text-4xl py-8 px-3 text-center font-bold text-balance tracking-tight">
              Discover the unleased power of
              <span className="text-green-500 ml-3">SPACEBRIDGE</span>
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <p className="max-w-[600px] text-center  text-balance ">
            Space Bridge Tech LLC - Your Gateway to Innovation in California, USA
            </p>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="grid md:grid-rows-2 gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`bg-${
                    index === 0 ? "[#011829]" : "white"
                  } border-2 border-white rounded-xl shadow-2xl mx-5 px-8 ${
                    index === 0 ? "pt-8 mt-8" : "pt-8 lg:mt-6 my-2"
                  }`}
                >
                  <div className="grid md:grid-cols-3 my-5 mt-0">
                    <div className="col-span-1 flex justify-center items-start py-4 lg:py-2">
                      <Image
                        src={card.imageSrc}
                        height={20}
                        width={100}
                        alt={card.alt}
                        className="rounded-full lg:mb-10"
                      />
                    </div>
                    <div className="col-span-2 ">
                      <p className=" my-2 font-[500px] text-base sm:text-lg leading-normal">
                        {card.content}
                      </p>
                      <Link
                        href={card.location}
                        target="_blank"
                        className=" font-bold text-[#a0f5bc] hover:text-green-500 text-2xl leading-6 my-5"
                      >
                        {card.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl lg:mt-8 lg:mb-2 mx-5 border-2 border-white mt-5 overflow-hidden relative">
              <div className="p-4">
                <Link
                  href="https://t.me/SpaceBridgeBot "
                  alt="/"
                  target="_blank"
                  className=" font-bold text-[#a0f5bc] hover:text-green-500 text-2xl leading-6 my-5"
                >
                  SPACE BRIDGE BOT
                </Link>
                <h1 className="my-2 font-[500px] text-base sm:text-lg leading-norma">
                  We have fixed float, Houdini, other cross chain bridges, dexs,
                  cexs. All of those feed into our protocol
                </h1>
                <h1 className="my-2 font-[500px] text-base sm:text-lg leading-norma">
                  We aggregate the trades sent from the bot and clip the ticket
                  on the trade, sharing that revenue back to holders
                </h1>
                <h1 className="my-2 font-[500px] text-base sm:text-lg leading-norma">
                  Partners and other bots like maestro, are able to use our api
                  to generate trades / anonymise eth.
                </h1>
                <h1 className="my-2 font-[500px] text-base sm:text-lg leading-norma">
                  We aggregate the trades sent from the bot and clip the ticket
                  on the trade, sharing that revenue back to holders
                </h1>
              </div>
              <div className=" p-4">
                <Link href="https://t.me/SpaceBridgeBot " alt="/">
                  <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl px-4 hover:text-green-500 my-2 text-white font-bold">
                    Meet the XFERBOT Community
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
