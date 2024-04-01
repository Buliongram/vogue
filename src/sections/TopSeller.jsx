import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { clothing } from "../data/Clothing";
import Products from "../components/Products";

export default function TopSeller() {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 15 },
        650: { slidesPerView: 3, spaceBetween: 15 },
        960: { slidesPerView: 3, spaceBetween: 15 },
        1200: { slidesPerView: 4, spaceBetween: 15 },
      }}
      autoplay={{ delay: 4000 }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
      className="overflow-x-hidden w-full py-5"
    >
      {clothing
        .filter((topseller) => topseller.topSeller === true)
        .map((seller) => (
          <SwiperSlide key={seller.id}>
            <Products key={seller.id} {...seller} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
