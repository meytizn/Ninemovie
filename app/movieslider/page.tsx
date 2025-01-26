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



export default function MovieSlider_component() {
  return (
    <>
    
<Swiper 
      spaceBetween={50}
      slidesPerView={6}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation,EffectFade]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide><img src="images/1.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/1.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/1.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/1.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/3.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
      <SwiperSlide><img src="images/2.jpg" className="flex flex-row w-[220px] md:h-[430px] text-white text-[25px] bg-black"/></SwiperSlide>
    </Swiper>






    </>
  );
}