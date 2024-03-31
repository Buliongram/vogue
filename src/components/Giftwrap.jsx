import React from "react";
import { giftBox } from "../data/Links";
import { useDispatch } from "react-redux";
import { addGiftToCart } from "../features/slices/cartSlice";

export default function Giftwrap({ id, image, name, price, button, increase }) {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addGiftToCart({ id, image: image, name, price, button, increase })
    );
  };
  return (
    <div className="flex md:flex-row flex-col gap-2 mt-3 justify-between  items-start md:items-center bg-light p-4">
      <span className="flex items-center gap-2">
        <span>
          <i className="fa-light fa-gift"></i>
        </span>
        <span className="text-sm font-semibold">
          ADD A GIFT WRAP TO YOUR ORDER, FOR $5.00
        </span>
      </span>

      <button
        onClick={handleAddCart}
        className="border border-gray-500 hover:border-transparent bg-white  text-center py-2 px-4 hover:text-white rounded-md uppercase text-sm hover:bg-gray-900 w-max"
      >
        ADD A GIFT WRAP
      </button>
    </div>
  );
}
