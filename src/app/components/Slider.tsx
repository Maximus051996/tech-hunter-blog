"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { images } from "@/Images";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="bg-violet-100 p-4 rounded w-80 h-80">
      <Swiper pagination modules={[Pagination]} className="w-65 h-72">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
