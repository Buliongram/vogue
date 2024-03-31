import React, { useEffect, useState } from "react";
import { france, germany, ukflag } from "../assets/images";
import { navLinks, sideBarLinks } from "../data/Links";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInCart,
  decreaseInCart,
  increaseInCart,
  removeFromCart,
} from "../features/slices/cartSlice";

export default function Header() {
  const [sideBarShow, setsideBarShow] = useState(false);
  const [showCartBar, setshowCartBar] = useState(false);
  const location = useLocation();
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      setshowCartBar(false);
      setsideBarShow(false);
    };
  }, [location.pathname]);

  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-center lg:justify-between bg-black text-white p-2 text-xs px-4">
          <div className="hidden lg:flex gap-1">
            AVAILABLE 24/7 AT{" "}
            <a className="text-white hover:underline" href="tel:+566 4444 9940">
              +566 4444 9940
            </a>
          </div>
          <div className="">FREE DELIVERY ON ORDERS OVER $120. DON’T MISS.</div>
          <div className="hidden lg:flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer">
              <div>
                <img src={ukflag} alt="" width={18} />
              </div>
              <div>ENGLISH</div>
              <div className="">
                <i className="fa-light fa-chevron-down"></i>
              </div>
            </span>
            <span className="flex items-center gap-1 cursor-pointer">
              <div>USD</div>
              <div>$</div>
              <div className="">
                <i className="fa-light fa-chevron-down"></i>
              </div>
            </span>
          </div>
        </div>
        <nav
          id="headerNav"
          className="border flex items-center justify-between py-2 px-4 bg-white"
        >
          <div className="flex items-center gap-3">
            <span
              onClick={() => setsideBarShow(!sideBarShow)}
              className="lg:hidden cursor-pointer h-6 w-6 flex items-center justify-center text-lg"
            >
              <i className="fa fa-bars"></i>
            </span>
            <Link key={1} to={"/"} className="text-[30px] font-semibold">
              Vogue
            </Link>
          </div>

          {/* NAVBAR LINKS */}
          <div className="hidden items-center gap-6 lg:flex font-semibold text-sm uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="cursor-pointer hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span
              title="SEARCH"
              className="cursor-pointer h-6 w-6 flex items-center justify-center"
            >
              <i className="fa-light fa-search"></i>
            </span>
            <span
              title="ACCOUNT"
              className="cursor-pointer h-6 w-6 flex items-center justify-center"
            >
              <i className="fa-light fa-user"></i>
            </span>
            <span
              title="WISHLIST"
              className="cursor-pointer h-6 w-6 flex items-center justify-center"
            >
              <i className="fa-light fa-heart"></i>
            </span>
            <span
              onClick={() => setshowCartBar(!showCartBar)}
              title="CART"
              className="relative cursor-pointer h-6 w-6 flex items-center justify-center"
            >
              <i className="fa-light fa-shopping-cart"></i>
              <span
                className="bg-black text-white rounded-full h-4 min-w-4 flex items-center justify-center text-xs absolute -right-1 -top-2 font-semibold"
                id="cartLabel"
              >
                {cartState.length}
              </span>
            </span>
          </div>
        </nav>
      </header>

      {/* SIDEBAR */}
      <div
        className={`sidebar"
      className="flex flex-col fixed ${
        sideBarShow ? "left-0" : "-left-full"
      } top-0 w-[300px] bg-white h-full z-20 shadow`}
      >
        <div
          onClick={() => setsideBarShow(!sideBarShow)}
          className="h-10 w-10 bg-black text-white absolute text-xl flex items-center justify-center -right-10 top-11 cursor-pointer"
        >
          <i className="fa fa-xmark"></i>
        </div>

        <div className="flex items-center w-full text-center uppercase text-sm font-normal">
          <div className="w-full cursor-pointer">MENU</div>
          <div className="w-full cursor-pointer bg-black text-white p-2">
            categories
          </div>
        </div>

        <div className="flex  text-black flex-col overflow-y-scroll uppercase">
          <div id="sidebarLinks">
            {sideBarLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="flex items-center w-full justify-between p-4 border-b"
              >
                <span className="text-sm font-semibold">{link.name}</span>
                <span className="text-[11px]">
                  <i className="fa-light fa-chevron-right"></i>
                </span>
              </Link>
            ))}
          </div>
          <div className="p-4 flex items-start flex-col gap-1 ">
            <span className="uppercase text-sm font-semibold">need help?</span>
            <span className="text-xs font-[400]">Call: +41 525 523 5687</span>
          </div>
          <div className="py-3 px-4 text-sm font-bold capitalize bg-light">
            Language
          </div>
          <div className="flex items-center justify-between p-4 text-capitalize text-xs">
            <span className="flex cursor-pointer items-center gap-1 opacity-30">
              <img src={ukflag} alt="" width={20} />

              <span>English</span>
            </span>
            <span className="flex cursor-pointer items-center gap-1">
              <img src={france} alt="" width={20} />
              <span>Français</span>
            </span>
            <span className="flex cursor-pointer items-center gap-1">
              <img src={germany} alt="" width={20} />
              <span>Deutsch</span>
            </span>
          </div>
          <div className="py-3 px-4 text-sm font-bold capitalize bg-light">
            Currency
          </div>
          <div className="flex gap-4 items-center flex-wrap uppercase text-sm p-4">
            <div className="flex items-center gap-1">Aud $</div>
            <div className="flex items-center gap-1">cny ¥</div>
            <div className="flex items-center gap-1">eur €</div>
            <div className="flex items-center gap-1">gbp £</div>
            <div className="flex items-center gap-1">inr ₹</div>
            <div className="flex items-center gap-1 opacity-30">usd $</div>
          </div>
        </div>
      </div>

      {/* CARTBAR  */}
      <div
        id="cartCont"
        className={`${
          showCartBar ? "right-0" : "-left-full"
        } fixed z-20 top-0 w-full h-full bg-gray-900 bg-opacity-50`}
      >
        <div
          id="cartBar"
          className={`fixed ${
            showCartBar ? "right-0" : "-right-full"
          } z-20  w-[400px] border top-0 bg-white h-full overflow-y-scroll`}
        >
          {/* HIDE CARTBAR */}
          <span
            onClick={() => setshowCartBar(!showCartBar)}
            className="absolute top-3 right-4 cursor-pointer w-7 h-7 flex items-center justify-center  text-xl"
          >
            <i className="fa-light fa-xmark"></i>
          </span>

          {cartState.length ? (
            <>
              {" "}
              <div id="cartContent" className="px-4 py-3">
                <div className="font-semibold text-gray-800">
                  Your Cart
                  <span className="font-bold">
                    (<span id="cartLabel"> {cartState.length}</span>)
                  </span>
                </div>

                <div className="flex flex-col gap-1 mt-3">
                  <div className="py-3 px-4 flex flex-col gap-2 bg-light relative">
                    <span className="text-xs text-center">
                      <span>
                        <i className="fa-light fa-truck"></i>
                      </span>
                      <span>
                        YOUR ORDER IS ELIGIBLE FOR
                        <span className="font-semibold">FREE DELIVERY</span>.
                      </span>
                    </span>
                    <span className="progress"></span>
                  </div>

                  <div id="cartWrap" className="flex flex-col gap-3 divide-y">
                    {cartState.map((cart) => (
                      <div className="flex  gap-3 items-start justify-start py-2 w-full ">
                        <span className="h-[100px] w-[150px]">
                          <img
                            className="h-full w-full object-cover"
                            src={cart.image}
                            alt={cart.name}
                          />
                        </span>
                        <div className="flex flex-col gap-[4px] items-start text-sm w-full">
                          <span className="text-sm">{cart.name}</span>
                          <span className="text-gray-400">Size: L</span>
                          <div className="flex items-center justify-between w-full font-semibold">
                            <span>${(cart.price * 1).toLocaleString()}.00</span>
                            <span>
                              ${(cart.price * cart.qty).toLocaleString()}.00
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex">
                              {cart.increase ? (
                                ""
                              ) : (
                                <>
                                  {" "}
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
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 border-t py-2 mt-3">
                    <div className="flex items-center justify-between font-[700] text-[15px]">
                      <span className="text-lg">Total</span>
                      <span id="cartTotal">
                        {" "}
                        $
                        {cartState
                          .reduce(
                            (oldTotal, cart) =>
                              cart.qty * cart.price + oldTotal,
                            0
                          )
                          .toLocaleString()}
                      </span>
                    </div>
                    <div className=" text-xs">
                      Taxes and shipping calculated at checkout
                    </div>
                    <Link
                      to={"/checkout"}
                      className="text-center py-2 mt-3 px-4 bg-gray-900 text-white rounded-md uppercase text-sm hover:bg-primary w-full"
                    >
                      proceed to checkout
                    </Link>
                    <Link
                      to={"/cart"}
                      className="border border-gray-500 hover:border-transparent text-center py-2 px-4 hover:text-white rounded-md uppercase text-sm hover:bg-gray-900 w-full"
                    >
                      view cart
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              id="cartEmpty"
              className="flex justify-center h-full items-center flex-col gap-4"
            >
              <span className="text-6xl text-gray-400">
                <i className="fa-light fa-shopping-cart"></i>
              </span>
              <span className="text-sm">No products in the Cart</span>
              <a
                className="py-2 mt-3 px-4 bg-gray-900 text-white rounded-md uppercase text-sm hover:bg-primary"
                href=""
              >
                Continue shopping
              </a>

              <div className="flex flex-col items-center mt-10">
                <span className="font-semibold">Have an account?</span>
                <span className="text-sm">
                  <a className="underline" href="">
                    Log in
                  </a>{" "}
                  <span>to check out faster.</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
