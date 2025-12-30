"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-xl shadow-lg"
      >
        <SwiperSlide>
          <Image
            src="/slide1.jpg"
            width={1344}
            height={514}
            alt="banner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/slide2.jpg"
            width={1344}
            height={514}
            alt="banner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/slide3.jpg"
            width={1344}
            height={514}
            alt="banner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
