import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInCart,
  decreaseInCart,
  increaseInCart,
  removeFromCart,
} from "../features/slices/cartSlice";
import { giftBox } from "../data/Links";
import Giftwrap from "../components/Giftwrap";

import { CiTrash } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import Paginator from "../components/Paginator";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTruck } from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Paginator />

      {cartState.length ? (
        <>
          <div id="cartView" className="flex  flex-col  my-4">
            <span className="text-center text-3xl w-full mt-3 ">Your Cart</span>
            <div className="bg-[#d6eadf] my-3 text-sm py-3 px-4 text-center flex gap-2 justify-center items-center">
              <span className="hidden md:block text-lg">
                <IoIosInformationCircleOutline />
              </span>
              Please, hurry! Someone has placed an order with same products.
              These products are limited.
            </div>

            <section className="flex flex-col lg:flex-row items-start p-4 gap-8">
              <div className=" flex-1 w-full">
                <div className="hidden md:flex items-center uppercase gap-10 justify-between bg-light p-2 text-sm pr-5">
                  <span className="md:w-[420px]  text-start ">Product</span>
                  <span className=" text-start">quantity</span>
                  <span className=" ">total</span>
                </div>

                <div id="cartViewCont" className="flex-1 w-full ">
                  {cartState.map((cart) => (
                    <div className="flex items-center justify-between mt-4  w-full pr-5">
                      <div className="flex  items-center  gap-3  md:w-[420px]">
                        {cart.increase ? (
                          <span
                            to={`/collection/${cart.id}`}
                            key={cart.id}
                            className="h-[100px] w-[100px] shrink-0"
                          >
                            <img
                              className="h-full w-full object-cover"
                              src={cart.image}
                              alt=""
                            />
                          </span>
                        ) : (
                          <>
                            <Link
                              to={`/collection/${cart.id}`}
                              key={cart.id}
                              className="h-[100px] w-[100px] shrink-0"
                            >
                              <img
                                className="h-full w-full object-cover"
                                src={cart.image}
                                alt=""
                              />
                            </Link>
                          </>
                        )}
                        <span className="flex flex-col gap-1 text-[13px] lg:text-sm font-normal  shrink-0">
                          <span className="">{cart.name}</span>
                          <span></span>
                          <span className="text-sm ">${cart.price}</span>

                          <div className="flex md:hidden items-center gap-3 mt-2 ">
                            <div className="flex">
                              {cart.increase ? (
                                ""
                              ) : (
                                <>
                                  <button
                                    onClick={() =>
                                      dispatch(decreaseInCart({ id: cart.id }))
                                    }
                                    id="minus"
                                    className="rounded-s border flex items-center justify-center  w-7 h-7"
                                  >
                                    <HiOutlineMinus />
                                  </button>
                                  <span className=" w-10 h-7">
                                    {" "}
                                    <input
                                      min="1"
                                      value={cart.qty}
                                      onInput={(e) =>
                                        dispatch(
                                          changeInCart({
                                            id: cart.id,
                                            qty: e.target.value,
                                          })
                                        )
                                      }
                                      className="appearance-none outline-none w-full h-full border text-center"
                                      type="text"
                                      name=""
                                      id="quantity"
                                    />
                                  </span>
                                  <button
                                    onClick={() =>
                                      dispatch(increaseInCart({ id: cart.id }))
                                    }
                                    id="plus"
                                    className="rounded-e border flex items-center justify-center  w-7 h-7"
                                  >
                                    <HiOutlinePlus />
                                  </button>
                                </>
                              )}
                            </div>
                            <span
                              onClick={() =>
                                dispatch(removeFromCart({ id: cart.id }))
                              }
                              title="REMOVE FROM CART "
                              className=" h-5 w-5 flex items-center justify-center cursor-pointer text-[16px]"
                            >
                              <CiTrash />
                            </span>
                          </div>
                        </span>
                      </div>

                      <div className="hidden md:flex items-center justify-center gap-3">
                        <div className="flex">
                          {cart.increase ? (
                            ""
                          ) : (
                            <>
                              <button
                                onClick={() =>
                                  dispatch(decreaseInCart({ id: cart.id }))
                                }
                                id="minus"
                                className="rounded-s border flex items-center justify-center  w-7 h-7"
                              >
                                <HiOutlineMinus />
                              </button>
                              <span className=" w-10 h-7">
                                <input
                                  min="1"
                                  value={cart.qty}
                                  onInput={(e) =>
                                    dispatch(
                                      changeInCart({
                                        id: cart.id,
                                        qty: e.target.value,
                                      })
                                    )
                                  }
                                  className="appearance-none border outline-none w-full h-full text-center"
                                  type="text"
                                  name=""
                                  id="quantity"
                                />
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(increaseInCart({ id: cart.id }))
                                }
                                id="plus"
                                className="rounded-e border flex items-center justify-center  w-7 h-7"
                              >
                                <HiOutlinePlus />
                              </button>
                            </>
                          )}
                        </div>

                        <span
                          onClick={() =>
                            dispatch(removeFromCart({ id: cart.id }))
                          }
                          title="REMOVE FROM CART "
                          className=" h-5 w-5 flex items-center justify-center cursor-pointer text-xl"
                        >
                          <CiTrash />
                        </span>
                      </div>

                      <div className=" w-max ">
                        ${(cart.price * cart.qty).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                {giftBox.map((gift) => (
                  <Giftwrap key={gift.id} {...gift} />
                ))}
              </div>

              <div className="w-full lg:w-[380px] p-4 bg-light flex flex-col gap-2">
                <span className="text-xs md:text-sm ">
                  ADD SPECIAL INSTRUCTIONS FOR YOUR ORDER
                </span>
                <textarea
                  className=" outline-none rounded-md px-4 py-2 placeholder:font-normal placeholder:text-sm"
                  placeholder="Add Special instructions for your order"
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                ></textarea>

                <div className="py-3 flex flex-col gap-2 bg-light relative ">
                  <span className="text-xs text-center flex items-center gap-2  w-full">
                    <span className=" text-xl">
                      <HiOutlineTruck />
                    </span>
                    <span className="flex items-center gap-1 font-[500]">
                      YOUR ORDER IS ELIGIBLE FOR FREE DELIVERY
                    </span>
                  </span>
                  <span className="progress"></span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="uppercase text-sm ">coupon code</span>
                  <input
                    type="text"
                    className="p-2  bg-white outline-none rounded-md"
                  />
                  <span className="text-xs md:text-sm  text-gray-500">
                    Coupon code will be applied on the checkout page
                  </span>
                </div>

                <div className="flex flex-col gap-2 py-2 mt-3">
                  <div className="flex uppercase items-center justify-between font-[700] text-[15px]">
                    <span>Total</span>
                    <span id="cartTotal">
                      $
                      {cartState
                        .reduce(
                          (oldTotal, cart) => cart.qty * cart.price + oldTotal,
                          0
                        )
                        .toLocaleString()}
                    </span>
                  </div>
                  <div className=" text-sm flex justify-between items-center italic">
                    <span>You're saving:</span>
                    <span>$15.00</span>
                  </div>
                  <Link
                    to={"/checkout"}
                    href=""
                    className="text-center py-2 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-full"
                  >
                    proceed to checkout
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div
            id="emptyCart"
            className="flex justify-center h-full py-8 pb-24 items-center flex-col gap-8"
          >
            <span className="text-2xl">Your Cart</span>
            <span className="text-7xl text-gray-400">
              <BsCart3 />
            </span>
            <span className="text-sm">
              No products in the Cart.
              <Link className="underline">Continue Shhopping</Link>
            </span>

            <div className="flex flex-col items-center mt-5">
              <span className=" text-2xl">Have an account?</span>
              <span className="text-sm">
                <Link to={"/account"} className="underline">
                  Log in
                </Link>
                <span>to check out faster.</span>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
