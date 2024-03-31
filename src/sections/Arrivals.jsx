import React from "react";
import { category2, smallbanner1 } from "../assets/images";
import ArrivalCard from "../components/ArrivalCard";
import { Link } from "react-router-dom";
import { arrivals } from "../data/Links";

export default function Arrivals() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center  py-3 ">
          <span className="text-center text-xl md:text-3xl">New Arrivals</span>
          <span className="text-sm">We have your occsion covered </span>
        </div>

        <div className="arrivals">
          {arrivals.map((product) => (
            <ArrivalCard key={product.id} {...product} />
          ))}
        </div>

        <Link
          to={"/discover"}
          className="uppercase text-center py-2 mx-auto mt-10 px-4 bg-gray-900 text-white rounded-md  text-sm hover:bg-primary w-max md:text-lg"
        >
          Discover More
        </Link>
      </section>
    </>
  );
}
