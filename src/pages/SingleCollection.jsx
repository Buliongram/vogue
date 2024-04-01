import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CiDeliveryTruck, CiStar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { RiTruckLine } from "react-icons/ri";
import {
  access1,
  access11,
  access111,
  access112,
} from "../assets/accessories/accessories";
import { safecheckout } from "../assets/images";
import { clothing } from "../data/Clothing";
import { FaStar } from "react-icons/fa6";
import {
  addToCart,
  changeInCart,
  decreaseInCart,
  increaseInCart,
} from "../features/slices/cartSlice";

export default function SingleCollection() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addToCart({
        id: data?.id,
        image: data?.image[0],
        name: data?.name,
        price: data?.price,
      })
    );
  };
  useEffect(() => {
    const product = clothing.find((cloth) => cloth.id.toString() === params.id);
    if (product) setData((prev) => ({ ...product }));
    setLoading(false);
  }, [params.id]);

  return (
    <>
      {data ? (
        <section className="p-4 flex flex-col md:flex-row gap-10">
          <aside className="flex flex-col gap-1 md:flex-row-reverse w-full">
            <div className="h-[500px] w-full">
              <img
                className="w-full h-full object-cover"
                src={data?.image[0]}
                alt=""
              />
            </div>
            <div className="flex items-center gap-1 md:flex-col">
              <figure className=" cursor-pointer h-[100px] w-[100px]">
                <img
                  src={data?.image[0]}
                  className="w-full  h-full object-cover"
                  alt=""
                />
              </figure>
              <figure className="  cursor-pointer h-[100px] w-[100px]">
                {" "}
                <img
                  src={data?.image[1]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              {data?.image[2] ? (
                <figure className=" cursor-pointer h-[100px] w-[100px]">
                  <img
                    src={data?.image[2]}
                    className="w-full h-full object-cover"
                    F
                    alt=""
                  />
                </figure>
              ) : (
                ""
              )}
              {data?.image[3] ? (
                <figure className=" cursor-pointer h-[100px] w-[100px]">
                  <img
                    src={data?.image[3]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </figure>
              ) : (
                ""
              )}
            </div>
          </aside>
          <main className="flex flex-col gap-3 w-full">
            <div className="text-xl capitalize font-semibold lg:text-2xl">
              {data?.name}
            </div>
            <div className="flex items-center gap-[2px] text-sm md:text-lg">
              {data?.nostar ? (
                <>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </>
              ) : (
                ""
              )}
              {data?.fullstar ? (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              ) : (
                ""
              )}
              {data?.onestar ? (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <CiStar className="text-lg md:text-xl" />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="text-lg font-semibold mt-3 flex items-center gap-2">
              {data.oldPrice ? (
                <span className="line-through">${data?.oldPrice}.00</span>
              ) : (
                ""
              )}
              <span className={`${data?.oldPrice ? "text-red-500" : ""}`}>
                ${data?.price}.00
              </span>
              {data?.oldPrice ? (
                <span className="text-[10px] text-white bg-red-500 font-semibold rounded-sm px-2">
                  Save ${data?.oldPrice - data?.price}.00
                </span>
              ) : (
                ""
              )}
            </div>
            {data?.stock ? (
              <div className="flex items-center text-xs md:text-sm font-semibold mt-2">
                <span className="impulse"></span>
                <span>Only {data?.stock} left - Selling fast</span>
              </div>
            ) : (
              <div className="flex items-center text-xs md:text-sm font-semibold mt-2">
                <span className="pulse"></span>
                <span>In stock - Ready to ship</span>
              </div>
            )}

            <div className="flex items-center w-full justify-between gap-3 mt-6">
              <div className="flex">
                <button id="minus" className="rounded-s border w-7 h-7">
                  <i className="fa-light fa-minus"></i>
                </button>
                <span className="border w-10 h-7">
                  <input
                    min="1"
                    value={1}
                    className="appearance-none outline-none w-full h-full text-center"
                    type="text"
                    name=""
                    id="quantity"
                  />
                </span>
                <button id="plus" className="rounded-e border w-7 h-7">
                  <i className="fa-light fa-plus"></i>
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm lg:text-lg">
                <span className="flex items-center gap-1 cursor-pointer">
                  <i className="fa-light fa-heart"></i>
                  <span className="text-xs  lg:text-sm">Add to Wishlist</span>
                </span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <i className="fa-light fa-question-circle"></i>
                  <span className="text-xs lg:text-sm">Ask a Question</span>
                </span>
              </div>
            </div>

            <button
              onClick={handleAddCart}
              className="text-center py-3 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-full"
            >
              add to cart
            </button>

            <div className="py-3 px-4 flex flex-col gap-2 mt-2 bg-light relative">
              <span className="text-xs text-center flex items-center justify-center gap-2 ">
                <span className=" text-xl">
                  <RiTruckLine />
                </span>{" "}
                <span>
                  YOUR ORDER IS ELIGIBLE FOR{" "}
                  <span className="font-semibold">FREE DELIVERY</span>.
                </span>
              </span>
              <span className="progress"></span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <SlCalender className="text-sm" />
              <span className="text-xs">
                Estimated delivery between 04 April - 10 April.
              </span>
            </div>
            <div className="mt-7">
              <img src={safecheckout} alt="" />
            </div>
          </main>
        </section>
      ) : (
        (window.location.href = "/error")
      )}
    </>
  );
}
