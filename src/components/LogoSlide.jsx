import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { logoList } from "../data/Links";
export default function LogoSlide() {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 3, spaceBetween: 10 },
        650: { slidesPerView: 5, spaceBetween: 10 },
        920: { slidesPerView: 6, spaceBetween: 10 },
      }}
      autoplay={{ delay: 3000 }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
      className="overflow-x-hidden w-full py-5"
    >
      {logoList.map((logo) => (
        <SwiperSlide key={logo.id}>
          <div className="border max-w-[200px] overflow-hidden rounded-md">
            <img className="h-full w-full " src={logo.image} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
