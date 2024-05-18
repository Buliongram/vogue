import React, { useState } from "react";
import Paginator from "../components/Paginator";
import {
  CiCircleQuestion,
  CiDeliveryTruck,
  CiLock,
  CiShop,
} from "react-icons/ci";
import { creditcard, women } from "../assets/images";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Checkout() {
  const [delivery, setDelivery] = useState(false);
  const cartState = useSelector((state) => state.cart);
  const shippingFee = 71;
  return (
    <>
      <Paginator />
      <section className="flex flex-col items-center gap-6">
        <span className="text-center text-3xl w-full mt-3 ">Checkout</span>

        {cartState.length ? (
          <>
            <section className="flex items-start w-full flex-col md:flex-row">
              <main className="flex flex-col gap-10 md:pl-16 p-4 md:pr-10 w-full pb-10">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-[500]">Contact</span>
                    <Link
                      to={"/account"}
                      className="text-sm underline text-primary cursor-pointer"
                    >
                      Login
                    </Link>
                  </div>
                  <input
                    className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                    type="text"
                    placeholder="Email or mobile phone number "
                  />
                  <span className="text-[13px] flex items-center gap-3">
                    <input
                      className="outline-none cursor-pointer"
                      type="checkbox"
                      name=""
                      id="saveInfo"
                    />
                    <label htmlFor="saveInfo">
                      Email me with news and offers
                    </label>
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-[500]">Delivery</span>
                  <div className="flex flex-col w-full text-sm">
                    <div
                      onClick={() => setDelivery(false)}
                      className={`flex items-center justify-between  w-full p-4 border ${
                        delivery ? "" : "bg-green-50 border-primary"
                      } cursor-pointer rounded-t-md`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="h-4 w-4 rounded-full bg-gray-200 p-[2px] flex items-center justify-center">
                          {delivery ? (
                            ""
                          ) : (
                            <span className="h-full w-full rounded-full bg-primary"></span>
                          )}
                        </span>
                        <span>Ship</span>
                      </div>
                      <CiDeliveryTruck className="text-xl" />
                    </div>
                    <div
                      onClick={() => setDelivery(true)}
                      className={`flex items-center justify-between  w-full p-4 border ${
                        delivery ? "bg-green-50 border-primary" : ""
                      }  cursor-pointer rounded-b-md`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="h-4 w-4 rounded-full bg-gray-200 p-[2px] flex items-center justify-center">
                          {delivery ? (
                            <span className="h-full w-full rounded-full bg-primary"></span>
                          ) : (
                            ""
                          )}
                        </span>
                        <span>Pick up</span>
                      </div>
                      <CiShop className="text-xl" />
                    </div>
                  </div>
                  <main
                    className={`${
                      delivery ? "hidden" : "flex"
                    } flex-col gap-4 mt-6`}
                  >
                    <select
                      className="border w-full py-3 cursor-pointer px-4 text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md appearance-none"
                      name=""
                      id=""
                    >
                      <option value="usa">United States</option>
                      <option value="austria">Austria</option>
                      <option value="usa">Canada</option>
                    </select>
                    <div className="flex items-center gap-4">
                      <input
                        placeholder="First Name"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                      <input
                        placeholder="Last Name"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                    </div>
                    <input
                      placeholder="Address"
                      className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                      type="text"
                    />
                    <input
                      placeholder="Apartment, suite, etc. (optional)"
                      className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                      type="text"
                    />
                    <div className="flex items-center gap-4">
                      <input
                        placeholder="City"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                      <input
                        placeholder="State"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                      <input
                        placeholder="Zip code"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="number"
                      />
                    </div>
                    <span className="text-[13px] flex items-center gap-3">
                      <input
                        className="outline-none cursor-pointer"
                        type="checkbox"
                        name=""
                        id="saveInfo"
                      />
                      <label htmlFor="saveInfo">
                        Save this information for next time
                      </label>
                    </span>
                  </main>
                  <main
                    className={`${
                      delivery ? "flex " : "hidden"
                    } flex-col gap-3 mt-5`}
                  >
                    <span className="text-sm font-[500]">Pickup Locations</span>
                    <span className="text-[13px]">
                      There is 1 store with stock close to your location
                    </span>
                    <div className="flex flex-col gap-1 p-4 border border-primary rounded-md bg-green-50">
                      <span className="flex items-center justify-between text-xs font-semibold">
                        <span>Shop location</span>
                        <span>Free</span>
                      </span>
                      <span className="flex items-start justify-between">
                        <span className="text-xs">
                          Silverstone Arcade 37 Singanpor Road Riddhi Siddhi
                          Society Singanpor, Surat GJ
                        </span>
                        <span className="text-xs w-max shrink-0">
                          Usually ready in 24 hours
                        </span>
                      </span>
                    </div>
                  </main>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-[500]">Payment</span>
                  </div>

                  <span className="text-[13px]">
                    All transactions are secure and encrypted.
                  </span>

                  <form action="" className="flex flex-col">
                    <span className="flex items-center justify-between p-4 border border-primary rounded-t-md bg-green-50">
                      <span className="text-[13px]">Credit card</span>
                      <span>
                        <img src={creditcard} alt="" />
                      </span>
                    </span>
                    <div className="flex flex-col gap-4 p-4 py-6 bg-gray-50 border rounded-b-md">
                      <div className="flex items-center border bg-white px-4 rounded-md hover:border-primary">
                        <input
                          placeholder="Card number"
                          className=" w-full py-2.5 placeholder:text-[13px] outline-none placeholder:text-dark "
                          type="number"
                        />
                        <CiLock className="text-xl" />
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          placeholder="Expiration date (MM/YY)"
                          className="border w-full p-2.5 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="number"
                        />

                        <div className="flex items-center border px-3 hover:border-primary rounded-md">
                          <input
                            placeholder="Security code"
                            className=" w-full py-2.5  placeholder:text-[13px] outline-none placeholder:text-dark "
                            type="number"
                            max={3}
                          />
                          <CiCircleQuestion className="text-xl" />
                        </div>
                      </div>
                      <input
                        placeholder="Name on card"
                        className="border w-full p-2.5 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                    </div>

                    <main
                      className={`${
                        delivery ? "flex" : "hidden"
                      } flex-col gap-4 mt-6`}
                    >
                      <span className="text-sm font-[500]">
                        Billing Address
                      </span>
                      <select
                        className="border w-full py-3 cursor-pointer px-4 text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md appearance-none"
                        name=""
                        id=""
                      >
                        <option value="usa">United States</option>
                        <option value="austria">Austria</option>
                        <option value="usa">Canada</option>
                      </select>
                      <div className="flex items-center gap-4">
                        <input
                          placeholder="First Name (optional)"
                          className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                        />
                        <input
                          placeholder="Last Name"
                          className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                        />
                      </div>
                      <input
                        placeholder="Address"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                      <input
                        placeholder="Apartment, suite, etc. (optional)"
                        className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                        type="text"
                      />
                      <div className="flex items-center gap-4">
                        <input
                          placeholder="Postl code"
                          className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                        />
                        <input
                          placeholder="City"
                          className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                        />
                      </div>
                    </main>

                    <button
                      className="md:text-sm text-xs font-[500] bg-primary px-6 w-full 
               rounded-md md:py-2.5 py-2 text-white hover:bg-dark outline-none mt-7"
                      type="submit"
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              </main>

              <main className="max-w-[550px] w-full p-10 bg-gray-50 ">
                <div className="flex flex-col gap-5">
                  {cartState.map((cart) => (
                    <Link
                      to={`/collection/${cart.id}`}
                      className="flex items-center justify-between text-[13px]"
                    >
                      <span className="flex items-start gap-6">
                        <span className="h-16 w-16 border shrink-0 relative">
                          <img
                            src={cart.image}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                          <span
                            className="absolute bg-black text-white bg-opacity-50 h-5 w-5 rounded-full flex items-center justify-center -right-2 -top-2
                    "
                          >
                            {cart.qty}
                          </span>
                        </span>
                        <span className=" max-w-[390px] font-[500]">
                          {cart.name}
                        </span>
                      </span>
                      <span>
                        ${(cart.price * cart.qty).toLocaleString()}.00
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <input
                    className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button
                    className="md:text-sm text-xs font-[500] bg-dark px-6 w-max 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary outline-none"
                  >
                    Apply
                  </button>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[13px]">Subtotal</span>
                  <span className="text-sm font-semibold">
                    $
                    {cartState
                      .reduce(
                        (oldTotal, cart) => cart.qty * cart.price + oldTotal,
                        0
                      )
                      .toLocaleString()}
                    .00
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[13px]">Shipping</span>
                  <span className="text-sm font-semibold">$71.00</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-[500]">Total</span>
                  <span className="text-lg font-semibold">
                    $
                    {cartState
                      .reduce(
                        (oldTotal, cart) =>
                          cart.qty * cart.price + oldTotal + shippingFee,
                        0
                      )
                      .toLocaleString()}
                    .00
                  </span>
                </div>
              </main>
            </section>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
