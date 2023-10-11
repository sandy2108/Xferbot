import React from "react";
import Image from "next/image";
import { featuresData } from "@/constant";


const Features = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1340px] mx-auto py-10">
        <div className="border-t-2 border-b-2 border-white py-10 px-4">
          <div className="md:grid md:grid-cols-3 gap-5">
            {featuresData.map((feature, index) => (
              <div key={index} className="my-5">
                <div className="flex items-center">
                  <Image src={feature.imageSrc} width={60} height={50} className="" />
                  <Image
                    src={feature.arrowSrc}
                    width={300}
                    height={100}
                    className="ml-3"
                  />
                </div>

                <div className="">
                  <h1 className="my-3 text-white text-24 font-bold">{feature.title}</h1>
                  <p className="text-white text-base font-normal leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
