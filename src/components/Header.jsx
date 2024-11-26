import React, { useState } from "react";
import { sideBarLinks } from "../data/Links";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoChevronForward } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { dropdown } from "../data/dropdown";
import { LiaShoppingBagSolid } from "react-icons/lia";
export default function Header({ toggleCartBar }) {
  const [sideBarShow, setsideBarShow] = useState(false);
  const [drop, setDrop] = useState(false);

  const wishState = useSelector((state) => state.wishlist);
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);

  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-center lg:justify-between bg-black text-white p-2 text-xs px-4">
          <div className="hidden lg:flex gap-1">
            AVAILABLE 24/7 AT{" "}
            <a className="text-white hover:underline" href="tel:+566 4444 9940">
              +566 4444 9940
            </a>
          </div>
          <a className="text-white hover:underline" href="tel:+566 4444 9940">
            Contact Us: info@voguwears.store
          </a>
        </div>
        <nav
          id="headerNav"
          className="border flex items-center justify-between py-3.5 px-4 bg-white"
        >
          <div className="flex items-center gap-3">
            <span
              onClick={() => setsideBarShow(!sideBarShow)}
              className="lg:hidden cursor-pointer h-6 w-6 flex items-center justify-center text-lg"
            >
              <FaBarsStaggered />
            </span>
            <Link
              key={1}
              to={"/"}
              className="text-2xl lg:text-3xl font-semibold"
            >
              VogueWears
            </Link>
          </div>

          {/* NAVBAR LINKS */}
          <div className="hidden items-center gap-6 lg:flex font-medium text-sm uppercase">
            <Link to={"/"} className="cursor-pointer hover:text-primary">
              Home
            </Link>
            <span
              className="cursor-pointer"
              onMouseOver={() => setDrop(true)}
              onMouseOut={() => setDrop(false)}
            >
              <span className=" hover:text-primary ">Categories</span>

              <section
                className={` transition items-center justify-between absolute  w-full  z-[100] left-0 bg-white h-[300px] gap-4 p-4 ${
                  drop ? "flex" : "hidden"
                }
                `}
              >
                {dropdown.map((card) => (
                  <Link
                    key={card.id}
                    to={card.path}
                    className="dropdown relative flex flex-col gap-2 h-full w-full  items-center cursor-pointer group "
                  >
                    <div className="overflow-hidden rounded-lg w-full">
                      <img
                        src={card.image}
                        alt=""
                        className="h-[300px] w-full object-cover hover:scale-[1.19] "
                      />
                    </div>
                    <span className="font-medium absolute top-4 left-4 py-1 px-2 bg-primary text-white text-xs capitalize group-hover:bg-dark">
                      {card.name}
                    </span>
                  </Link>
                ))}
              </section>
            </span>
            <Link to={"/about"} className="cursor-pointer hover:text-primary">
              About
            </Link>
            <Link to={"/contact"} className="cursor-pointer hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {userState ? (
              <Link
                to={"/dashboard"}
                title="DASHBOARD"
                className="cursor-pointer  text-lg h-6 w-6 flex items-center justify-center"
              >
                <HiOutlineUserCircle className="text-xl lg:text-2xl" />
              </Link>
            ) : (
              <Link
                to={"/account/login"}
                title="ACCOUNT"
                className="cursor-pointer  text-lg h-6 w-6 flex items-center justify-center"
              >
                <HiOutlineUser className="text-xl" />
              </Link>
            )}
            <Link
              to={"/wishlist"}
              title="WISHLIST"
              className="cursor-pointer  text-lg h-6 w-6 flex items-center justify-center relative"
            >
              {wishState.length ? <span className="bluePulse"></span> : ""}
              <IoIosHeartEmpty />
            </Link>
            <span
              onClick={toggleCartBar}
              title="CART"
              className="relative text-xl cursor-pointer h-6 w-6 flex items-center justify-center"
            >
              <LiaShoppingBagSolid />
              <span
                className="bg-black text-white rounded-full h-4 min-w-4 flex items-center justify-center text-xs absolute -right-1 -top-2 font-semibold"
                id="cartLabel"
              >
                {cartState.length}
              </span>
            </span>
          </div>
        </nav>
      </header>

      {/* SIDEBAR */}
      <section
        className={`sidebar"
      className="flex flex-col fixed  ${
        sideBarShow ? "left-0" : "-left-full"
      } top-0 w-[300px] bg-white h-full z-20 shadow transition-all`}
      >
        <div
          onClick={() => setsideBarShow(!sideBarShow)}
          className="h-10 w-10 bg-black text-white absolute text-xl flex items-center justify-center -right-10 top-11 cursor-pointer"
        >
          <IoMdClose />
        </div>

        <div className="flex items-center w-full text-center uppercase text-sm font-normal">
          <div className="w-full cursor-pointer">MENU</div>
          <div className="w-full cursor-pointer bg-black text-white p-2">
            categories
          </div>
        </div>

        <div className="flex  text-black flex-col overflow-y-scroll uppercase">
          <div id="sidebarLinks">
            {sideBarLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="flex items-center w-full justify-between p-4 border-b"
              >
                <span className="text-sm font-normal">{link.name}</span>
                <span className="text-[13px]">
                  <IoChevronForward />
                </span>
              </Link>
            ))}
          </div>
          <div className="p-4 flex items-start flex-col gap-1 ">
            <span className="uppercase text-sm font-semibold">need help?</span>
            <span className="text-xs font-normal">Call: +41 525 523 5687</span>
          </div>
        </div>
      </section>

      {/* CARTBAR  */}
    </>
  );
}
