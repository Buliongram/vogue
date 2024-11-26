import React, { useEffect, useMemo, useState } from "react";
import Paginator from "../components/Paginator";
import { CiDeliveryTruck, CiShop } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearCart } from "../features/slices/cartSlice";
export default function Checkout({ handleLogOut }) {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState(false);
  const cartState = useSelector((state) => state.cart);
  const shippingFee = 71;
  const [user, setUser] = useState(null);
  const userState = useSelector((state) => state.user);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutType, setCheckoutType] = useState("delivery");

  const getUserAddress = async () => {
    try {
      const res = await fetch("http://localhost:3000/address/getUserAddress", {
        method: "GET",
        credentials: "include",
      });
      if (!userState) {
        toast.error("Please sign in to complete checkout", { id: "123" });
        return;
      }
      if (!res.ok) {
        checkoutType === "delivery"
          ? toast.error("Add delivery address to complete checkout", {
              id: "123",
            })
          : "";
        return;
      }

      const data = await res.json();
      setAddress(data.address);
    } catch (error) {
      console.error(error);
      toast.error(
        "Something went wrong. Please check your internet connection.",
        { id: "123" }
      );
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/settings/getUser", {
        method: "GET",
        credentials: "include",
      });

      // Ensure response is OK
      if (!res.ok) {
        handleLogOut();
        toast.error("Please sign in to complete checkout", { id: "123" });
        return;
      }

      const data = await res.json();
      setUser(data.user);
    } catch (error) {
      console.error(error);
      toast.error(
        "Something went wrong. Please check your internet connection.",
        { id: "123" }
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserAddress();
    getUser();
  }, []);

  const saveOrder = async (cartState, checkoutType, transactionRef) => {
    try {
      const res = await fetch("http://localhost:3000/order/saveOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          orderData: cartState,
          checkoutType: checkoutType,
          transactionRef: transactionRef,
        }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.message, { id: "123" });
      } else {
        toast.success(data.message, { id: "123" });
        dispatch(clearCart());
        window.location.href = `/dashboard/orderConfirmed/${data.orderId}`;
      }
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Failed to process your order", { id: "123" });
    }
  };
  const cartTotal = useMemo(
    () =>
      cartState.reduce(
        (total, cart) => cart.qty * cart.price + total + shippingFee,
        0
      ),
    [cartState]
  );

  const paystackPublicKey = "pk_test_ff0a5aed1947def2f42f5bb0c5df9ce9ecc6e6f6"; // Replace with your actual public key

  const handlePaystackPayment = (e) => {
    e.preventDefault();
    if (!userState) {
      toast.error("Please Sign in to complete checkout", { id: "123" });
      return;
    }
    if (!address) {
      toast.error("Add delivery address to complete checkout", { id: "123" });
      return;
    }

    const handler = window.PaystackPop.setup({
      key: paystackPublicKey,
      email: user.email,
      amount: cartTotal * 100,
      currency: "NGN",
      callback: (response) => {
        saveOrder(cartState, checkoutType, response.reference);
      },
      onClose: () => {
        alert("Payment process was canceled");
      },
    });
    handler.openIframe();
  };

  // Function to verify payment on backend (Optional but recommended)
  const verifyPaymentOnBackend = async (reference) => {
    try {
      const response = await fetch(`/verify-payment/${reference}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        alert("Payment verified successfully!");
      } else {
        alert("Payment verification failed.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };
  return (
    <>
      <Paginator />
      <section className="flex flex-col items-center gap-6">
        <span className="text-center text-3xl font-medium w-full mt-3 ">
          Checkout
        </span>

        {cartState.length ? (
          <>
            <section className="flex items-start w-full flex-col md:flex-row">
              <main className="flex flex-col gap-10 md:pl-16 p-4 md:pr-10 w-full pb-10">
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-medium">Delivery</span>
                  <div className="flex flex-col w-full text-sm">
                    <div
                      onClick={() => {
                        setDelivery(false);
                        getUserAddress();
                        setCheckoutType("delivery");
                      }}
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
                      onClick={() => {
                        setDelivery(true);
                        setCheckoutType("pickup");
                      }}
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

                  {address ? (
                    <section
                      className={`${
                        delivery ? "hidden " : "flex"
                      } flex-col gap-4 mt-6`}
                    >
                      <span className="text-xl font-medium text-left">
                        Billing Address
                      </span>

                      {/* ADDRESS DETAILS SECTION */}
                      <main
                        className={`${
                          delivery ? "hidden" : "flex"
                        } flex-col gap-4`}
                      >
                        <input
                          placeholder="First Name"
                          className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                          readOnly
                          value={user?.email}
                        />
                        <div className="flex items-center gap-4">
                          <input
                            placeholder="First Name"
                            className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                            type="text"
                            readOnly
                            value={address?.firstname}
                          />
                          <input
                            placeholder="Last Name"
                            className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                            type="text"
                            readOnly
                            value={address?.lastname}
                          />
                        </div>

                        <div className="flex items-center gap-4">
                          <input
                            placeholder="Phone number"
                            className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                            type="text"
                            readOnly
                            value={address?.primaryPhone}
                          />
                          <input
                            placeholder="State"
                            className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                            type="text"
                            readOnly
                            value={address?.region}
                          />
                        </div>
                        <input
                          placeholder="State"
                          className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                          type="text"
                          readOnly
                          value={address?.address}
                        />
                      </main>

                      {/* /////////////////////////////////////////////// */}
                    </section>
                  ) : !userState ? (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[16px]">Sign in to checkout</span>
                      <Link
                        to={"/account/login"}
                        className="text-sm font-normal text-primary underline cursor-pointer"
                      >
                        Sign In
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={`${
                        delivery ? "hidden" : "flex"
                      } items-center justify-between w-full mt-6`}
                    >
                      <span className="text-[16px] text-left">
                        Add delivery address to checkout
                      </span>
                      <Link
                        to={"/dashboard/address/create"}
                        className="text-sm font-normal text-primary underline cursor-pointer"
                      >
                        Add Address
                      </Link>
                    </div>
                  )}

                  {/* PICKUP LOCATION SECTION */}
                  <main
                    className={`${
                      delivery ? "flex " : "hidden"
                    } flex-col gap-3 mt-5`}
                  >
                    <span className="text-xl font-medium text-left">
                      Pickup Locations
                    </span>
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
                  {/* /////////////////////////////////////////////// */}

                  {/* BUTTON TO PROCESS ORDER */}
                  <div className="flex flex-col gap-3 items-start">
                    <form
                      onSubmit={handlePaystackPayment}
                      className="mt-3 w-full "
                    >
                      <button
                        type="submit"
                        className="text-center outline-none py-2.5  px-4 bg-primary text-white rounded-md uppercase text-sm hover:bg-primary w-full"
                      >
                        Place Order
                      </button>
                    </form>
                  </div>
                  {/* /////////////////////////////////////////////// */}
                </div>
              </main>

              {/* CART DETAILS SECTION */}
              <main className="max-w-[550px] w-full p-10 bg-gray-50 ">
                <div className="flex flex-col gap-5">
                  {cartState.map((cart) => (
                    <Link
                      key={cart.id}
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
                        <span className=" max-w-[390px] font-medium">
                          {cart.name}
                        </span>
                      </span>
                      <span>
                        &#8358;&nbsp;{(cart.price * cart.qty).toLocaleString()}
                        .00
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <input
                    className="text-sm border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button
                    className="md:text-sm text-xs font-medium bg-dark px-6 w-max 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary outline-none"
                  >
                    Apply
                  </button>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[13px]">Subtotal</span>
                  <span className="text-sm font-semibold">
                    &#8358;&nbsp;
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
                  <span className="text-sm font-semibold"> &#8358; 71.00</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-semibold">
                    &#8358; {cartTotal}.00
                  </span>
                </div>
              </main>
              {/* /////////////////////////////////////////////// */}
            </section>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
