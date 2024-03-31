import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error";
import Home from "./pages/Home";

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
      ],
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </>
  );
}
