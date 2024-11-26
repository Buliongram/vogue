import React from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import { IoIosHeartHalf } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Saved() {
  return (
    <section className="lg:p-12 py-8 flex gap-6 flex-col md:flex-row">
      <Sidebar />

      <section className="p-4 rounded-2xl border w-full flex flex-col gap-6">
        <h1 className="text-sm min-[900px]:text-lg lg:text-2xl text-left font-main font-semibold">
          Saved Items
        </h1>

        <section className="p-4 flex flex-col items-center justify-center gap-5 md:max-w-[60%] w-full mx-auto">
          <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
            <IoIosHeartHalf className="text-primary text-5xl" />
          </div>
          <span className="text-[16px]">You haven’t saved an item yet!</span>
          <span className="text-[13px] text-gray-500 text-center">
            Found something you like? Tap on the heart shaped icon next to the
            item to add it to your wishlist! All your saved items will appear
            here.
          </span>

          <Link
            to={"/menu"}
            type="submit"
            className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
          >
            Browse Menu
          </Link>
        </section>
      </section>
    </section>
  );
}
