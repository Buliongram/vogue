import React, { useEffect, useState } from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { formatDate } from "date-fns";
import { FaOpencart } from "react-icons/fa6";
export default function Orders() {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderCont, setOrderCont] = useState(true);

  const getOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/order/getOrders", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      setOrders(data.order);
      // setOrdersData(JSON.parse(data.order[0].orderData));
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
    getOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <section className="lg:p-12 py-8 flex flex-col md:flex-row gap-6  w-full">
      <Sidebar />

      <section className="p-4 rounded-2xl border w-full flex flex-col gap-8">
        <h1 className="text-sm min-[900px]:text-lg lg:text-2xl text-left font-main font-semibold">
          My Orders
        </h1>

        {!orders.length ? (
          <section className="p-4 flex flex-col items-center justify-center gap-5 lg:max-w-[60%] w-full mx-auto">
            <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
              <FaOpencart className="text-primary text-5xl" />
            </div>
            <span className="text-[16px]">You have placed no orders yet!</span>
            <span className="text-[13px] text-gray-500 text-center">
              All your orders will be saved here for you to access their state
              anytime.
            </span>
            <Link
              to={"/menu"}
              type="submit"
              className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
            >
              Browse Menu
            </Link>
          </section>
        ) : (
          <section className="lg:p-4 flex flex-col items-start gap-5  w-full">
            <main className="w-full flex items-center gap-4 text-sm uppercase font-medium text-gray-600">
              <span
                onClick={() => setOrderCont(true)}
                className={`px-2 w-full  lg:w-max text-xs lg:text-sm py-2 border-b-2 ${
                  orderCont
                    ? "border-primary text-primary"
                    : "border-transparent"
                } cursor-pointer`}
              >
                Ongoing/Delivered (
                {orders.filter((ord) => ord.status !== "Cancelled").length})
              </span>
              <span
                onClick={() => setOrderCont(false)}
                className={`px-2 w-full  lg:w-max text-xs lg:text-sm py-2 border-b-2 ${
                  orderCont
                    ? "border-transparent "
                    : "border-primary text-primary"
                } cursor-pointer`}
              >
                Closed Orders (
                {orders.filter((ord) => ord.status == "Cancelled").length})
              </span>
            </main>

            {orderCont ? (
              orders.filter((ord) => ord.status !== "Cancelled").length ? (
                orders
                  .filter((order) => order.status !== "Cancelled")
                  .map((order, orderIndex) => {
                    const data = JSON.parse(order.orderData);

                    return (
                      <main
                        key={orderIndex}
                        className="flex justify-between flex-col min-[900px]:flex-row items-start w-full border rounded-xl p-3 md:p-4 gap-4"
                      >
                        <main className="flex gap-3 md:gap-6">
                          <div className="h-20 w-20 shrink-0 bg-gray-100 rounded-lg">
                            <img
                              src={data[0]?.image}
                              className="w-full h-full rounded-lg object-cover"
                            />
                          </div>
                          <div className="flex text-left flex-col gap-1 items-start text-xs  md:text-sm">
                            <span className="font-norm">
                              {data[0]?.name}, {data[1]?.name}, {data[2]?.name}
                              ....
                            </span>
                            <span className="text-gray-500 text-[13px]">
                              Order:&nbsp;
                              <span className="text-black">
                                {order.orderId}
                              </span>
                            </span>
                            <span
                              className={`text-[10px] text-white ${
                                order.status == "Pending"
                                  ? "bg-orange-500"
                                  : order.status == "Confirmed"
                                  ? "bg-blue-500"
                                  : order.status == "Delivered"
                                  ? "bg-primary"
                                  : ""
                              }  px-1 uppercase`}
                            >
                              {order.status}
                            </span>

                            <span className="text-[13px] text-gray-500">
                              On: &nbsp;
                              {formatDate(
                                new Date(order.createdAt),
                                "dd MMM yyyy"
                              )}
                            </span>
                          </div>
                        </main>
                        <a
                          href={`/dashboard/orders/${order.orderId}`}
                          className="text-sm uppercase text-primary font-medium"
                        >
                          see details
                        </a>
                      </main>
                    );
                  })
              ) : (
                <section className="p-4 flex flex-col items-center justify-center gap-5 lg:max-w-[60%] w-full mx-auto">
                  <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
                    <FaOpencart className="text-primary text-5xl" />
                  </div>
                  <span className="text-[16px]">
                    You have no ongoing or delivered orders
                  </span>
                  <span className="text-[13px] text-gray-500 text-center">
                    All your ongoing or delivered orders will be saved here for
                    you to access anytime.
                  </span>
                  <Link
                    to={"/menu"}
                    type="submit"
                    className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
                  >
                    Browse Menu
                  </Link>
                </section>
              )
            ) : orders.filter((ord) => ord.status == "Cancelled").length ? (
              orders
                .filter((order) => order.status == "Cancelled")
                .map((order, orderIndex) => {
                  const data = JSON.parse(order.orderData);

                  return (
                    <main
                      key={orderIndex}
                      className="flex justify-between items-start w-full border rounded-xl p-4 gap-4"
                    >
                      <main className="flex gap-6">
                        <div className="h-20 w-20 shrink-0 bg-gray-100 rounded-lg">
                          <img
                            src={data[0]?.image}
                            className="w-full h-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start text-sm">
                          <span>
                            {data[0]?.name}, {data[1]?.name}, {data[2]?.name}
                            ....
                          </span>
                          <span className="text-gray-500 text-[13px]">
                            Order:{" "}
                            <span className="text-black">{order.orderId}</span>
                          </span>
                          <span
                            className={`text-[10px] text-white bg-red-500  px-1 uppercase`}
                          >
                            {order.status}
                          </span>

                          <span className="text-[13px] text-gray-500">
                            On: &nbsp;
                            {formatDate(
                              new Date(order.createdAt),
                              "dd MMM yyyy"
                            )}
                          </span>
                        </div>
                      </main>
                      <a
                        href={`/dashboard/orders/${order.orderId}`}
                        className="text-sm uppercase text-primary font-medium"
                      >
                        see details
                      </a>
                    </main>
                  );
                })
            ) : (
              <section className="p-4 flex flex-col items-center justify-center gap-5 lg:max-w-[60%] w-full mx-auto">
                <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
                  <FaOpencart className="text-primary text-5xl" />
                </div>
                <span className="text-[16px]">
                  You have no cancelled orders
                </span>
                <span className="text-[13px] text-gray-500 text-center">
                  All your cancelled orders will be saved here for you to access
                  anytime.
                </span>
                <Link
                  to={"/menu"}
                  type="submit"
                  className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
                >
                  Browse Menu
                </Link>
              </section>
            )}
          </section>
        )}
      </section>
    </section>
  );
}
