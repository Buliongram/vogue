import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  banner1,
  banner2,
  banner3,
  smallbanner1,
  smallbanner2,
  smallbanner3,
} from "../assets/images";
import { Link } from "react-router-dom";
import { videobanner } from "../assets/video";

export default function BannerSlide() {
  return (
    <Swiper
      slidesPerView={3}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1 },
        650: { slidesPerView: 1 },
        960: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
      }}
      autoplay={{ delay: 4000 }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      direction="horizontal"
      className="overflow-x-hidden w-full"
    >
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-[460px] md:h-[430px]">
          <img
            src={banner3}
            alt=""
            className="md:flex hidden absolute h-full w-full top-0 left-0 object-cover "
          />
          <img
            src={smallbanner3}
            alt=""
            className="md:hidden absolute h-full w-full top-0 left-0 object-cover -z-10"
          />

          <div className="flex flex-col gap-2 uppercase absolute md:left-16 lg:left-24 md:top-[50%] md:-translate-y-[50%] md:translate-x-0 md:items-start items-center bottom-10 left-[50%] -translate-x-[50%]">
            <span className="text-sm md:text-xl">new collection</span>
            <span className="flex flex-col text-2xl md:text-6xl capitalize">
              <span className="font-bold">Luxury brands</span> without labels
            </span>
            <Link
              to={"/fashion"}
              href=""
              className="text-center py-[12px] mt-3 px-[25px] bg-dark text-white rounded-md uppercase text-[13px] md:text-[15px] hover:bg-primary w-max"
            >
              shop now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[460px] md:h-[430px]">
          <img
            src={banner2}
            alt=""
            className="md:flex hidden absolute h-full w-full top-0 left-0 object-cover "
          />
          <img
            src={smallbanner2}
            alt=""
            className="md:hidden absolute h-full w-full top-0 left-0 object-cover -z-10"
          />

          <div className="flex flex-col gap-2 uppercase absolute md:right-10  md:top-[50%] md:-translate-y-[50%] md:translate-x-0 md:items-start items-center bottom-10 left-[50%] -translate-x-[50%]">
            <span className="flex flex-col text-4xl md:text-6xl capitalize">
              <span className="font-bold text-center md:text-start">
                Making <br /> Bold Moves
              </span>
            </span>
            <span className="text-sm md:text-lg hidden lg:flex">
              Upgrade your wardrobe with a variation of styles
            </span>
            <div className="flex items-center gap-4">
              <Link
                to={"/women"}
                href=""
                className="text-center py-[8px] md:py-[12px] mt-3 px-[25px] bg-dark text-white rounded-md uppercase text-[13px] md:text-[15px] hover:bg-primary w-max"
              >
                SHOP WOMEN
              </Link>
              <Link
                to={"/men"}
                href=""
                className="text-center py-[8px] md:py-[12px]  mt-3 w-[100px] md:w-[160px] bg-white text-dark border border-dark rounded-md uppercase text-[13px] md:text-[15px] hover:bg-dark hover:text-white "
              >
                SHOP MEN
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-[460px] md:h-[430px]">
          <img
            src={banner1}
            alt=""
            className="md:flex hidden absolute h-full w-full top-0 left-0 object-cover "
          />
          <img
            src={smallbanner1}
            alt=""
            className="md:hidden absolute h-full w-full top-0 left-0 object-cover -z-10"
          />

          <div className="flex flex-col gap-2 uppercase absolute md:left-16 lg:left-24 md:top-[50%] md:-translate-y-[50%] md:translate-x-0 md:items-start items-center bottom-10 left-[50%] -translate-x-[50%]">
            <span className="text-sm md:text-xl text-primary">SINCE 2017</span>
            <span className="flex flex-col text-2xl md:text-6xl capitalize">
              <span className="font-bold">Celeb Fashion</span>
            </span>
            <span className="text-sm md:text-lg ">
              Better fashion sense from flop to fab.
            </span>
            <Link
              to={"/fashion"}
              href=""
              className="text-center py-[12px] mt-3 px-[25px] bg-dark text-white   rounded-md uppercase text-[13px] md:text-[15px] hover:border-transparent  hover:bg-primary w-max"
            >
              shop now
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[460px] md:h-[430px]">
          <video
            loop="true"
            muted="true"
            autoPlay
            data-ll-status="loaded"
            src={videobanner}
            className="flex absolute h-full w-full top-0 left-0 object-cover "
          ></video>

          <div className="flex flex-col gap-2 uppercase fixed md:left-16 lg:left-24 md:top-[50%] md:-translate-y-[50%] md:translate-x-0 md:items-start items-center bottom-10 left-[50%] -translate-x-[50%] text-white">
            <span className="text-sm md:text-xl text-primary">
              Up to 70% off
            </span>
            <span className="flex flex-col text-2xl md:text-6xl capitalize">
              <span className="font-bold">BASIC WARDROBE</span> ESSENTIALS
            </span>
            <Link
              to={"/fashion"}
              href=""
              className="text-center py-[12px] mt-3 px-[25px] bg-dark text-white rounded-md uppercase text-[13px] md:text-[15px] hover:bg-primary w-max"
            >
              shop now
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
