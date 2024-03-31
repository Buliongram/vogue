import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGiftToCart,
  changeInCart,
  decreaseInCart,
  increaseInCart,
  removeFromCart,
} from "../features/slices/cartSlice";
import { giftBox } from "../data/Links";
import Giftwrap from "../components/Giftwrap";

export default function Cart({ id, image, name, price }) {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    dispatch(addGiftToCart({ id, image: image, name, price }));
  };
  return (
    <>
      <div className="flex items-center gap-4 text-sm font-semibold px-4 py-2">
        <span className="text-gray-500">Home</span>
        <span className="text-xs">
          <i className="fa-light fa-chevron-right"></i>
        </span>
        <span>Your Cart</span>
      </div>

      {cartState.length ? (
        <>
          <div id="cartView" className="flex  flex-col  my-4">
            <span className="text-center text-3xl w-full mt-3 ">Your Cart</span>
            <div className="bg-[#d6eadf] my-3 text-sm py-3 px-4 text-center flex gap-2 justify-center items-center">
              <span className="hidden md:block">
                <i className="fa-light fa-info-circle"></i>
              </span>
              Please, hurry! Someone has placed an order with same products.
              These products are limited, checkout within
            </div>

            <section className="flex flex-col md:flex-row items-start p-4 gap-0 md:gap-8">
              <div className=" flex-1 w-full">
                <div className="hidden md:flex items-center justify-between uppercase bg-light p-2 text-sm">
                  <span className=" w-full text-center">Product</span>
                  <span className=" w-full text-center">quantity</span>
                  <span className=" w-full text-center">total</span>
                </div>

                <div id="cartViewCont" className="flex-1 w-full">
                  {cartState.map((cart) => (
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex w-full items-start  gap-3">
                        <span className="h-[100px] w-[100px]">
                          <img
                            className="h-full w-full object-cover"
                            src={cart.image}
                            alt=""
                          />
                        </span>
                        <span className="flex flex-col gap-1 text-sm">
                          <span className="font-semibold">{cart.name}</span>
                          <span></span>
                          <span className="text-sm font-semibold">
                            ${cart.price}
                          </span>

                          <div className="flex md:hidden items-center gap-3">
                            <div className="flex">
                              <button
                                onClick={() =>
                                  dispatch(decreaseInCart({ id: cart.id }))
                                }
                                id="minus"
                                className="rounded-s border w-7 h-7"
                              >
                                <i className="fa-light fa-minus"></i>
                              </button>
                              <span className="border w-10 h-7">
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
                                  className="appearance-none outline-none w-full h-full text-center"
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
                                className="rounded-e border w-7 h-7"
                              >
                                <i className="fa-light fa-plus"></i>
                              </button>
                            </div>
                            <span
                              onClick={() =>
                                dispatch(removeFromCart({ id: cart.id }))
                              }
                              title="REMOVE FROM CART "
                              className=" h-5 w-5 flex items-center justify-center cursor-pointer"
                            >
                              <i className="fa-light fa-trash "></i>
                            </span>
                          </div>
                        </span>
                      </div>

                      <div className="hidden md:flex items-center w-full justify-center gap-3">
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
                                className="rounded-s border w-7 h-7"
                              >
                                <i className="fa-light fa-minus"></i>
                              </button>
                              <span className="border w-10 h-7">
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
                                  className="appearance-none outline-none w-full h-full text-center"
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
                                className="rounded-e border w-7 h-7"
                              >
                                <i className="fa-light fa-plus"></i>
                              </button>
                            </>
                          )}
                        </div>

                        <span
                          onClick={() =>
                            dispatch(removeFromCart({ id: cart.id }))
                          }
                          title="REMOVE FROM CART "
                          className=" h-5 w-5 flex items-center justify-center cursor-pointer"
                        >
                          <i className="fa-light fa-trash "></i>
                        </span>
                      </div>

                      <div className=" w-max md:w-full text-center font-semibold">
                        ${(cart.price * cart.qty).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                {giftBox.map((gift) => (
                  <Giftwrap key={gift.id} {...gift} />
                ))}
              </div>

              <div className="w-full md:w-[350px] p-4 bg-light flex flex-col gap-2">
                <span className="text-sm font-semibold">
                  ADD SPECIAL INSTRUCTIONS FOR YOUR ORDER
                </span>
                <textarea
                  className="border outline-none rounded-md px-4 py-2 placeholder:font-normal placeholder:text-sm"
                  placeholder="Add Special instructions for your order"
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                ></textarea>

                <div className="py-3 px-4 flex flex-col gap-2 bg-light relative">
                  <span className="text-xs text-center">
                    <span>
                      <i className="fa-light fa-truck"></i>
                    </span>{" "}
                    <span>
                      YOUR ORDER IS ELIGIBLE FOR{" "}
                      <span className="font-semibold">FREE DELIVERY</span>.
                    </span>
                  </span>
                  <span className="progress"></span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="uppercase text-sm font-semibold">
                    coupon code
                  </span>
                  <input
                    type="text"
                    className="p-2 border bg-white outline-none rounded-md"
                  />
                  <span className="text-sm text-gray-500">
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
                  <a
                    href=""
                    className="text-center py-2 mt-3 px-4 bg-gray-700 text-white rounded-md uppercase text-sm hover:bg-primary w-full"
                  >
                    proceed to checkout
                  </a>
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
            <span className="text-6xl text-gray-400">
              <i className="fa-light fa-shopping-cart"></i>
            </span>
            <span className="text-sm">
              No products in the Cart.
              <a href="" className="underline">
                Continue Shhopping
              </a>
            </span>

            <div className="flex flex-col items-center mt-5">
              <span className="font-semibold text-2xl">Have an account?</span>
              <span className="text-sm">
                <a className="underline" href="">
                  Log in
                </a>
                <span>to check out faster.</span>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
