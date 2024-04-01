import React from "react";
import {
  errorkids,
  errormen,
  errorshoes,
  errorwomen,
  img404,
  men,
} from "../assets/images";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="flex flex-col gap-4 items-center py-6">
        <div>
          <img src={img404} alt="sad dog" />
        </div>
        <div className="text-xl font-semibold md:text-3xl">
          <span className="text-2xl md:text-3xl">O</span>ops!. Page Not Found
        </div>
        <div className="text-center text-sm md:text-lg">
          Sorry for the inconvenience. <br />
          Go to our homepage or check out our latest collections.
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={"/"}
            className="text-center py-2 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-max"
          >
            GO TO HOME
          </Link>
          <Link
            to={"/fashion"}
            className="text-center py-2 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-max"
          >
            Continue shopping
          </Link>
        </div>

        <main className="w-full mt-5 px-4 md:px-6">
          <div className="text-center text-lg md:text-xl font-semibold my-6">
            Lets get you back on track...
          </div>
          <div className="track">
            <Link
              to={"/women"}
              className="h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <img
                className="h-full group-hover:scale-[1.2] w-full object-cover"
                src={errorwomen}
                alt=""
              />
              <span className="absolute bg-black text-white uppercase bottom-4 left-[50%] -translate-x-[50%] py-1 w-full text-center font-semibold">
                Women
              </span>
            </Link>

            <Link
              to={"/men"}
              className="h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <img
                className="h-full group-hover:scale-[1.2] w-full object-cover"
                src={errormen}
                alt=""
              />
              <span className="absolute bg-black text-white uppercase bottom-4 left-[50%] -translate-x-[50%] py-1 w-full text-center font-semibold">
                Men
              </span>
            </Link>
            <Link
              to={"/kids"}
              className="h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <img
                className="h-full group-hover:scale-[1.2] w-full object-cover"
                src={errorkids}
                alt=""
              />
              <span className="absolute bg-black text-white uppercase bottom-4 left-[50%] -translate-x-[50%] py-1 w-full text-center font-semibold">
                Kids
              </span>
            </Link>
            <Link
              to={"/shoes"}
              className="h-[300px] relative overflow-hidden group cursor-pointer"
            >
              <img
                className="h-full group-hover:scale-[1.2] w-full object-cover"
                src={errorshoes}
                alt=""
              />
              <span className="absolute bg-black text-white uppercase bottom-4 left-[50%] -translate-x-[50%] py-1 w-full text-center font-semibold">
                Shoes
              </span>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
