import React, { useState } from "react";
import { banner, fashionbanner } from "../assets/newarrivals";
import { BiSolidGrid } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { PiSlidersHorizontal } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { TbCurrencyDollar } from "react-icons/tb";
import { clothing } from "../data/Clothing";
import Products from "../components/Products";

export default function Fashion() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <header className="relative h-[100px] md:h-[120px] lg:h-[170px] overflow-hidden w-full flex items-center justify-center  opacity">
        <img
          className="absolute top-0 left-0 w-full h-full -z-10 "
          src={fashionbanner}
          alt="banner"
        />
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold capitalize">
          Fashion
        </div>
      </header>
      <div className="flex items-center gap-2 text-xs  px-4 py-2">
        <span className="text-gray-500">Home</span>
        <span className="text-xs">
          <i className="fa-light fa-chevron-right"></i>
        </span>
        <span className="font-semibold">Fashion</span>
      </div>

      <section className="p-4">
        <div className="flex items-start gap-10 mt-5">
          <article
            className={`fixed lg:static ${
              showFilters ? "left-0" : " -left-full"
            } top-0  z-10 w-[270px] lg:w-[300px] bg-white p-4 overflow-y-scroll lg:overflow-hidden h-full shrink-0`}
          >
            <span
              onClick={() => setShowFilters(!showFilters)}
              className="absolute top-4 right-4 cursor-pointer z-10 text-xl lg:hidden"
            >
              <IoMdClose />
            </span>
            <div className="flex justify-center flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-[600] border-b pb-2">
                  CATEGORIES
                </span>
                <div className="flex flex-col gap-2 text-sm">
                  <span>Women</span>
                  <span>Men</span>
                  <span>Accessories</span>
                  <span>Best Sellers</span>
                  <span>Weekly Deal</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-[600] border-b pb-2">COLOR</span>
                <div className="colors flex gap-2 flex-wrap w-full lg:w-[250px]">
                  <div className="colorCrd bg-[#f5f5dc]"></div>
                  <div className="colorCrd bg-black"></div>
                  <div className="colorCrd bg-[#00bfff]"></div>
                  <div className="colorCrd bg-[#808080] border"></div>
                  <div className="colorCrd bg-[#f0e68c]"></div>
                  <div className="colorCrd bg-[#e1abb4]"></div>
                  <div className="colorCrd bg-[#f4a003]"></div>
                  <div className="colorCrd bg-[#ffc0cb]"></div>
                  <div className="colorCrd bg-[#bc75bc]"></div>
                  <div className="colorCrd bg-[#ff0000]"></div>
                  <div className="colorCrd bg-[#63aa82]"></div>
                  <div className="colorCrd bg-white"></div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-[600] border-b pb-2">PRICE</span>
                <div className="flex items-center justify-between w-[220px]">
                  <div className="flex items-center gap-2 border p-1 rounded-md w-16">
                    <span>
                      <TbCurrencyDollar />
                    </span>
                    <input
                      className="outline-none w-full text-sm"
                      value={200}
                      type="text"
                    />
                  </div>
                  <span>-</span>
                  <div className="flex items-center gap-2 border p-1 rounded-md w-16">
                    <span>
                      <TbCurrencyDollar />
                    </span>
                    <input
                      className="outline-none w-full text-sm"
                      value={200}
                      type="text"
                    />
                  </div>
                </div>
                <div className="">
                  <input
                    type="range"
                    name=""
                    min={1}
                    max={100}
                    id=""
                    className="range w-[220px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-[600] border-b pb-2">
                  PRODUCT TYPE
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Accessories</span>
                    </span>
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Skirt</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Bag</span>
                    </span>
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Sunglasses</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Dress</span>
                    </span>
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>T-Shirts</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Jeans</span>
                    </span>
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Top</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Shoes</span>
                    </span>
                    <span className="flex items-center gap-1 w-full text-sm">
                      <input type="checkbox" name="" id="skirt" />
                      <span>Watch</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <section className="w-full">
            <div className="flex items-center justify-between w-full ">
              <div
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1 w-full  text-sm font-semibold cursor-pointer md:hidden"
              >
                <span className="text-lg">
                  <PiSlidersHorizontal />
                </span>
                <span>FILTER</span>
              </div>
              <div className="w-full text-center md:text-start text-xs ">
                {
                  clothing.filter(
                    (cart) => cart.category !== true && cart.more !== true
                  ).length
                }{" "}
                items
              </div>
              <div className="flex items-center justify-end  gap-4 w-full ">
                <div className="hidden items-center gap-4 lg:flex ">
                  <span>
                    <BiSolidGrid />
                  </span>
                  <span>
                    <FaList />
                  </span>
                </div>
                <select
                  className=" w-[100px] border p-1 rounded-md outline-none cursor-pointer text-xs"
                  name="filter"
                  id="filter"
                >
                  <option value="featured" selected>
                    Featured
                  </option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="hightolow">Price, high to low</option>
                  <option value="lowtohigh">Price , low to high</option>
                </select>
              </div>
            </div>

            <main className="w-full mt-5">
              <div className="newArrivals">
                {clothing
                  .filter(
                    (cart) => cart.category !== true && cart.more !== true
                  )
                  .map((cart) => (
                    <Products key={cart.id} {...cart} />
                  ))}
              </div>
              <div className="text-sm mt-10">
                If you desire a bit of luxury in life and wish to take your
                style game up a notch, we bring you Vogue Fashion Luxe– a
                segment that offers head-turning styles and statement
                accessories to all luxury connoisseurs including Men, Women, and
                Kids.
              </div>
            </main>
          </section>
        </div>
      </section>
    </>
  );
}
