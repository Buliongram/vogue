import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "date-fns";

export default function ConfirmedOrder({ handleLogOut }) {
  const params = useParams();
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  const findOrder = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/order/findOrder?orderId=${params.id}`
      );

      const data = await response.json();
      setOrders(JSON.parse(data.order.orderData));
      setOrderDetails(data.order);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserAddress = async () => {
    try {
      const res = await fetch("http://localhost:3000/address/getUserAddress", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        handleLogOut();
        setTimeout(() => {
          navigate(0);
        }, 100);
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

  useEffect(() => {
    getUserAddress();

    findOrder();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <section className="mt-6 flex flex-col lg:flex-row gap-10  lg:p-8 py-8 w-full">
        <main
          className="w-full flex flex-col items-start gap-6 p-4
         lg:p-8"
        >
          <h1 className="text-xl md:text-2xl font-main font-black text-left lg:leading-loose leading-loose">
            Thank you. Your order has been received.
          </h1>
          <span className="text-xs md:text-sm text-left">
            Your order will be confirmed once you have completed your payment .
            We will email a confirmation when we have confirmed your order
          </span>

          <section className="flex flex-col gap-2 items-start text-[13px]">
            <h1 className="text-lg font-medium">Billing Address</h1>
            <div className="flex items-center gap-3">
              <span>Firstname:</span>
              <span className="text-gray-500">{address?.firstname}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Lastname:</span>
              <span className="text-gray-500">{address?.lastname}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Address:</span>
              <span className="text-gray-500">{address?.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Phone Number:</span>
              <span className="text-gray-500">{address?.primaryPhone}</span>
            </div>
            {address?.information ? (
              <div className="flex items-center gap-3">
                <span>Additional Info:</span>
                <span className="text-gray-500">{address?.information}</span>
              </div>
            ) : (
              ""
            )}
          </section>

          <a
            href={`/dashboard/orders/${params.id}`}
            type="submit"
            className="text-center outline-none py-3 px-8  bg-primary text-white rounded-md uppercase text-xs hover:bg-primary w-max"
          >
            Track Your Order
          </a>
        </main>

        {/* ORDER SUMMARY */}
        <main className="w-full bg-gray-100 p-4 rounded-lg lg:p-8 flex flex-col items-start gap-5">
          <h1 className="text-xs font-main font-black">Order Summary</h1>

          <section className="flex items-center w-full gap-4 py-3 border-t border-gray-400">
            <div className="flex flex-col items-start w-full gap-1">
              <span className="text-[13px] text-gray-500">Date</span>
              <span className="text-xs font-medium">
                {formatDate(
                  new Date(orderDetails.createdAt),
                  "dd MMM yyyy hh:mma"
                )}
              </span>
            </div>

            <div className="flex flex-col items-start w-full gap-1">
              <span className="text-[13px] text-gray-500">Order Number</span>
              <span className="text-xs font-medium">{params.id}</span>
            </div>

            <div className="flex flex-col items-start w-full gap-1">
              <span className="text-[13px] text-gray-500">Payment Method</span>
              <span className="text-xs font-medium capitalize">
                {orderDetails.paymentMethod}
              </span>
            </div>
          </section>

          <section className="w-full py-4 border-t border-dashed border-gray-500 flex flex-col items-start gap-3 ">
            {orders ? (
              <>
                {orders.map((order) => (
                  <main key={order.id} className="flex justify-between w-full">
                    <section className="flex items-start gap-4">
                      <main className="h-[50px] w-[50px] rounded-lg border">
                        <img
                          src={order?.image}
                          alt={"kponmo sauce"}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </main>
                      <div className="flex flex-col gap-1 items-start">
                        <span className="text-sm font-medium">
                          {order?.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          Quantity: {order?.qty}
                        </span>
                      </div>
                    </section>
                    <span className="text-sm font-medium">
                      &#8358;{" "}
                      {Number(order?.qty * order?.price).toLocaleString()}
                    </span>
                  </main>
                ))}
              </>
            ) : (
              ""
            )}
          </section>

          <section
            className="w-full py-4 border-t 
           border-gray-300 flex   flex-col items-start gap-3 text-xs text-gray-500 "
          >
            <main className="flex items-center justify-between w-full">
              <span>Sub Total</span>
              <span>
                &#8358;
                {orders
                  .reduce(
                    (oldTotal, cart) => cart.qty * cart.price + oldTotal,
                    0
                  )
                  .toLocaleString()}
              </span>
            </main>
            {orderDetails.checkoutType == "delivery" ? (
              <main className="flex items-center justify-between w-full">
                <span>Delivery Fee</span>
                <span>&#8358; 300</span>
              </main>
            ) : (
              ""
            )}
            <main className="flex items-center justify-between w-full">
              <span>Tax</span>
              <span>&#8358; 20</span>
            </main>
          </section>
          <section
            className="w-full py-4 border-t 
           border-gray-300 flex items-center justify-between text-lg font-semibold"
          >
            <span>Order Total</span>
            <span>
              &#8358;
              {orders
                .reduce(
                  (oldTotal, cart) => cart.qty * cart.price + oldTotal + 2000,
                  0
                )
                .toLocaleString()}
            </span>
          </section>
        </main>
      </section>
    </>
  );
}
