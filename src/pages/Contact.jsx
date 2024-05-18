import React, { useRef, useState } from "react";
import Paginator from "../components/Paginator";
import { canada, contactbanner, tokyo, ukflag, usa } from "../assets/images";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Sending your message...", { id: "123" });

    try {
      const res = await axios.post(
        `http://localhost:3000/contact/save`,
        inputs
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
      <header className="relative h-[100px] text-white md:h-[120px] lg:h-[170px] overflow-hidden w-full flex items-center justify-center  opacity">
        <img
          className="absolute top-0 left-0 w-full h-full -z-10 "
          src={contactbanner}
          alt="banner"
        />
        <div className="flex items-center flex-col gap-3">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold capitalize">
            Contact Us
          </div>
          <span className="text-sm">
            We love to hear from you on our customer service
          </span>
        </div>
      </header>
      <Paginator />
      <section className="flex items-center flex-col lg:flex-row gap-10 p-4 lg:p-10">
        <main
          className="flex flex-col gap-6 items-center w-full
        "
        >
          <span className="text-lg md:text-xl lg:text-2xl font-[500]">
            Drop Us A Line
          </span>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex items-center gap-4 w-full">
              <input
                onChange={handleChange}
                required
                value={inputs.name}
                className="border w-full p-2 px-4 placeholder:text-sm outline-none focus:border-primary placeholder:text-dark"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                required
                onChange={handleChange}
                value={inputs.email}
                className="border w-full p-2 px-4 placeholder:text-sm outline-none focus:border-primary placeholder:text-dark"
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              required
              onChange={handleChange}
              value={inputs.phone}
              className="border p-2 px-4 placeholder:text-sm outline-none focus:border-primary placeholder:text-dark"
              name="phone"
              type="number"
              placeholder="Phone Number"
            />
            <input
              required
              onChange={handleChange}
              value={inputs.subject}
              className="border p-2 px-4 placeholder:text-sm outline-none focus:border-primary placeholder:text-dark"
              name="subject"
              type="text"
              placeholder="Subject"
            />
            <textarea
              required
              onChange={handleChange}
              value={inputs.message}
              className="border p-2 px-4 placeholder:text-sm outline-none focus:border-primary placeholder:text-dark"
              name="message"
              id=""
              cols="30"
              rows="7"
              placeholder="Your message"
            ></textarea>
            <button
              type="submit "
              className="text-sm font-[500] bg-dark p-2 py-2.5 text-white hover:bg-primary"
            >
              SEND MESSAGE
            </button>
          </form>
        </main>
        <main className="flex flex-col gap-6 lg:gap-10 max-w-[400px] w-full text-[12px] md:text-sm">
          <div className="flex flex-col gap-4 ">
            <span className="text-sm md:text-lg font-[500]">Address : </span>
            <span className="flex flex-col gap-3">
              <span> 55 Gallaxy Enque, 2568 steet, 23568 NY</span>
              <span>PHONE: +1 (440) 568 4568 </span>
              <span>EMAIL: sales@yousite.com </span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm md:text-lg font-[500]">
              Opening Time :{" "}
            </span>
            <span className="flex flex-col gap-3">
              <span>Mon - Sat : 9am - 11pm</span>
              <span>Sunday: 11am - 5pm</span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm md:text-lg font-[500]">
              Stay Connected
            </span>
            <div className="flex items-center gap-4 text-sm">
              <FaFacebook className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaXTwitter className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
          </div>
        </main>
      </section>

      <section className="flex flex-col gap-6 lg:gap-14 items-center mt-10 p-4">
        <span className="text-lg md:text-xl lg:text-2xl font-[500]">
          Global Offices
        </span>
        <main className="flex items-center gap-10 flex-col lg:flex-row justify-between w-full">
          <div className="w-full flex flex-col items-center gap-5 text-sm">
            <div className="flex flex-col gap-2 items-center">
              <span>
                <img className="w-[30px] md:w-[40px]" src={usa} alt="" />
              </span>
              <span className="text-lg font-semibold">United States</span>
              <span className="text-center">
                2334 Joes Road Albany, New York
              </span>
            </div>
            <span>+36 222 5741 295</span>
          </div>

          <div className="w-full flex flex-col items-center gap-5 text-sm">
            <div className="flex flex-col gap-2 items-center">
              <span>
                <img className="w-[30px] md:w-[40px]" src={canada} alt="" />
              </span>

              <span className="text-lg font-semibold">Canada</span>
              <span className="text-center">
                126 Elizabeth St Toronto, Ontario,M5G 1P5
              </span>
            </div>
            <span>(416) 977-0933</span>
          </div>

          <div className="w-full flex flex-col items-center gap-5 text-sm">
            <div className="flex flex-col gap-2 items-center">
              <span>
                <img className="w-[30px] md:w-[40px]" src={ukflag} alt="" />
              </span>

              <span className="text-lg font-semibold">London</span>
              <span className="text-center">
                5 The Broadway Wimbledon. SW19 1QD
              </span>
            </div>
            <span>+44 20 7946 0405</span>
          </div>

          <div className="w-full flex flex-col items-center gap-5 text-sm">
            <div className="flex flex-col gap-2 items-center">
              <span>
                <img className="w-[30px] md:w-[40px]" src={tokyo} alt="" />
              </span>
              <span className="text-lg font-semibold">Tokyo </span>
              <span className="text-center">
                Tokyo 312-1045, Okuda Kizukacho Inazawa-shi, Aichi
              </span>
            </div>
            <span> +7299-798-1972</span>
          </div>
        </main>
      </section>
    </>
  );
}
