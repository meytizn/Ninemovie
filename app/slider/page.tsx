'use client'
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'; // Import Image from next/image
import img1 from '@/public/images/1.jpg';
import img2 from '@/public/images/2.jpg';
import img3 from '@/public/images/3.jpg';



// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Slider() {
  return (
    <>
      {/* <Carousel className="w-[300px]">
        <div>
          <Image src="/images/1.jpg" alt="Image 1" width={300} height={200} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src="/images/2.jpg" alt="Image 2" width={300} height={200} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src="/images/3.jpg" alt="Image 3" width={300} height={200} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}




<Swiper
 
    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
    spaceBetween={50}
    effect="fade"
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide><img src="images/1.jpg" className="w-[100%] md:w-[50%] md:m-auto bg-black h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="w-[100%] md:w-[50%] md:m-auto h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="w-[100%] md:w-[50%] md:m-auto h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/1.jpg" className="w-[100%] md:w-[50%] md:m-auto h-[100vh]"/></SwiperSlide>
      ...
    </Swiper>






    </>
  );
}