import React from "react";
import { Link } from "react-router-dom";
import { clothing } from "../data/Clothing";
import Products from "../components/Products";

export default function Arrivals() {
  return (
    <>
      <section className="flex flex-col gap-5 mt-10">
        <div className="flex flex-col gap-2 items-center  py-3 ">
          <span className="text-center text-2xl md:text-3xl font-medium">
            New Arrivals
          </span>
          <span className="text-sm">We have your occsion covered </span>
        </div>

        <div className="arrivals">
          {clothing
            .filter((arrival) => arrival.arrivals === true)
            .map((product) => (
              <Products key={product.id} {...product} />
            ))}
        </div>

        <Link
          to={"/new-arrivals"}
          className="uppercase text-center px-6 py-2 mx-auto mt-10 bg-dark text-white rounded-md  text-sm hover:bg-primary w-max "
        >
          Discover More
        </Link>
      </section>
    </>
  );
}
