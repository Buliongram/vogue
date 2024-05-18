import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { blog1 } from "../assets/images";
import { blogs } from "../data/Links";
export default function Article() {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        650: { slidesPerView: 2, spaceBetween: 15 },
        960: { slidesPerView: 3, spaceBetween: 15 },
      }}
      autoplay={{ delay: 2000 }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
      className="overflow-x-hidden w-full "
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog.id} className="flex flex-col gap-5 bg-white">
          <img src={blog.image} alt={blog.image} />
          <span className="font-[500] text-[16px] md:text-[16px] text-center">
            {blog.name}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
