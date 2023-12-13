'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/outline'
const ImageCarousel = ({ images }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div>
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
    <div className="relative h-56  md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item>
        {/* <img src={images[currentIndex]} alt={`Image ${currentIndex}`} /> */}
        <Image className='rounded-md' fill={true} src={images[currentIndex]} alt={`Image ${currentIndex}`}  	/>
        </div>
       
    </div>
    <button onClick={goToPrevious} type="button" className="absolute top-0 left-0 z-30 inline-flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="  w-5 h-5 inline-flex items-center justify-center">
        <ArrowLeftIcon />
        </span>
    </button>
    <button onClick={goToNext} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className=" w-5 h-5 inline-flex items-center justify-center ">
           <ArrowRightIcon />
        </span>
    </button>
</div>
</div>
  );
};

export default ImageCarousel;