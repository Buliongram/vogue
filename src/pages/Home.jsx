import React from "react";
import { banner1, banner2, logo1, smallbanner1 } from "../assets/images";
import { Link } from "react-router-dom";

import Arrivals from "../sections/Arrivals";
import More from "../sections/More";
import LogoSlide from "../components/LogoSlide";
import TopSeller from "../sections/TopSeller";

import Article from "../sections/Article";
import Category from "../sections/Category";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[460px] md:h-[550px]">
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
          <span className="text-sm md:text-xl">new collection</span>
          <span className="flex flex-col text-2xl md:text-6xl capitalize">
            <span className="font-bold">Luxury brands</span> without labels
          </span>
          <Link
            to={"/fashion"}
            href=""
            className="text-center py-3 mt-3 px-6 bg-gray-900 text-white rounded-md uppercase text-sm md:text-lg hover:bg-primary w-max"
          >
            shop now
          </Link>
        </div>
      </div>

      {/* EXPLORE CATEGORIES SECTION */}
      <div className="mt-5">
        <h3 className="text-center text-xl md:text-3xl py-3 ">
          Explore Top Categories
        </h3>
        <div className="explore">
          <Category />
        </div>
      </div>
      {/* ////////////////////////////////////////////////??// */}

      <div className="p-4">
        <Arrivals></Arrivals>
      </div>

      <More></More>

      <div className="p-4 bg-light">
        <LogoSlide></LogoSlide>
      </div>

      <div className="mt-5 p-4">
        <div className="text-center text-xl md:text-3xl">Top Seller</div>
        <TopSeller></TopSeller>
      </div>

      <div className="flex flex-col gap-4 mt-5 p-4">
        <div className="text-center text-xl md:text-3xl">News & Articles</div>
        <Article></Article>
      </div>
    </>
  );
}
