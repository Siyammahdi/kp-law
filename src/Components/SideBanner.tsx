import React from 'react';
import Image from 'next/image';

const SideBanner: React.FC = () => {
  return (
    <div className="sticky top-0 bg-[#202032]">
        <div className='p-8 text-red-600 text-3xl font-semibold'>#TALCSCANDAL</div>
      <div className="max-w-7xl text-white mx-auto px-4 sm:px-6 lg:px-12 py-20 ">
        <h1 className="text-3xl font-semibold ">A journey to get justice against Johnson & Johnson</h1>
        <p className="my-[22px] text-lg font-light 0">
        Johnson & Johnson continued to sell talcum powder for years despite knowing its potential cancer risks. If you or a loved one used Johnson & Johnson baby powder for over five years and developed cancer, you might be eligible for compensation. 
        </p>
      </div>
      <div className="w-full relative">
        <div className='absolute top-0 left-0 w-full h-[200px]  bg-gradient-to-b from-[#202032] '></div>
        <Image
          src="/powder.jpg"
          alt="Banner Image"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default SideBanner;
