'use client'


// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
// swipper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function ImageSlider() {
  return (
    <>
    
<Swiper watchSlidesProgress={false}
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         
         navigation={true}
         modules={[Autoplay, Pagination, Navigation,EffectFade]}
         className="mySwiper"
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide><img src="images/1.jpg" className="w-[100%] md:w-[100%] md:m-auto bg-black h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="w-[100%] md:w-[100%] md:m-auto h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="w-[100%] md:w-[100%] md:m-auto h-[100vh]"/></SwiperSlide>
      <SwiperSlide><img src="images/1.jpg" className="w-[100%] md:w-[100%] md:m-auto h-[100vh]"/></SwiperSlide>
   
    </Swiper>






    </>
  );
}