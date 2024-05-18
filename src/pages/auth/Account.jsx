import React, { useRef, useState } from "react";
import Paginator from "../../components/Paginator";
import toast from "react-hot-toast";
import axios from "axios";


export default function Account() {
  const [form, setForm] = useState(false);
  const [signupInputs, setSignupInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const signupRef = useRef(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    toast.loading("Creating your account. Please wait.....", { id: "123" });
    try {
      const res = await axios.post(
        `http://localhost:3000/auth/signup`,
        signupInputs
      );

      const data = res.data;
      if (data.error) toast.error(data.message, { id: "123" });
      else toast.success(data.message, { id: "123" });
    } catch (error) {
      console.log({ error });
      toast.error("An unknown error occured. Please try again  ", {
        id: "123",
      });
    }
  };

  return (
    <>
      <Paginator />

      <section
        className={`${
          form ? "hidden" : "flex"
        } flex-col items-center gap-6  w-full p-4 lg:px-28 lg:py-20`}
      >
        <span className="text-2xl font-[500]">My Account</span>
        <main className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="w-full border p-6 h-[300px]">
            <div className="flex flex-col gap-5 w-full">
              <span className="text-lg font-[500]">LOGIN</span>
              <span className="text-[13px]">
                If you have an account with us, please log in.
              </span>
              <form action="" className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  name="email"
                  className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                />
                <input
                  type="password"
                  name="password"
                  className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
                />
                <div className="flex items-center justify-between">
                  <button
                    className="md:text-sm text-xs font-[500] bg-dark px-6 w-max 
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
            <span className="text-lg font-[500]">NEW CUSTOMER?</span>
            <span className="text-[13px]">
              Registering for this site allows you to access your order status
              and history. We’ll get a new account set up for you in no time.
              For this will only ask you for information necessary to make the
              purchase process faster and easier
            </span>
            <button
              onClick={() => setForm(true)}
              className="md:text-sm text-xs font-[500] bg-dark px-6 w-max 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary"
              type="submit"
            >
              CREATE AN ACCOUNT
            </button>
          </div>
        </main>
      </section>
      <section
        className={`${
          form ? "flex" : "hidden"
        }  flex-col gap items-center gap-6  w-full p-4 py-6 lg:px-28 lg:py-20`}
      >
        <span className="text-2xl font-[500]">Create an Account</span>
        <form
          ref={signupRef}
          onSubmit={handleSignup}
          className="flex flex-col gap-4"
        >
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
            placeholder="Email address"
            className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
          />
          <input
            onChange={handleSignupChange}
            value={signupInputs.password}
            type="password"
            name="password"
            placeholder="Password"
            id=""
            className="border w-full p-2 px-4 placeholder:text-[13px] outline-none focus:border-primary placeholder:text-dark rounded-md"
          />
          <button
            className="md:text-sm text-xs font-[500] bg-dark px-6 w-full 
               rounded-md md:py-2.5 py-2 text-white hover:bg-primary outline-none"
            type="submit"
          >
            SUBMIT
          </button>
          <span className="text-sm w-full text-center">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer font-[500]"
              onClick={() => setForm(false)}
            >
              Sign In
            </span>
          </span>
        </form>
      </section>
    </>
  );
}
