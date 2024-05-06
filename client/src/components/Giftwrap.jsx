import React from "react";
import { giftBox } from "../data/Links";
import { useDispatch, useSelector } from "react-redux";
import { IoGiftOutline } from "react-icons/io5";
import { addGiftToCart } from "../features/slices/cartSlice";

export default function Giftwrap({ id, image, name, price, button, increase }) {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  const findInCart = cartState.find((el) => el.id == 913993);

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addGiftToCart({ id, image: image, name, price, button, increase })
    );
  };
  return (
    <>
      {findInCart ? (
        ""
      ) : (
        <div className="flex md:flex-row justify-center border flex-col gap-2 mt-3 md:justify-between  items-center md:items-center bg-light p-4">
          <span className="flex items-center gap-2">
            <span>
              <IoGiftOutline className="text-lg md:text-2xl" />
            </span>
            <span className="text-sm  ">
              ADD A GIFT WRAP TO YOUR ORDER, FOR $5.00
            </span>
          </span>

          <button
            onClick={handleAddCart}
            className="border border-gray-500 hover:border-transparent bg-white  text-center p-2 md:py-2 md:px-4 hover:text-white rounded-md uppercase text-sm hover:bg-gray-900 md:w-max w-[300px]"
          >
            ADD GIFT WRAP
          </button>
        </div>
      )}
    </>
  );
}
