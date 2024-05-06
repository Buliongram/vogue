export const sideBarLinks = [
  {
    id: 1011,
    name: "Home",
    path: "/",
  },
  {
    id: 10312,
    name: "men",
    path: "/men",
  },
  {
    id: 10142,
    name: "women",
    path: "/women",
  },
  {
    id: 135012,
    name: "accessories",
    path: "/accessories",
  },
  {
    id: 104412,
    name: "shoes",
    path: "/shoes",
  },

  {
    id: 1013,
    name: "about",
    path: "/about",
  },
  {
    id: 1014,
    name: "contact",
    path: "/contact",
  },
];

export const navLinks = [
  {
    id: 1011,
    name: "Home",
    path: "/",
  },
  {
    id: 1014,
    name: "Categories",
    path: "#0",
  },

  {
    id: 1013,
    name: "about",
    path: "/about",
  },

  {
    id: 1015,
    name: "contact",
    path: "/contact",
  },
];

import { createSlice } from "@reduxjs/toolkit";
import {
  accessories,
  arrival1,
  arrival11,
  arrival2,
  arrival22,
  arrival3,
  arrival33,
  arrival4,
  arrival44,
  arrival5,
  arrival55,
  arrival6,
  arrival66,
  arrival7,
  arrival77,
  arrival8,
  arrival88,
  blog1,
  blog2,
  blog3,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  giftwrap,
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo6,
  logo7,
  men,
  product1,
  product2,
  product3,
  shoes,
  topseller1,
  topseller11,
  topseller2,
  topseller22,
  topseller3,
  topseller33,
  topseller4,
  topseller44,
  topseller5,
  topseller55,
  women,
} from "../assets/images";
import toast from "react-hot-toast";

export const category = [
  {
    id: "1111",
    name: "rpring forward",
    image: category1,
    path: "/new-arrivals",
  },
  {
    id: "11112",
    name: "bold moves",
    image: category2,
    path: "/new-arrivals",
  },
  {
    id: "11113",
    name: "online exclusives",
    image: category3,
    path: "/new-arrivals",
  },
  {
    id: "11114",
    name: "spotlight",
    image: category4,
    path: "/new-arrivals",
  },
  {
    id: "11115",
    name: "fresh wears",
    image: category5,
    path: "/new-arrivals",
  },
  {
    id: "11116",
    name: "significate",
    image: category6,
    path: "/new-arrivals",
  },
  {
    id: "11117",
    name: "trendy",
    image: category7,
    path: "/new-arrivals",
  },
  {
    id: "11118",
    name: "supreme",
    image: category8,
    path: "/new-arrivals",
  },
];

export const productList = [
  {
    id: "10001",
    name: "High Waisted Cotton Pant",
    price: 200,
    image: product1,
  },
  {
    id: "10002",
    name: "Polka Pot Band Straw Hat",
    price: 80,
    image: product2,
  },
  {
    id: "10003",
    name: "High Heel Black Sandal",
    price: 120,
    image: product3,
  },
];

export const footerInfoLinks = [
  {
    id: "1122223",
    name: "Home",
    path: "/",
  },
  {
    id: "112223",
    name: "My Account ",
    path: "/account",
  },
  {
    id: "112224",
    name: "My Cart",
    path: "/cart",
  },

  {
    id: "112229",
    name: "Contact Us",
    path: "/contact",
  },
  {
    id: "112r229",
    name: "About Us",
    path: "/about",
  },
];

export const footerCustomerLinks = [
  {
    id: "1112233",
    name: "Privacy Policy",
    path: "/Privacy",
  },
  {
    id: "1112212",
    name: "Terms & Conditions",
    path: "/Terms",
  },
  {
    id: "1112223",
    name: "Shipping & Returns",
    path: "/account",
  },
  {
    id: "1121224",
    name: "Help & FAQs",
    path: "/cart",
  },
  {
    id: "112211256",
    name: "Orders and Returns",
    path: "/orders",
  },
  {
    id: "1121229",
    name: "Refund Policy",
    path: "/contact",
  },
  {
    id: "112122911",
    name: "Customer Service",
    path: "/help",
  },
  {
    id: "1112229",
    name: "Refund Policy",
    path: "/contact",
  },
];

export const arrivals = [
  {
    id: "5336734234341211",
    name: "Everyday Tube Top Ribbed",
    price: 180,
    colors: "",
    image: [arrival1, arrival11],
    fullstar: true,
  },
  {
    id: "53367342343412122",
    name: "Long Maxi Dress",
    price: 70,
    colors: "",
    image: [arrival2, arrival22],
    selling: "Best Selling!",
    onestar: true,
  },
  {
    id: "53367342343412123",
    name: "Solid Cargo Pant",
    price: 90,
    colors: "",
    image: [arrival3, arrival33],
    onestar: true,
  },
  {
    id: "53367342343412124",
    name: "Knee Length Denim Skirts",
    oldPrice: 90,
    price: 65,
    colors: "",
    image: [arrival4, arrival44],
    sale: "Sale",
    nostar: true,
  },
  {
    id: "53367342343412125",
    name: "Crossbody Bag with Chain Strap",
    price: 140,
    image: [arrival5, arrival55],
    nostar: true,
  },
  {
    id: "53367342343412126",
    name: "Toe Slip-On Shoes Black",
    price: 85,
    image: [arrival6, arrival66],
    fullstar: true,
  },
  {
    id: "53367342343412127",
    name: "Polo Solid Short Jumpsuits",
    price: 100,
    image: [arrival7, arrival77],
    onestar: true,
  },
  {
    id: "53367342343412128",
    name: "Tokyo Short Floral Dress",
    price: 140,
    image: [arrival8, arrival88],
    onestar: true,
  },
];

export const more = [
  {
    id: "110022",
    name: "women",
    full: true,
    image: women,
    path: "/fashion",
  },
  {
    id: "110000",
    name: "men",
    full: true,
    image: men,
    path: "/men",
  },
  {
    id: "11002222",
    name: "shoes",
    full: false,
    image: shoes,
    path: "/newarrivals",
  },
  {
    id: "11002322",
    name: "accessories",
    full: false,
    image: accessories,
    path: "/accessories",
  },
];

export const logoList = [
  {
    id: "111",
    image: logo1,
  },
  {
    id: "112",
    image: logo2,
  },
  {
    id: "113",
    image: logo3,
  },
  {
    id: "114",
    image: logo4,
  },
  {
    id: "115",
    image: logo6,
  },
  {
    id: "116",
    image: logo7,
  },
  {
    id: "117",
    image: logo10,
  },
];

export const topSeller = [
  {
    id: "00000222",
    name: "high heel black sandal",
    price: 120,
    image: [topseller1, topseller11],
    nostar: true,
  },
  {
    id: "01111111",
    name: "Zip-Up Sweatshirt with Hood",
    price: 80,
    image: [topseller2, topseller22],
    nostar: true,
  },
  {
    id: "33333333",
    name: "Lula Multicolor Long Dress",
    price: 90,
    image: [topseller3, topseller33],
    fullstar: true,
  },
  {
    id: "2222233",
    name: "Blue Full Rim Wayfarer",
    price: 350,
    image: [topseller4, topseller44],
    nostar: true,
  },
  {
    id: "22314",
    name: "Long Sleeve Top Black",
    price: 40,
    image: [topseller5, topseller55],
    fullstar: true,
  },
];

export const giftBox = [
  {
    id: 913993,
    name: "Gift Wrapping",
    price: 5,
    image: giftwrap,
    button: true,
    increase: true,
  },
];

export const blogs = [
  {
    id: "83902480",
    name: "Spotlights the new role models",
    image: blog1,
  },
  {
    id: "8390248550",
    name: "Fresh work outfits for new year",
    image: blog2,
  },
  {
    id: "835ee5902480",
    name: " Match outfits with other significant",
    image: blog3,
  },
];
