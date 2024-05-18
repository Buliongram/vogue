import React from "react";
import {
  banner1,
  banner2,
  logo1,
  smallbanner1,
  smallbanner2,
} from "../assets/images";
import { Link } from "react-router-dom";

import Arrivals from "../sections/Arrivals";
import More from "../sections/More";
import LogoSlide from "../components/LogoSlide";
import TopSeller from "../sections/TopSeller";

import Article from "../sections/Article";
import Category from "../sections/Category";

import BannerSlide from "../slides/BannerSlide";

export default function Home() {
  return (
    <>
      <BannerSlide />
      {/* EXPLORE CATEGORIES SECTION */}
      <div className="mt-3">
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
