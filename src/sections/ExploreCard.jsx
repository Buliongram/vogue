import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { category } from "../data/Links";
import { Link } from "react-router-dom";

export default function ExploreCard() {
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
      autoplay={{ delay: 2000 }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
      className="overflow-x-hidden w-full "
    >
      {category.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="relative items-center cursor-pointer  overflow-hidden group flex flex-col gap-2 font-semibold">
            <span className=" rounded-sm h-[270px] w-full md:h-[300px] overflow-hidden">
              <img
                className="h-full hover:scale-125 w-full object-cover rounded-sm"
                src={category.image}
                alt=""
              />
            </span>
            <span className="text-center text-sm md:text-xl uppercase">
              {category.name}
            </span>
            <Link
              key={category.id}
              to={category.path}
              className="border border-gray-500 hover:border-transparent text-center font-medium py-2 px-4 hover:text-white rounded-md uppercase text-xs md:text-sm hover:bg-gray-900 w-max"
            >
              DISCOVER MORE
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
