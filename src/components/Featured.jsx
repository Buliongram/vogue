import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productList } from "../data/Links";
import ProductCard from "./ProductCard";

export default function Featured() {
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
      {productList.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard key={product.id} {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
