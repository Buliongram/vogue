import React, { useEffect, useState } from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import toast from "react-hot-toast";
import { PiMapPin, PiPencil, PiPhone, PiUserCircle } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";

export default function Dashboard({ handleLogOut }) {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/settings/getUser", {
          method: "GET",
          credentials: "include",
        });

        // Ensure response is OK
        if (!res.ok) {
          handleLogOut();
          setTimeout(() => {
            navigate();
          }, 100);
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

    const getUserAddress = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/address/getUserAddress",
          {
            method: "GET",
            credentials: "include",
          }
        );
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

    getUserAddress();

    getUser();
  }, []);
  if (loading) return <p>Loading...</p>; // Display loading message while fetching user data

  return (
    <section className="lg:p-12 py-8 flex flex-col md:flex-row gap-6  w-full">
      <Sidebar />

      <section className="p-4 rounded-2xl border w-full">
        <h1 className="text-lg lg:text-2xl text-left font-main font-semibold">
          Account Overview
        </h1>

        <main className="flex flex-col gap-4 mt-10 ">
          <section className="flex flex-col lg:flex-row  gap-4">
            <aside className=" rounded-xl flex w-full flex-col gap-4 border py-4">
              <span className="tetxt-xs uppercase p-4 border-b text-left">
                Acount Details
              </span>
              <div className="flex flex-col gap-3  items-start p-4">
                <span className="text-sm font-medium">
                  {user?.firstname} {user?.lastname}
                </span>
                <span className="text-[13px] text-gray-500 ">
                  {user?.email}
                </span>
              </div>
            </aside>

            <aside className=" rounded-xl flex w-full flex-col  border py-4">
              <span className="tetxt-xs uppercase p-4 border-b text-left">
                ADDRESS BOOK
              </span>
              {address ? (
                <>
                  <section className=" flex flex-col items-start pt-4 gap-4 max-w-[400px] bg-gray-100">
                    <div className="flex items-center gap-2 px-4">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                        <PiUserCircle className="text-lg" />
                      </div>
                      <span className="text-[16px] capitalize ">
                        {address?.firstname} {address?.lastname}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                        <HiMapPin className="text-lg" />
                      </div>
                      <span className="text-sm text-gray-500">
                        {address?.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                        <PiPhone className="text-lg" />
                      </div>
                      <span className="text-sm text-gray-500">
                        {address?.primaryPhone}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                        <PiMapPin className="text-lg" />
                      </div>
                      <span className="text-sm text-gray-500">
                        {address?.region}
                      </span>
                    </div>
                    <div className="p-4 border w-full bg-white mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Update Address</span>
                        <Link to={"/dashboard/address/update"}>
                          <PiPencil className="text-2xl" />
                        </Link>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <div className="flex flex-col gap-3  items-start p-4">
                  <span className="text-sm font-medium">
                    Your default shipping address:
                  </span>
                  <span className="text-[13px] text-gray-500 ">
                    No default shipping address available.
                  </span>
                </div>
              )}

              {address ? (
                ""
              ) : (
                <span className="text-sm uppercase text-primary text-left p-4">
                  Add default address
                </span>
              )}
            </aside>
          </section>
        </main>
      </section>
    </section>
  );
}
