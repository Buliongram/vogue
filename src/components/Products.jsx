import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/slices/wishSlice";
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty, IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

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

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToWishlist({ id, image: [image[0], image[1]], name, price }));
  };
  const handleremovefromWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromWishlist({ id, image: image[0], name, price }));
  };

  const wishState = useSelector((state) => state.wishlist);

  const findInWishlist = wishState.find((el) => el.id == id);

  return (
    <Link
      to={`/collection/${id}`}
      key={id}
      className="arrivalCard flex min-h-4  flex-col group cursor-pointer  gap-3 items-center"
    >
      <span className=" relative h-[300px] md:min-h-[350px] bg-[#f1eef4] overflow-hidden rounded-sm">
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
          className=" transition-all arrivalImage1 h-full w-full object-cover"
          src={image[0]}
          alt=""
        />
        <img
          src={image[1]}
          alt=""
          className=" transition-all arrivalImage2 hidden opacity-0 h-full w-full object-cover scale-[1.1]"
        />
        {window.location.pathname == "/wishlist" ? (
          <span
            onClick={handleremovefromWishlist}
            className="absolute top-3 group-hover:opacity-100 opacity-0  right-3 md:h-10 md:w-10 cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shadow-lg hover:bg-black hover:text-white productBtn"
          >
            <div className="absolute transition-none -left-[350%] md:-left-[300%] bg-black text-white text-[9px] max-h-max  w-max hidden snippet2 transition-all h-[20px]  md:h-[20px] items-center justify-center py-[2px] px-1 md:text-[10px]">
              Remove from Wishlist
            </div>
            <IoMdClose />
          </span>
        ) : (
          ""
        )}
        <div className="absolute group-hover:opacity-100 opacity-0 bottom-5 left-[50%] -translate-x-[50%] flex items-center gap-4">
          {window.location.pathname == "/wishlist" ? (
            ""
          ) : (
            <>
              {findInWishlist ? (
                <button className="md:h-10 transition-none cursor-pointer md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg hover:bg-black hover:text-white productBtn">
                  <div className="absolute -top-[80%] md:-top-[65%] bg-black text-white text-[9px] max-h-max  w-max hidden snippet transition-all md:h-[20px] items-center justify-center py-[2px] px-1 md:text-[10px]">
                    Available in Wishlist
                  </div>
                  <IoIosHeart className="text-sm md:text-lg" />
                </button>
              ) : (
                <>
                  <button
                    onClick={handleAddToWishlist}
                    className="md:h-10 cursor-pointer transition-none md:w-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs md:text-lg hover:bg-black hover:text-white productBtn"
                  >
                    <div className="absolute -top-[80%] md:-top-[65%] bg-black text-white text-[9px] max-h-max  w-max hidden snippet transition-all md:h-[20px] items-center justify-center py-[2px] px-1 md:text-[10px]">
                      Add to Wishlist
                    </div>
                    <IoIosHeartEmpty className="text-sm md:text-lg" />
                  </button>
                </>
              )}
            </>
          )}

          <button
            onClick={handleAddCart}
            className="md:h-10 md:w-10 w-8 h-8 rounded-full transition-none bg-white flex items-center justify-center cursor-pointer text-xs md:text-lg hover:bg-black hover:text-white relative group productBtn"
          >
            <div className="absolute -top-[80%] md:-top-[65%] bg-black text-white text-[9px] max-h-max  w-max hidden snippet transition-all md:h-[20px] items-center justify-center py-[2px] px-1 md:text-[10px]">
              Quick Shop
            </div>
            <BsCart3 className="text-sm md:text-lg" />
          </button>
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
            ${price.toLocaleString()}.00
          </span>
        </div>

        <span className="text-xs flex items-center gap-1 md:text-sm">
          {onestar ? (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar className="text-sm md:text-lg" />
            </>
          ) : (
            ""
          )}

          {nostar ? (
            <>
              <CiStar className="text-sm md:text-lg" />
              <CiStar className="text-sm md:text-lg" />
              <CiStar className="text-sm md:text-lg" />
              <CiStar className="text-sm md:text-lg" />
              <CiStar className="text-sm md:text-lg" />
            </>
          ) : (
            ""
          )}
          {fullstar ? (
            <>
              {" "}
              <FaStar />
              <FaStar />
              <FaStar /> <FaStar />
              <FaStar />
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
