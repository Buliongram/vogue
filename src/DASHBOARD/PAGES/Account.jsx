import React, { useEffect, useState } from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Account({ handleLogOut }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [passInputs, setPassInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [infoInputs, setInfoInputs] = useState({
    firstname: "",
    lastname: "",
  });

  const handleInfoInputs = (e) => {
    setInfoInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            navigate(0);
          }, 100);
          return;
        }

        const data = await res.json();
        setUser(data.user);
        setInfoInputs((prev) => ({
          ...prev,
          firstname: data.user.firstname,
          lastname: data.user.lastname,
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
    getUser();
  }, []);

  const handlePassInputs = (e) => {
    const { name, value } = e.target;
    setPassInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    toast.loading("Processing your request...", { id: "123" });

    try {
      const res = await fetch("http://localhost:3000/settings/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(passInputs),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.message, { id: "123" });
      } else {
        toast.success(data.message, { id: "123" });
        setPassInputs({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, { id: "123" });
    }
  };

  const handleInfoChange = async (e) => {
    e.preventDefault();
    toast.loading("Processing your request...", { id: "123" });

    try {
      const res = await fetch("http://localhost:3000/settings/updateInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(infoInputs),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.message, { id: "123" });
      } else {
        toast.success(data.message, { id: "123" });
        setShowForm(!showForm);
        setTimeout(() => {
          navigate(0);
        }, 500);
      }
    } catch (error) {
      console.error(error);
      toast.error("unable to process your request", { id: "123" });
    }
  };
  if (loading) return <p>Loading...</p>; // Display loading message while fetching user data

  return (
    <>
      <section className="lg:p-12 py-8 flex flex-col md:flex-row gap-6">
        <Sidebar />
        <section className="p-4 rounded-2xl border w-full">
          <h1 className="text-sm min-[900px]:text-lg text-left font-main font-black tracking-wider">
            Account Management
          </h1>
          <main className="flex flex-col gap-4 mt-10">
            <section className="flex gap-4 flex-col min-[900px]:flex-row">
              <aside className="rounded-xl flex w-full flex-col gap-4 border py-4">
                <span className="text-xs uppercase p-4 border-b text-left">
                  Profile Information
                </span>
                <div className="flex flex-col items-start px-4">
                  <span className="text-sm font-medium">Fullname</span>
                  <span className="text-[13px] text-gray-500">
                    {user?.firstname}
                  </span>
                </div>
                <div className="flex flex-col items-start px-4">
                  <span className="text-sm font-medium">Lastname</span>
                  <span className="text-[13px] text-gray-500">
                    {user?.lastname}
                  </span>
                </div>
                <div className="flex flex-col items-start px-4">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-[13px] text-gray-500">
                    {user?.email}
                  </span>
                </div>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
                >
                  Update Information
                </button>
              </aside>

              <form
                onSubmit={handleChangePassword}
                className="rounded-xl flex w-full flex-col gap-4 border py-4"
              >
                <span className="text-xs uppercase p-4 border-b text-left">
                  Password
                </span>
                <div className="flex flex-col items-start gap-2 px-4">
                  <span className="text-sm font-medium">Current Password</span>
                  <input
                    type="password"
                    name="oldPassword"
                    value={passInputs.oldPassword}
                    onChange={handlePassInputs}
                    required
                    minLength={8}
                    className="p-2 focus:border-primary rounded-md border w-full outline-none"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 px-4">
                  <span className="text-sm font-medium">New Password</span>
                  <input
                    type="password"
                    name="newPassword"
                    value={passInputs.newPassword}
                    onChange={handlePassInputs}
                    required
                    minLength={8}
                    className="p-2 focus:border-primary rounded-md border w-full outline-none"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 px-4">
                  <span className="text-sm font-medium">
                    Confirm New Password
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passInputs.confirmPassword}
                    onChange={handlePassInputs}
                    required
                    minLength={8}
                    className="p-2 focus:border-primary rounded-md border w-full outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-center outline-none py-2 mt-3 px-4 border border-primary text-primary rounded-md uppercase text-[13px] hover:bg-primary w-max ml-4"
                >
                  Change Password
                </button>
              </form>
            </section>
          </main>
        </section>
      </section>

      <section
        onClick={() => setShowForm(!showForm)}
        className={`fixed ${
          showForm ? "left-0" : "-left-full"
        } top-0 w-full h-full bg-gray-900 bg-opacity-50 cursor-pointer z-[100] `}
      ></section>

      <form
        onSubmit={handleInfoChange}
        className={`fixed ${
          showForm ? "flex" : "hidden"
        }  z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] w-full bg-white shadow-lg rounded-3xl flex-col items-center justify-center gap-8 p-8`}
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-main tracking-widest text-lg font-bold">
            Update Information
          </h1>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <span className="text-xs text-gray-500">Firstname</span>
            <input
              type="text"
              onChange={handleInfoInputs}
              value={infoInputs.firstname}
              required
              name="firstname"
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none bg-transparent placeholder:text-xs"
              placeholder="Firstname"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <span className="text-xs text-gray-500">Lastname</span>
            <input
              type="text"
              onChange={handleInfoInputs}
              value={infoInputs.lastname}
              required
              name="lastname"
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none bg-transparent placeholder:text-xs"
              placeholder="Lastname"
            />
          </div>
        </div>
        <button className="text-center outline-none py-2.5 mt-3 px-4 bg-primary text-white rounded-md uppercase text-sm hover:bg-primary w-full">
          Update
        </button>
      </form>
    </>
  );
}
