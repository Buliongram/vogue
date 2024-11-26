import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatDate } from "date-fns";
import toast from "react-hot-toast";

export default function ShowOrder() {
  const params = useParams();
  const [orders, setOrders] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const findOrder = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/order/findOrder?orderId=${params.id}`
      );
      // Ensure response is OK
      if (!response.ok) {
        setTimeout(() => {
          window.location.href = `/dashboard/orders`;
        }, 100);
        return;
      }
      2;

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

  const cancelOrder = async (e) => {
    e.preventDefault();
    toast.loading("Processing your request....", { id: "123" });
    try {
      const res = await fetch("http://localhost:3000/order/cancelOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ orderId: orderDetails.orderId }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.message, { id: "123" });
      } else {
        toast.success(data.message, { id: "123" });
        setTimeout(() => {
          window.location.href = `/dashboard/orders`;
        }, 500);
      }
    } catch (error) {
      // console.error("Error saving order:", error);
      toast.error("Failed to process your request", { id: "123" });
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <section className="mt-6 flex flex-col gap-10 items-start lg:p-8 lg:px-16 py-8 w-full">
        <main className="flex md:items-center gap-4 md:flex-row flex-col items-start justify-between  w-full">
          <div className="flex items-center gap-3">
            <Link
              to={"/dashboard/orders"}
              className="flex items-center justify-center border h-10 w-10 rounded-lg cursor-pointer"
            >
              <BsArrowLeft />
            </Link>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-xs text-gray-500">
                {formatDate(
                  new Date(orderDetails.createdAt),
                  "dd MMM yyyy hh:mma"
                )}
              </span>
              <span className="text-lg font-medium">
                {orderDetails.orderId}
              </span>
            </div>
          </div>

          <section className="flex items-center gap-2 ">
            <main className="rounded-lg border py-2.5 text-xs font-medium px-4">
              Status: &nbsp;
              <span
                className={`text-sm ${
                  orderDetails.status == "Pending"
                    ? "text-orange-500"
                    : orderDetails.status == "Confirmed"
                    ? "text-blue-500"
                    : orderDetails.status == "Delivered"
                    ? "text-primary"
                    : orderDetails.status == "Cancelled"
                    ? "text-red-500"
                    : ""
                }  uppercase`}
              >
                {orderDetails.status}
              </span>
            </main>
            <main className="rounded-lg bg-primary text-white border py-2.5 text-xs font-medium px-4">
              Download Invoice
            </main>
            <div className="relative">
              <span
                className="flex items-center justify-center border rounded-lg p-2 cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              >
                <FaEllipsisVertical />
              </span>
              <div
                className={`w-[200px] flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md absolute top-full right-0 z-[100] ${
                  dropdown
                    ? orderDetails.status == "Cancelled"
                      ? "hidden"
                      : '"flex"'
                    : "hidden"
                }`}
              >
                <button
                  onClick={cancelOrder}
                  className="rounded-lg bg-red-500 text-white border py-2.5 text-xs font-medium px-4"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </section>
        </main>

        <section className="flex flex-col md:flex-row w-full gap-8">
          <section className="flex flex-col w-full gap-8 items-start">
            <main className="flex flex-col items-start gap-2 w-full">
              <span className="text-[16px]">Order Details</span>
              <section className="border rounded-lg w-full p-2 ">
                <table className="w-full divide-y">
                  <thead>
                    <th>Image</th>
                    <th> Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </thead>
                  <tbody className="divide-y">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <span className="h-10 w-10 rounded-lg flex">
                            <img
                              src={order.image}
                              className="w-full h-full object-cover rounded-lg"
                              alt=""
                            />
                          </span>
                        </td>
                        <td>{order.name}</td>
                        <td>x{order.qty}</td>
                        <td>&#8358;{order.price.toLocaleString()}</td>
                        <td>
                          &#8358;{(order.price * order.qty).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </main>

            <main className="flex flex-col items-start gap-2 w-full">
              <span className="text-[16px]">Order Information</span>
              <section className="border rounded-lg w-full p-4 flex flex-col gap-5 text-xs">
                <main className="flex items-center justify-between w-full text-gray-500">
                  <span className="text-xs">Date Created</span>
                  <span className="font-medium text-black text-[13px]">
                    {formatDate(
                      new Date(orderDetails.createdAt),
                      "dd MMM yyyy hh:mma"
                    )}
                  </span>
                </main>

                <main className="flex items-center justify-between w-full text-gray-500">
                  <span className="text-xs">Order ID</span>
                  <span className="font-medium text-black text-[13px]">
                    {orderDetails.orderId}
                  </span>
                </main>

                <main className="flex items-center justify-between w-full text-gray-500">
                  <span className="text-xs">Delivery Type</span>
                  <span className="font-medium text-black text-[13px] uppercase">
                    {orderDetails.checkoutType}
                  </span>
                </main>

                <main className="flex items-center justify-between w-full black text-sm font-medium">
                  <span>Order Status</span>
                  <span
                    className={`text-[10px] text-white ${
                      orderDetails.status == "Pending"
                        ? "bg-orange-500"
                        : orderDetails.status == "Confirmed"
                        ? "bg-blue-500"
                        : orderDetails.status == "Delivered"
                        ? "bg-primary"
                        : orderDetails.status == "Cancelled"
                        ? "bg-red-500"
                        : ""
                    }  px-2 uppercase`}
                  >
                    {orderDetails.status}
                  </span>
                </main>
              </section>
            </main>
          </section>

          <section className="flex flex-col gap-8  w-full lg:max-w-[400px] justify-between">
            <main className="flex flex-col items-start gap-2  w-full">
              <span className="text-[16px]">Customer Information</span>
              <section className="border flex flex-col gap-3 rounded-lg w-full text-xs items-start p-4">
                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-gray-500">Name</span>
                  <span className="font-medium">
                    {address?.firstname} {address?.lastname}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">davidimade01@gmail.com</span>
                </div>

                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-gray-500">Delivery Address</span>
                  <span className="font-medium text-left">
                    {address?.address}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-gray-500">Phone Number</span>
                  <span className="font-medium">{address?.primaryPhone}</span>
                </div>
              </section>
            </main>

            <main className="flex flex-col items-start gap-2 w-full">
              <span className="text-[16px]">Payment</span>
              <section className="border rounded-lg w-full p-4 flex flex-col gap-3 text-xs">
                <main className="flex items-center justify-between w-full text-gray-500">
                  <div className="flex items-center gap-10">
                    <span className="text-xs">Subtotal</span>
                    <span className="text-xs">{orders.length} items</span>
                  </div>
                  <span className="font-medium text-black text-[13px]">
                    &#8358;
                    {orders
                      .reduce(
                        (oldTotal, cart) => cart.qty * cart.price + oldTotal,
                        0
                      )
                      .toLocaleString()}
                  </span>
                </main>

                <main className="flex items-center justify-between w-full text-gray-500">
                  <span className="text-xs">Delivery Fee</span>
                  <span className="font-medium text-black text-[13px]">
                    &#8358;300
                  </span>
                </main>
                <main className="flex items-center justify-between w-full text-gray-500">
                  <span className="text-xs">Payment Method</span>
                  <span className="font-medium text-black text-[13px]">
                    {orderDetails.paymentMethod}
                  </span>
                </main>

                <main className="flex items-center justify-between w-full black text-sm font-medium">
                  <span>Total Paid</span>
                  <span className="font-medium text-black text-[13px]">
                    &#8358;0
                  </span>
                </main>
              </section>
            </main>
          </section>
        </section>
      </section>
    </>
  );
}
