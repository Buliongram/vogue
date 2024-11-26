import React, { useEffect, useRef } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import {
  changeInCart,
  decreaseInCart,
  increaseInCart,
  removeFromCart,
} from "../features/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartBar({ showCartBar, setshowCartBar }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const location = useLocation();

  const prevPath = useRef(location.pathname);
  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      setshowCartBar(false);
    }
    prevPath.current = location.pathname;
  }, [location.pathname, setshowCartBar]);
  return (
    <section
      id="cartCont"
      className={`${
        showCartBar ? "right-0" : "-left-full"
      } fixed z-20 top-0 w-full h-full bg-gray-900 bg-opacity-50 transition-all`}
    >
      <div
        id="cartBar"
        className={`fixed ${
          showCartBar ? "right-0" : "-right-full"
        } z-20  w-[400px] max-w-full border top-0 bg-white h-full overflow-y-scroll`}
      >
        {/* HIDE CARTBAR */}
        <span
          onClick={() => setshowCartBar()}
          className="absolute top-3 right-4 cursor-pointer w-7 h-7 flex items-center justify-center border border-dashed border-primary   text-xl"
        >
          <IoMdClose />
        </span>

        {cartState.length ? (
          <>
            <div id="cartContent" className="px-4 py-3">
              <div className="font-semibold text-gray-800">
                Your Cart
                <span className="font-bold">
                  (<span id="cartLabel"> {cartState.length}</span>)
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-3">
                <div id="cartWrap" className="flex flex-col gap-3 divide-y">
                  {cartState.map((cart) => (
                    <div
                      key={cart.id}
                      className="flex  gap-3 items-start justify-start py-2 w-full "
                    >
                      {cart.increase ? (
                        <span className="h-[100px] w-[150px]">
                          <img
                            className="h-full w-full object-cover"
                            src={cart.image}
                            alt={cart.name}
                          />
                        </span>
                      ) : (
                        <Link
                          to={`/collection/${cart.id}`}
                          key={cart.id}
                          className="h-[100px] w-[150px]"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={cart.image}
                            alt={cart.name}
                          />
                        </Link>
                      )}
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
                                  className="rounded-s flex items-center justify-center border w-7 h-7"
                                >
                                  <HiOutlineMinus />
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
                                  className="rounded-e flex items-center justify-center border w-7 h-7"
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
                            className=" h-5 w-5 flex text-lg items-center justify-center cursor-pointer"
                          >
                            <CiTrash />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 border-t py-2 mt-3">
                  <div className="flex items-center justify-between font-bold text-[15px]">
                    <span className="text-lg">Total</span>
                    <span id="cartTotal">
                      {" "}
                      $
                      {cartState
                        .reduce(
                          (oldTotal, cart) => cart.qty * cart.price + oldTotal,
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
              <BsCart3 />
            </span>
            <span className="text-sm">No products in the Cart</span>
            <Link
              className="py-2 mt-3 px-4 bg-gray-900 text-white rounded-md uppercase text-sm hover:bg-primary"
              to={"/fashion"}
            >
              Continue shopping
            </Link>

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
    </section>
  );
}
