import React, { useEffect, useState } from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function UpdateAddress() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addressInputs, setAddressInputs] = useState({
    firstname: "",
    lastname: "",
    primaryPhone: "",
    secondaryPhone: "",
    region: "",
    address: "",
    information: "",
  });
  const navigate = useNavigate();

  const handleAddressInputs = (e) => {
    setAddressInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddressUpdate = async (e) => {
    e.preventDefault();
    toast.loading("Updating address. Please wait...", { id: "123" });
    try {
      const sendRequest = await fetch(
        "http://localhost:3000/address/updateAddress",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(addressInputs),
        }
      );

      const res = await sendRequest.json();
      console.log({ res });
      if (res.error) toast.error(res.message, { id: "123" });
      else {
        toast.success(res.message, { id: "123" });
        navigate("/dashboard/address-book");
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.message, { id: "123" });
    }
  };

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

        if (!data.address) {
          navigate("/dashboard/address-book");
        }
        setAddressInputs((prev) => ({
          ...prev,
          firstname: data.address.firstname,
          lastname: data.address.lastname,
          primaryPhone: data.address.primaryPhone,
          secondaryPhone: data.address.secondaryPhone,
          region: data.address.region,
          address: data.address.address,
          information: data.address.information,
        }));
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
      <section className="lg:p-12 py-8 flex-col md:flex-row flex gap-6">
        <Sidebar />

        <form
          onSubmit={handleAddressUpdate}
          className="p-4 rounded-2xl border w-full flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <Link to={"/dashboard/address-book"}>
              <FaArrowLeftLong className="text-xl" />
            </Link>
            <h1 className="text-lg lg:text-2xl text-left font-main font-semibold">
              Update Address
            </h1>
          </div>

          <section className="md:p-4 items-center justify-center w-full mx-auto flex flex-col gap-6">
            <main className="flex items-center flex-col min-[900px]:flex-row gap-4 min-[900px]:gap-8 w-full">
              <div className="flex flex-col w-full items-start gap-1">
                <span className="text-xs text-gray-500">Firstname</span>
                <input
                  name="firstname"
                  required
                  onChange={handleAddressInputs}
                  value={addressInputs.firstname}
                  type="text"
                  placeholder="Enter your firstname"
                  className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col w-full items-start gap-1">
                <span className="text-xs text-gray-500">Lastname</span>
                <input
                  name="lastname"
                  required
                  onChange={handleAddressInputs}
                  value={addressInputs.lastname}
                  type="text"
                  placeholder="Enter your lastname"
                  className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
                />
              </div>
            </main>

            <main className="flex items-center flex-col min-[900px]:flex-row gap-4 min-[900px]:gap-8 w-full">
              <section className="flex gap-8 w-full">
                <main className="flex flex-col  items-start gap-1">
                  <span className="text-xs text-gray-500">Prefix</span>
                  <span className=" mt-2 text-[16px]">+234</span>
                </main>
                <main className="flex flex-col w-full items-start gap-1">
                  <span className="text-xs text-gray-500">Phone Number</span>
                  <input
                    name="primaryPhone"
                    required
                    onChange={handleAddressInputs}
                    value={addressInputs.primaryPhone}
                    placeholder="Enter your phone number"
                    type="number"
                    className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
                  />
                </main>
              </section>
              <section className="flex gap-8 w-full">
                <main className="flex flex-col  items-start gap-1">
                  <span className="text-xs text-gray-500">Prefix</span>
                  <span className=" mt-2 text-[16px]">+234</span>
                </main>
                <main className="flex flex-col w-full items-start gap-1">
                  <span className="text-xs text-gray-500">
                    Additional Phone Number
                  </span>
                  <input
                    name="secondaryPhone"
                    onChange={handleAddressInputs}
                    value={addressInputs.secondaryPhone}
                    placeholder="Enter your additional phone number"
                    type="number"
                    className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
                  />
                </main>
              </section>
            </main>

            <div className="flex flex-col w-full items-start gap-1">
              <span className="text-xs text-gray-500">Delivery Address</span>
              <input
                name="address"
                required
                onChange={handleAddressInputs}
                value={addressInputs.address}
                type="text"
                placeholder="Enter your address"
                className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
              />
            </div>

            <main className="flex items-center flex-col  min-[900px]:flex-row gap-4 min-[900px]:gap-8 w-full">
              <div className="flex flex-col w-full items-start gap-1">
                <span className="text-xs text-gray-500">Region</span>
                <select
                  name="region"
                  required
                  onChange={handleAddressInputs}
                  value={addressInputs.region}
                  className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600 appearance-none cursor-pointer"
                >
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT">Federal Capital Territory</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
              </div>

              <div className="flex flex-col w-full items-start gap-1">
                <span className="text-xs text-gray-500">
                  Additional Information
                </span>
                <input
                  name="information"
                  onChange={handleAddressInputs}
                  value={addressInputs.information}
                  type="text"
                  placeholder="Enter additional information"
                  className="p-3 rounded-lg border outline-none w-full placeholder:text-sm focus:border-primary placeholder:text-gray-600"
                />
              </div>
            </main>
          </section>

          <button className="text-center outline-none py-2.5 ml-4  px-12 bg-primary text-white rounded-md uppercase text-sm hover:bg-primary w-max">
            Save information
          </button>
        </form>
      </section>
    </>
  );
}
