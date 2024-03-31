import React, { useState } from "react";
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

export default function Footer() {
  const [linkShow, setLinkShow] = useState(false);
  const [linkToggle, setlinkToggle] = useState(false);

  return (
    <footer className="flex flex-col gap-6 p-4 py-10 mb-10 md:mb-0 bg-light ">
      <div className="flex md:flex-row md:gap-0 items-start justify-between flex-col">
        <div className="flex flex-col gap-3 w-full  text-sm m">
          <span className="text-5xl font-semibold flex items-start">vogue</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            dolorum quibusdam harum totam explicabo! Fuga maxime debitis nostrum
            quos corporis cum id fugit tempore voluptates.
          </span>
          <div className="flex flex-col gap-2 text-sm">
            <span className="uppercase font-semibold">Keep in touch </span>
            <span className="flex items-center gap-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-8 md:mt-0 w-full border-b pb-4  py-2 border-t  md:border-0  md:items-center">
          <div
            className="flex items-center justify-between  text-sm font-semibold cursor-pointer"
            onClick={() => setlinkToggle(!linkToggle)}
          >
            <span>INFORMATION</span>
            <span className="md:hidden text-xs">
              <i className="fa-light fa-chevron-down "></i>
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

        <div className="flex flex-col gap-3 w-full border-b  py-2 border-t md:border-0  md:items-center">
          <div
            className="flex items-center justify-between gap-4 text-sm font-semibold cursor-pointer"
            onClick={() => setLinkShow(!linkShow)}
          >
            <span>CUSTOMER SERVICE</span>
            <span className="md:hidden">
              <i className="fa-light fa-chevron-down"></i>
            </span>
          </div>
          <div
            className={`flex flex-col gap-2 text-sm transition-all ${
              linkShow ? "" : "max-h-0 overflow-hidden"
            } md:max-h-full`}
          >
            {footerCustomerLinks.map((link) => (
              <Link to={link.path} key={link.id} className="hover:underline">
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
            id="formInput"
            className="bg-white shadow-sm rounded-lg overflow-hidden flex items-center justify-between w-[380px] md:w-full"
            action=""
          >
            <input
              className="p-2 rounded-s-lg  w-full outline-none border-0 bg-transparent"
              type="email"
              placeholder="Email Address"
            />
            <button
              className="bg-gray-900 rounded-e-lg text-sm w-[100px] uppercase text-white h-full py-[0.6rem] px-4
                "
            >
              subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex md:flex-row gap-3 items-center justify-between flex-col">
        <div className="text-sm">&copy; 2024 Vogue. All Rignts Reserved.</div>
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
