"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { courses } from "@/utils/constants";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="flex justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 110,
          modifier: 3,
        }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={false}
        pagination={true}
        className=""
        modules={[EffectCoverflow, Pagination, Navigation]}>
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="p-10 bg-white shadow-xl w-full h-full rounded-2xl space-y-3">
              <Image src={course.image} alt={course.name} width={1000} height={1000} />
              <h1 className="text-xl font-semibold">{course.name}</h1>
              <p className="text-base text-[#8993A0]">{course.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
