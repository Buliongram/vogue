import React, { useRef, useState } from "react";
import { card1, card2, card3, card4, card5, card6 } from "../assets/images";
import { footerInfoLinks } from "../data/Links";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import axios from "axios";

export default function Footer() {
  const [inputs, setInputs] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Saving your email address", { id: "123" });

    try {
      const saveNewsletterMail = await fetch(
        `http://localhost:3000/email/saveNewsletterMail`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(inputs),
        }
      );
      const res = await saveNewsletterMail.json();
      if (res.error) {
        toast.error(res.message, { id: "123" });
      } else {
        toast.success(res.message, { id: "123" });
        setInputs({ email: "" });
      }
    } catch (error) {
      console.log({ error });
      toast.error("Your email couldn't be added. Please try again.", {
        id: "123",
      });
    }
  };
  return (
    <footer className="flex flex-col gap-10 p-6 lg:py-10 lg:px-32 bg-light mt-10 ">
      <section className="flex flex-col lg:flex-row gap-10">
        <section className="flex w-full flex-col gap-6 items-start">
          <span className="text-3xl font-bold">VogueWears</span>
          <span className="text-sm">
            Your one stop destination for super affordable and trendy fashion .
            We add new items to our catalogue daily . Quick Fashionista Tip –
            see something you like ? Snag it before it’s gone, things move
            quickly over here
          </span>
        </section>

        <section className="w-full flex flex-col gap-6 items-start">
          <span className="text-lg font-medium  font-main  lg:mx-auto">
            QUICK LINKS
          </span>
          <div className="flex flex-col gap-3 items-start lg:mx-auto">
            {footerInfoLinks.map((link) => (
              <Link
                to={link.path}
                key={link.id}
                className=" relative footerLink text-sm lg:text-[16px]  w-max"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">NEWSLETTER</span>
            <span className="text-sm">
              Enter your email to receive daily news and get 20% off coupon for
              all items. NO spam, we promise
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            id="formInput"
            className="bg-white rounded-xl overflow-hidden flex items-center justify-between w-full "
            action=""
          >
            <input
              onChange={handleChange}
              required
              value={inputs.email}
              name="email"
              className="p-2.5 px-4 rounded-s-lg  w-full outline-none border-0 bg-transparent"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="bg-gray-900 rounded-e-xl text-sm w-max uppercase text-white h-full py-3 px-4"
            >
              subscribe
            </button>
          </form>
        </section>
      </section>
      <section className="flex md:flex-row gap-3 items-center justify-between flex-col">
        <span className="text-sm  font-medium">
          © VogueWears {new Date().getFullYear()}. All Rights Reserved.
        </span>
        <div className="flex items-center gap-2">
          <img src={card1} width={30} alt="" />
          <img src={card2} width={30} alt="" />
          <img src={card3} width={30} alt="" />
          <img src={card4} width={30} alt="" />
          <img src={card5} width={30} alt="" />
          <img src={card6} width={30} alt="" />
        </div>
      </section>
    </footer>
  );
}
