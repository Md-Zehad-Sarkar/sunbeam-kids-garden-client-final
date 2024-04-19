"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { TProduct } from "@/types/products.type";

const CarouselSlider = ({ data }: { data: TProduct[] }) => {
  return (
    <Swiper
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
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.slice(0, 10).map((singleData: TProduct) => (
        <SwiperSlide key={singleData?._id}>
          <div className="flex justify-center items-center py-4">
            <Image
              src={singleData?.image}
              alt="slider image"
              width={500}
              height={300}
              className="w-auto h-[400px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
