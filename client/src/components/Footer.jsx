import React, { useRef, useState } from "react";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  france,
} from "../assets/images";
import { footerCustomerLinks, footerInfoLinks } from "../data/Links";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoSearchOutline,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";
import axios from "axios";

export default function Footer() {
  const [linkShow, setLinkShow] = useState(false);
  const [linkToggle, setlinkToggle] = useState(false);

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
      const res = await axios.post(`http://localhost:3000/email/save`, inputs);

      const data = res.data;
      if (data.error) toast.error(data.message, { id: "123" });
      else toast.success(data.message, { id: "123" });
    } catch (error) {
      console.log({ error });
      toast.error("Your email couldn't be added . Please try again.", {
        id: "123",
      });
    }
  };
  return (
    <footer className="flex flex-col gap-6 p-4 py-10 mb-10 md:mb-0 bg-light ">
      <div className="flex md:flex-row md:gap-0 items-start justify-between flex-col">
        <div className="flex flex-col gap-3 w-full  text-sm m">
          <span className="text-5xl font-semibold flex items-start">vogue</span>
          <span>
            Your one stop destination for super affordable and trendy fashion .
            We add new items to our catalogue daily . Quick Fashionista Tip –
            see something you like ? Snag it before it’s gone, things move
            quickly over here
          </span>
          <div className="flex flex-col gap-2 text-sm">
            <span className="uppercase font-semibold">Keep in touch </span>
            <span className="flex items-center gap-4">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
            </span>
          </div>
        </div>

        <div className="flex border flex-col gap-3 mt-8 md:mt-0 w-full pb-4  py-2 border-t  md:border-0  md:items-center">
          <div
            className="flex items-center justify-between w-full text-sm font-semibold cursor-pointer"
            onClick={() => setlinkToggle(!linkToggle)}
          >
            <span className=" w-full text-center ">INFORMATION</span>
            <span className="md:hidden text-xs">
              <IoChevronDown />
            </span>
          </div>
          <div
            className={`flex flex-col gap-2 text-sm ${
              linkToggle ? "" : "max-h-0 overflow-hidden"
            } md:max-h-full`}
          >
            {footerInfoLinks.map((link) => (
              <Link key={link.id} to={link.path} className="hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col  gap-3 w-full mt-8 md:mt-0">
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
            className="bg-white shadow-sm rounded-lg overflow-hidden flex items-center justify-between w-[380px] md:w-full max-w-full"
            action=""
          >
            <input
              onChange={handleChange}
              required
              value={inputs.email}
              name="email"
              className="p-2 rounded-s-lg  w-full outline-none border-0 bg-transparent"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="bg-gray-900 rounded-e-lg text-sm w-[100px] uppercase text-white h-full py-[0.6rem] px-4
                "
            >
              subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex md:flex-row gap-3 items-center justify-between flex-col">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Vogue. All Rigts Reserved.
        </div>
        <div className="flex items-center gap-2">
          <img src={card1} width={30} alt="" />
          <img src={card2} width={30} alt="" />
          <img src={card3} width={30} alt="" />
          <img src={card4} width={30} alt="" />
          <img src={card5} width={30} alt="" />
          <img src={card6} width={30} alt="" />
        </div>
      </div>
    </footer>
  );
}
