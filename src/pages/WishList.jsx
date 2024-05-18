import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { clothing } from "../data/Clothing";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import Paginator from "../components/Paginator";

export default function WishList() {
  const wishState = useSelector((state) => state.wishlist);

  return (
    <>
      <Paginator />

      <section className="my-8 p-4">
        <div className="text-center text-xl font-semibold">WISHLIST</div>
        {wishState.length ? (
          <main id="wishcont" className="newArrivals w-full mt-5">
            {wishState.map((wishlist) => (
              <Products key={wishlist.id} {...wishlist} />
            ))}
          </main>
        ) : (
          <div className="flex flex-col gap3 items-center mt-10">
            <div>Products weren't added to your wishlist </div>
            <Link
              to={"/fashion"}
              className="text-center py-3 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-max"
            >
              continue shopping
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
