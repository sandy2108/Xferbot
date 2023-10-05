import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/introvideo.mp4';
import juice from '../../public/j.png';
import panda from '../../public/infinity.png';

const Cards = () => {
  const cardData = [
    {
      imageSrc: juice,
      alt: '/',
      content:
        'Lightning-fast mempool trading with MEV-Protection, Copy & Auto trading, all powered by multi-core P2B cloud tech.',
      title: 'P2B SNIPER HUB',
      location: 'https://t.me/P2BHubBot',
    },
    {
      imageSrc: panda,
      alt: '/',
      content:
        'Telegram inaugural perpetual trading bot, offering seamless access to 50+ contract pairs and advanced order options.',
      title: 'P2B PERP HUB',
      location: 'https://t.me/P2BHubBot',
    },
  ];

  return (
    <div className='w-full text-[#232323] bg-[#f8f8f8]'>
      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='grid lg:grid-cols-2'>
          <div className='grid md:grid-rows-2 gap-4'>
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`bg-${index === 0 ? '[#011829]' : 'white'} rounded-xl shadow-2xl mx-5 px-8 ${
                  index === 0 ? 'pt-8 mt-8' : 'pt-8 lg:mt-6 my-2'
                }`}
              >
                <div className='grid md:grid-cols-3 my-5 mt-0'>
                  <div className='col-span-1 flex justify-center items-start py-4 lg:py-2'>
                    <Image
                      src={card.imageSrc}
                      height={20}
                      width={100}
                      alt={card.alt}
                      className='rounded-full lg:mb-10'
                    />
                  </div>
                  <div className='col-span-2 '>
                    <p className=' my-2 font-[500px] text-base sm:text-lg leading-normal'>
                      {card.content}
                    </p>
                    <Link href={card.location} target='_blank' className=' font-bold text-[#333333] hover:text-green-500 text-2xl leading-6 my-5'>
                      {card.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='rounded-2xl lg:mt-8 lg:mb-2 mx-5  mt-5 overflow-hidden relative'>
            <video src={bg} autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <div className='absolute bottom-0 left-0 p-4'>
              <Link href='https://t.me/perpbot_p2b' alt='/'>
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl px-4 hover:text-green-500 my-2 text-white font-bold'>
                  Meet the PERPBOT Community
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;