import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/cartSlice";
import { Link } from "react-router-dom";

export default function Products({
  id,
  image,
  name,
  price,
  oldPrice,
  selling,
  sale,
  nostar,
  fullstar,
  onestar,
  color,
}) {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, image: image[0], name, price }));
  };
  return (
    <Link
      to={`/collection/${id}`}
      key={id}
      className="arrivalCard flex min-h-4  flex-col group cursor-pointer  gap-3 items-center"
    >
      <span className=" relative h-[300px] md:min-h-[350px]  overflow-hidden rounded-sm">
        {selling ? (
          <span className="absolute top-2 left-2 z-10 bg-primary text-white text-[11px] p-[2px] px-1">
            {selling}
          </span>
        ) : (
          ""
        )}
        {sale ? (
          <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs p-[2px] px-2">
            {sale}
          </span>
        ) : (
          ""
        )}
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
            className="md:h-10 cursor-pointer md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg"
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
      <div
        className={`flex flex-col items-center justify-between ${
          color ? "h-[120px]" : "h-[80px]"
        }`}
      >
        <span className="font-semibold text-sm text-center ">{name}</span>
        <div className="flex items-center gap-2">
          {oldPrice ? <s className="line-through">${oldPrice}.00</s> : ""}
          <span className={`${oldPrice ? "text-red-500" : ""}`}>
            ${price}.00
          </span>
        </div>

        <span className="text-xs flex items-center gap-1">
          {onestar ? (
            <>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-thin fa-star"></i>
            </>
          ) : (
            ""
          )}

          {nostar ? (
            <>
              <i className="fa-thin fa-star"></i>
              <i className="fa-thin fa-star"></i>
              <i className="fa-thin fa-star"></i>
              <i className="fa-thin fa-star"></i>
              <i className="fa-thin fa-star"></i>
            </>
          ) : (
            ""
          )}
          {fullstar ? (
            <>
              {" "}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>{" "}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </>
          ) : (
            ""
          )}
        </span>
        {color ? (
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border bg-red-200"></span>
            <span className="h-4 w-4 rounded-full border bg-blue-200"></span>
            <span className="h-4 w-4 rounded-full border bg-orange-300"></span>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
