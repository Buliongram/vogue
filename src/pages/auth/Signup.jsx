import React, { useRef, useState } from "react";
import Paginator from "../../components/Paginator";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    toast.loading("Please wait for account creation...", { id: "123" });
    try {
      const sendRequest = await fetch("http://localhost:3000/auth/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(signupInputs),
      });

      const res = await sendRequest.json();
      console.log({ res });
      if (res.error) toast.error(res.message, { id: "123" });
      else {
        toast.success(res.message, { id: "123" });
        setTimeout(() => {
          navigate("/account/login");
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
        className={`flex  flex-col gap items-center gap-6  w-full p-4 py-6 lg:px-28 lg:py-20`}
      >
        <span className="text-2xl font-medium">Create an Account</span>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              onChange={handleSignupChange}
              value={signupInputs.firstname}
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
            />
            <input
              onChange={handleSignupChange}
              value={signupInputs.lastname}
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
            />
          </div>
          <input
            onChange={handleSignupChange}
            value={signupInputs.email}
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
          />
          <input
            onChange={handleSignupChange}
            value={signupInputs.country}
            type="text"
            name="country"
            required
            placeholder="Country"
            className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
          />
          <input
            onChange={handleSignupChange}
            value={signupInputs.password}
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
          />
          <button
            className="md:text-sm text-xs font-medium bg-dark px-6 w-full 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary outline-none"
            type="submit"
          >
            SUBMIT
          </button>
          <span className="text-sm w-full text-center">
            Already have an account?
            <Link
              to={"/account/login"}
              className="text-primary cursor-pointer font-medium"
            >
              &nbsp;Sign In
            </Link>
          </span>
        </form>
      </section>
    </>
  );
}
