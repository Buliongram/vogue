import React from "react";
import { addToCart } from "../features/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function TopSellerCard({
  id,
  image,
  name,
  price,
  nostar,
  fullstar,
}) {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, image: image[0], name, price }));
  };
  return (
    <div className="arrivalCard flex flex-col group cursor-pointer  gap-3 items-center">
      <span className="border relative h-[300px] md:min-h-[350px]  overflow-hidden rounded-sm">
        <img
          className=" arrivalImage1 h-full w-full object-cover"
          src={image[0]}
          alt=""
        />
        <img
          src={image[1]}
          alt=""
          className="arrivalImage2 hidden h-full w-full object-cover scale-[1.1]"
        />
        <div className="absolute group-hover:opacity-100 opacity-0 bottom-5 left-[50%] -translate-x-[50%] flex items-center gap-4">
          <span
            className="md:h-10 md:w-10 cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg"
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
            className="md:h-10 md:w-10 cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg"
            title="Quick View"
          >
            <i className="fa-light fa-search"></i>
          </span>
        </div>
      </span>
      <span className="font-semibold">{name}</span>
      <div className="flex items-center gap-2">
        <span>${price}.00</span>
      </div>
      <span className="text-xs flex items-center gap-1">
        {nostar ? (
          <>
            <i class="fa-thin fa-star"></i>
            <i class="fa-thin fa-star"></i>
            <i class="fa-thin fa-star"></i>
            <i class="fa-thin fa-star"></i>
            <i class="fa-thin fa-star"></i>
          </>
        ) : (
          ""
        )}
        {fullstar ? (
          <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
