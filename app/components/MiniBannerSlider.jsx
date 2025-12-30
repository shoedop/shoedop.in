"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    title: "Step Into Comfort With Our Latest Sneakers",
    subtitle: "Premium comfort and unbeatable style for everyday wear",
    img: "/banners/banner1.jpg",
  },
  {
    title: "Top Trending Shoes Now at the Best Prices",
    subtitle: "Sport, casual or street—find your perfect match",
    img: "/banners/banner2.jpg",
  },
  {
    title: "Exclusive Drops You Don’t Want To Miss",
    subtitle: "Limited edition shoes available only this week",
    img: "/banners/banner3.jpg",
  },
];

export default function MiniBannerSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {banners.map((b, index) => (
          <SwiperSlide key={index}>
  <div className="
    bg-white 
    rounded-xl 
    shadow-md 
    hover:shadow-xl 
    transition-all 
    duration-300 
    p-5 
    flex 
    items-center 
    justify-between
    h-42.5 
    hover:-translate-y-2
  ">
    
    {/* Left text section */}
    <div className="w-1/2 flex flex-col justify-center h-full">
      <p className="text-[12px] text-orange-500 font-semibold mb-1">
        Only This Week
      </p>

      <h2 className="font-bold text-[17px] leading-tight h-11.25 overflow-hidden">
        {b.title}
      </h2>

      <p className="text-sm text-gray-500 h-5 overflow-hidden">
        {b.subtitle}
      </p>

      <button className="mt-3 bg-black text-white px-4 py-1 rounded-md text-sm hover:bg-gray-800 transition">
        Shop Now →
      </button>
    </div>

    {/* Right image section */}
    <div className="w-1/2 flex justify-end h-full">
      <Image
        src={b.img}
        width={140}
        height={140}
        alt="banner image"
        className="object-contain h-full"
      />
    </div>

  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
