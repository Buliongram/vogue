import React, { lazy, Suspense, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import toast, { Toaster } from "react-hot-toast";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import Fashion from "./pages/Fashion";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Women from "./pages/Women";
import SingleCollection from "./pages/SingleCollection";
import WishList from "./pages/WishList";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Shoes from "./pages/Shoes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { updateUser } from "./features/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CartBar from "./components/CartBar";
/////////////////////////////////////////

// DASHBOARD PAGES ROUTES
const Dashboard = lazy(() => import("./DASHBOARD/PAGES/Dashboard"));
const Account = lazy(() => import("./DASHBOARD/PAGES/Account"));
const ShowOrder = lazy(() => import("./DASHBOARD/PAGES/ShowOrder"));
const Address = lazy(() => import("./DASHBOARD/PAGES/Address"));
const UpdateAddress = lazy(() => import("./DASHBOARD/PAGES/UpdateAddress"));
const ConfirmedOrder = lazy(() => import("./DASHBOARD/PAGES/ConfirmedOrder"));
const Orders = lazy(() => import("./DASHBOARD/PAGES/Orders"));
const Saved = lazy(() => import("./DASHBOARD/PAGES/Saved"));
const Inbox = lazy(() => import("./DASHBOARD/PAGES/Inbox"));
const CreateAddress = lazy(() => import("./DASHBOARD/PAGES/CreateAddress"));

///////////////////////////////////////////

export default function App() {
  const [showCartBar, setShowCartBar] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) toast.error(data.message, { id: "123" });
      else {
        dispatch(updateUser(null));
        localStorage.removeItem("vogueWearsUser");
      }
    } catch (error) {
      toast.error(`Unable to process your request`, { id: "123" });
    }
  };
  function PageLayout() {
    return (
      <>
        <Suspense
          fallback={
            <div className="w-screen h-screen bg-primary text-white grid place-items-center font-bold text-xl md:text-3xl">
              Loading...
            </div>
          }
        >
          <Header toggleCartBar={() => setShowCartBar(!showCartBar)} />
          <CartBar showCartBar={showCartBar} setshowCartBar={setShowCartBar} />
          <Outlet />
          <Footer />
        </Suspense>
      </>
    );
  }

  function DashboardLayout() {
    const activeUser = useSelector((state) => state.user);
    if (!activeUser) {
      return <Navigate to={"/"} />;
    } else {
      return (
        <>
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-primary text-white grid place-items-center font-bold text-xl md:text-3xl">
                Loading...
              </div>
            }
          >
            <Header toggleCartBar={() => setShowCartBar(!showCartBar)} />{" "}
            <CartBar
              showCartBar={showCartBar}
              setshowCartBar={setShowCartBar}
            />
            <Outlet />
            <Footer />
          </Suspense>
        </>
      );
    }
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
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/checkout",
          element: <Checkout handleLogOut={() => handleLogOut()} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },

        // CATEGORIES /////////////////////////////////////////////////
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
          path: "/shoes",
          element: <Shoes />,
        },
        {
          path: "/accessories",
          element: <Accessories />,
        },
        {
          path: "/women",
          element: <Women />,
        },

        ///////////////////////////////////////////////////////
        {
          path: "/collections/:id",
          element: <Collections />,
        },
        {
          path: "/collection/:id",
          element: <SingleCollection />,
        },

        // AUTH ROUTES ///////////////////////////////////////////////////

        {
          path: "/account/login",
          element: <Login />,
        },
        {
          path: "/account/signup",
          element: <Signup />,
        }, ///////////////////////////////////////////////////

        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard handleLogOut={() => handleLogOut()} />,
        },
        {
          path: "/dashboard/account",
          element: <Account handleLogOut={() => handleLogOut()} />,
        },
        {
          path: "/dashboard/orders",
          element: <Orders />,
        },
        {
          path: "/dashboard/inbox",
          element: <Inbox />,
        },
        {
          path: "/dashboard/saved-items",
          element: <Saved />,
        },
        {
          path: "/dashboard/address-book",
          element: <Address />,
        },
        {
          path: "/dashboard/address/create",
          element: <CreateAddress handleLogOut={() => handleLogOut()} />,
        },
        {
          path: "/dashboard/address/update",
          element: <UpdateAddress />,
        },
        {
          path: "/dashboard/orders/:id",
          element: <ShowOrder />,
        },

        {
          path: "/dashboard/orderConfirmed/:id",
          element: <ConfirmedOrder handleLogOut={() => handleLogOut()} />,
        },
      ],
      errorElement: (
        <>
          <Header />
          <Error />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </>
  );
}
