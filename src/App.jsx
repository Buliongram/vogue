import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import Fashion from "./pages/Fashion";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Women from "./pages/Women";
import Collection from "./pages/Collections";
import SingleCollection from "./pages/SingleCollection";
import WishList from "./pages/WishList";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Account from "./pages/auth/Account";
import Register from "./pages/auth/Register";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Shoes from "./pages/Shoes";

export default function App() {
  function PageLayout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/new-arrivals",
          element: <NewArrivals />,
        },
        {
          path: "/fashion",
          element: <Fashion />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/shoes",
          element: <Shoes />,
        },
        {
          path: "/account/register",
          element: <Register />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/accessories",
          element: <Accessories />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/collections/:id",
          element: <Collections />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/collection/:id",
          element: <SingleCollection />,
        },

        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </>
  );
}
