import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { clothing } from "../data/Clothing";
import { Link } from "react-router-dom";

export default function Paginator() {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold px-4 py-2">
      <Link to={"/"} className="text-gray-500">
        Home
      </Link>
      <span className="text-xs">
        <IoChevronForward />
      </span>
      <span className="capitalize">
        {window.location.pathname
          .replace("/collections/", `collections  > `)
          .replace("/", "")}
      </span>
    </div>
  );
}
