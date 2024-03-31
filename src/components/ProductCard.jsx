import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/slices/cartSlice";

export default function ProductCard({ id, image, name, price }) {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, image, name, price }));
  };
  return (
    <Link
      to={`/Cart/${id}`}
      className="relative  overflow-hidden group flex flex-col gap-2 font-semibold"
    >
      <div className="relative  overflow-hidden group flex flex-col gap-2 font-semibold">
        <span className="h-[250px] overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-md"
            src={image}
            alt={name}
          />
        </span>
        <span className="text-center text-sm">{name}</span>
        <span className="text-center text-sm">${price.toLocaleString()}</span>

        <div className="absolute group-hover:opacity-100 opacity-0 bottom-16 left-[50%] -translate-x-[50%] flex items-center gap-4">
          <span
            className="md:h-10 md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg"
            title="Wishlist"
          >
            <i className="fa-light fa-heart"></i>
          </span>
          <button
            onClick={handleAddCart}
            className="md:h-10 md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer text-xs md:text-lg"
            title="Quick Shop"
          >
            <i className="fa-light fa-shopping-cart"></i>
          </button>
          <span
            className="md:h-10 md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg"
            title="Quick View"
          >
            <i className="fa-light fa-search"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
