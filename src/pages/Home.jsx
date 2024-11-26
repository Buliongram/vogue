import React from "react";
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
      <div className="mt-10 ">
        <h3 className="text-center py-5 text-2xl md:text-3xl font-medium">
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

      <div className="mt-10 p-4">
        <div className="text-center text-2xl md:text-3xl font-medium">
          Top Seller
        </div>
        <TopSeller></TopSeller>
      </div>

      <div className="flex flex-col gap-4 mt-10 p-4">
        <div className="text-center text-2xl md:text-3xl font-medium">
          News & Articles
        </div>
        <Article></Article>
      </div>
    </>
  );
}
