import React from "react";
import { Link } from "react-router-dom";
import { clothing } from "../data/Clothing";

export default function More() {
  return (
    <section className="flex flex-col gap-2 mt-8">
      <span className="text-center text-xl md:text-3xl">
        There's More to Exlpore
      </span>
      <div className="more grid grid-cols-4 md:grid-cols-6 grid-rows-[repeat(3,150px)] md:grid-rows-[repeat(2,200px)] gap-4 p-4">
        {clothing
          .filter((cart) => cart.more === true)
          .map((cont) => (
            <Link
              to={cont.path}
              key={cont.id}
              className={`relative col-span-2 ${
                cont.full ? "row-span-2" : ""
              } rounded-md overflow-hidden cursor-pointer group `}
            >
              <img
                className="group-hover:scale-[1.2] object-cover h-full w-full "
                src={cont.image}
                alt=""
              />
              <span className="absolute bottom-5 left-[50%] -translate-x-[50%] bg-white group-hover:bg-primary group-hover:text-white px-4 py-1 uppercase text-sm font-semibold rounded-sm">
                {cont.name}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}
