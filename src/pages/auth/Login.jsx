import React, { useState } from "react";
import Paginator from "../../components/Paginator";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "../../features/slices/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.loading("Please wait for account creation...", { id: "123" });
    try {
      const sendRequest = await fetch("http://localhost:3000/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInputs),
      });

      const res = await sendRequest.json();
      console.log({ res });
      if (res.error) toast.error(res.message, { id: "123" });
      else {
        dispatch(updateUser(res.user));
        toast.success(res.message, { id: "123" });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1300);
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.message, { id: "123" });
    }
  };

  return (
    <>
      <Paginator />

      <section
        className={`flex flex-col items-center gap-6  w-full p-4 lg:px-28 lg:py-20`}
      >
        <span className="text-2xl font-medium">My Account</span>
        <main className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="w-full border p-6 h-[300px]">
            <div className="flex flex-col gap-5 w-full">
              <span className="text-lg font-medium">LOGIN</span>
              <span className="text-[13px]">
                If you have an account with us, please log in.
              </span>
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-4 w-full"
              >
                <input
                  onChange={handleLoginChange}
                  value={loginInputs.email}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                />
                <input
                  onChange={handleLoginChange}
                  value={loginInputs.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                />
                <div className="flex items-center justify-between">
                  <button
                    className="md:text-sm text-xs font-medium bg-dark px-6 w-max 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary outline-none"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                  <span className="text-[13px] cursor-pointer hover:text-primary">
                    Forgot your password?
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full border flex flex-col gap-8 p-6 h-[300px]">
            <span className="text-lg font-medium">NEW CUSTOMER?</span>
            <span className="text-[13px]">
              Registering for this site allows you to access your order status
              and history. We’ll get a new account set up for you in no time.
              For this will only ask you for information necessary to make the
              purchase process faster and easier
            </span>
            <Link
              to={"/account/signup"}
              className="md:text-sm text-xs font-medium bg-dark px-6 w-max 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary"
              type="submit"
            >
              CREATE AN ACCOUNT
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
