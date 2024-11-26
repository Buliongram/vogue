import React, { useEffect, useState } from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import { Link } from "react-router-dom";
import {
  PiAddressBook,
  PiInfo,
  PiMapPin,
  PiPencil,
  PiPhone,
  PiUserCircle,
} from "react-icons/pi";
import toast from "react-hot-toast";

export default function Address() {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <section className="lg:p-12 py-8 flex flex-col md:flex-row gap-6">
        <Sidebar />

        <section className="p-4 rounded-2xl border w-full flex flex-col gap-8">
          <h1 className="text-sm min-[900px]:text-lg lg:text-2xl text-left font-main font-semibold">
            Address Book
          </h1>

          {address ? (
            <>
              <section className=" pt-6 flex flex-col items-start gap-4 max-w-[400px] bg-gray-100">
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
                    <PiMapPin className="text-lg" />
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

                {address?.secondaryPhone !== "" ? (
                  <div className="flex items-center gap-2 px-4">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                      <PiPhone className="text-lg" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {address?.secondaryPhone}
                    </span>
                  </div>
                ) : (
                  ""
                )}

                {address?.information !== "" ? (
                  <div className="flex items-center gap-2 px-4">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary text-white">
                      <PiInfo className="text-lg" />
                    </div>
                    <span className="text-sm text-gray-500 text-left">
                      {address?.information}
                    </span>
                  </div>
                ) : (
                  ""
                )}
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
            <section className="p-4 flex flex-col items-center justify-center gap-5 max-w-[60%] mx-auto">
              <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
                <PiAddressBook className="text-primary text-5xl" />
              </div>
              <span className="text-[16px]">
                You have not added any address yet!
              </span>
              <span className="text-[13px] text-gray-500 text-center">
                Add your shipping addresses for faster checkout! You can update
                or delete them anytime.
              </span>
              <Link
                to={"/dashboard/address/create"}
                type="submit"
                className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
              >
                add new address
              </Link>
            </section>
          )}
        </section>
      </section>
    </>
  );
}
