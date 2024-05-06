import React from "react";
import Paginator from "../components/Paginator";
import { about, aboutbg } from "../assets/images";
import { Link } from "react-router-dom";
import LogoSlide from "../components/LogoSlide";

export default function About() {
  return (
    <>
      <header className="relative h-[100px] text-white md:h-[120px] lg:h-[170px] overflow-hidden w-full flex items-center justify-center  opacity">
        <img
          className="absolute top-0 left-0 w-full h-full -z-10 "
          src={aboutbg}
          alt="banner"
        />
        <div className="flex items-center flex-col gap-3">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold capitalize">
            About Us
          </div>
        </div>
      </header>
      <Paginator />

      <section className="flex flex-col md:flex-row items-center gap-10 p-6 mt-6">
        <span className="w-full border">
          <img src={about} alt="" />
        </span>
        <main className="flex flex-col gap-6 w-full">
          <span className="text-3xl font-semibold">
            Unleash Your Inner Fashionista
          </span>
          <span className="">
            Your one stop destination for super affordable and trendy fashion .
            We add new items to our catalogue daily . Quick Fashionista Tip –
            see something you like ? Snag it before it’s gone, things move
            quickly over here
          </span>
          <Link
            to={"/fashion"}
            className="bg-primary text-white hover:bg-dark p-2 px-4 w-max text-[13px] mt-3"
          >
            SHOP NOW
          </Link>
        </main>
      </section>
      <div className="flex flex-col mt-6 gap-6">
        <span className="text-2xl font-semibold text-center">OUR PARTNERS</span>
        <LogoSlide />
      </div>
    </>
  );
}
