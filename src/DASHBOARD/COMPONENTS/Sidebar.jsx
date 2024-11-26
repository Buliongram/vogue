import React from "react";
import {
  BsBoxSeam,
  BsEnvelope,
  BsGear,
  BsHeart,
  BsPersonCircle,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { IoLocationOutline } from "react-icons/io5";
import { updateUser } from "../../features/slices/userSlice";

const links = [
  { to: "/dashboard", icon: <BsPersonCircle />, label: "My Account" },
  { to: "/dashboard/orders", icon: <BsBoxSeam />, label: "Orders" },
  { to: "/dashboard/inbox", icon: <BsEnvelope />, label: "Inbox" },
  { to: "/dashboard/saved-items", icon: <BsHeart />, label: "Saved Items" },
  { to: "/dashboard/account", icon: <BsGear />, label: "Account Management" },
  {
    to: "/dashboard/address-book",
    icon: <IoLocationOutline />,
    label: "Address Book",
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = async () => {
    toast.loading("Logging you out", { id: "123" });
    try {
      const res = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) toast.error(data.message, { id: "123" });
      else {
        dispatch(updateUser(null));
        localStorage.removeItem("mandyzUser");
        toast.success(data.message, { id: "123" });
        setTimeout(() => {
          navigate(0);
        }, 500);
      }
    } catch (error) {
      toast.error(`Unable to process your request`, { id: "123" });
    }
  };

  const renderLinks = () => {
    return links.map(({ to, icon, label }) => (
      <Link
        key={to}
        to={to}
        className={`flex items-center gap-2 p-3 px-4 rounded-xl ${
          location.pathname === to ? "bg-primary text-white" : " hover:bg-white"
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    ));
  };

  return (
    <section className="flex flex-col gap-3 p-3 bg-gray-100/70 rounded-2xl text-sm  md:max-w-[300px] w-full h-max shrink-0">
      {renderLinks()}
      <main className="flex flex-col gap-4 bg-white rounded-2xl p-3">
        <button
          onClick={handleLogOut}
          className="text-center outline-none py-2.5 mt-3 px-4 bg-primary text-white rounded-md uppercase text-sm hover:bg-primary w-full"
        >
          Log Out
        </button>
      </main>
    </section>
  );
}
