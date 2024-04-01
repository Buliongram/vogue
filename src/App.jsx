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
import Collection from "./pages/Collection";
import SingleCollection from "./pages/SingleCollection";

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
          path: "/new-arrival",
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
          path: "/accessories",
          element: <Accessories />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/collection",
          element: <Collection />,
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
