import {
  access1,
  access10,
  access11,
  access111,
  access112,
  access2,
  access22,
  access4,
  access44,
  access5,
  access55,
  access7,
  access77,
  access8,
  access88,
  access9,
  access99,
  accesskey,
  accessoriesbanner,
} from "../assets/accessories/accessories";
import { dropaccessories } from "../assets/dropdown";
import {
  img1,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img2,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img3,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img4,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img5,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img6,
  img60,
  img61,
  img62,
  img63,
  img64,
  img7,
  img8,
  img9,
} from "../assets/extras/extras";
import {
  fashion0,
  fashion00,
  fashion01,
  fashion011,
  fashion02,
  fashion022,
  fashion03,
  fashion033,
  fashion04,
  fashion044,
  fashion05,
  fashion055,
  fashion06,
  fashion066,
  fashion07,
  fashion077,
  fashion1,
  fashion11,
  fashion21,
  fashion211,
  fashion2111,
  fashion2112,
  fashion3,
  fashion33,
  fashion6,
  fashion66,
  fashion7,
  fashion77,
  fashion8,
  fashion88,
  fashion9,
  fashion99,
} from "../assets/fashion/fashion";
import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  product1,
  product2,
  product3,
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
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo6,
  logo7,
  giftwrap,
  men,
  women,
  shoes,
  accessories,
  blog1,
  blog2,
  blog3,
} from "../assets/images";
import {
  lv1,
  lv11,
  lv111,
  lv1111,
  lv2,
  lv22,
  lv222,
  lv3,
  lv33,
  lv333,
  lv3333,
  lv4,
  lv44,
  lv444,
  lv4444,
  lv5,
  lv55,
  lv555,
  lv5555,
  lv6,
  lv66,
  lv666,
  lv6666,
  lv7,
  lv77,
  lv777,
} from "../assets/lv";
import {
  new1,
  new11,
  new111,
  new2,
  new22,
  new222,
  new2222,
  new3,
  new33,
  new333,
  new3333,
  new4,
  new44,
  new444,
  new4444,
} from "../assets/new/new";
import { fashionbanner } from "../assets/newarrivals";

export const clothing = [
  {
    id: 2,
    name: "Spring forward",
    image: category1,
    path: "/fashion",
    category: true,
  },
  {
    id: 3,
    name: "bold moves",
    image: category2,
    path: "/new-arrivals",
    category: true,
  },
  {
    id: 4,
    name: "online exclusives",
    image: category3,
    path: "/fashion",
    category: true,
  },
  {
    id: 5,
    name: "spotlight",
    image: category4,
    path: "/new-arrivals",
    category: true,
  },
  {
    id: 6,
    name: "fresh wears",
    image: dropaccessories,
    path: "/accessories",
    category: true,
  },
  {
    id: 7,
    name: "significate",
    image: category6,
    path: "/fashion",
    category: true,
  },
  {
    id: 8,
    name: "trendy",
    image: category7,
    path: "/accessories",
    category: true,
  },
  {
    id: 9,
    name: "supreme",
    image: category8,
    path: "/new-arrivals",
    category: true,
  },
  {
    id: 10,
    name: "Everyday Tube Top Ribbed",
    oldPrice: 200,
    price: 180,
    colors: "",
    image: [arrival1, arrival11, img1, img2],
    arrivals: true,
    fullstar: true,
    women: true,
    section: "women",
  },
  {
    id: 11,
    name: "Long Maxi Dress",
    price: 70,
    colors: "",
    image: [arrival2, arrival22, img3, img4],
    arrivals: true,
    selling: "Best Selling!",
    onestar: true,
    women: true,
    section: "women",
  },
  {
    id: 12,
    name: "Solid Cargo Pant khaki",
    price: 90,
    colors: "",
    image: [arrival3, arrival33, img5, img6],
    arrivals: true,
    onestar: true,
    women: true,
    section: "women",
  },
  {
    id: 13,
    name: "Knee Length Denim Skirts",
    oldPrice: 90,
    price: 65,
    colors: "",
    image: [arrival4, arrival44, img7, img8],
    arrivals: true,
    sale: "Sale",
    nostar: true,
    women: true,
    section: "women",
    stock: 10,
  },
  {
    id: 14,
    name: "Crossbody Bag with Chain Strap",
    price: 140,
    image: [arrival5, arrival55, img9, img10],
    arrivals: true,
    nostar: true,
    accessories: true,
    section: "accessories",
    section1: "women",
    women: true,
  },
  {
    id: 15,
    name: "Toe Slip-On Shoes Black",
    oldPrice: 100,
    price: 85,
    image: [arrival6, arrival66, img11, img12],
    arrivals: true,
    fullstar: true,
    women: true,
    section: "women",
  },
  {
    id: 16,
    name: "Polo Solid Short Jumpsuits",
    price: 100,
    image: [arrival7, arrival77, img13, img14],
    arrivals: true,
    onestar: true,
  },
  {
    id: 17,
    name: "Tokyo Short Floral Dress",
    price: 140,
    image: [arrival8, arrival88, img15, img16],
    arrivals: true,
    onestar: true,
    women: true,
    section: "women",
  },
  {
    id: 18,
    name: "women",
    full: true,
    image: women,
    path: "/women",
    more: true,
    women: true,
  },
  {
    id: 19,
    name: "men",
    full: true,
    image: men,
    path: "/men",
    more: true,
  },
  {
    id: 20,
    name: "shoes",
    full: false,
    image: shoes,
    path: "/shoes",
    more: true,
  },
  {
    id: 21,
    name: "accessories",
    full: false,
    image: dropaccessories,
    path: "/accessories",
    more: true,
  },
  {
    id: 22,
    name: "high heel black sandal",
    oldPrice: 150,
    price: 120,
    image: [topseller1, topseller11, img60, img61],
    topSeller: true,
    nostar: true,
    women: true,
    section: "women",
  },
  {
    id: 23,
    name: "Zip-Up Sweatshirt with Hood",
    price: 80,
    image: [topseller2, topseller22, img48, img49],
    topSeller: true,
    nostar: true,
    men: true,

    stock: 6,
  },
  {
    id: 24,
    name: "Lula Multicolor Long Dress",
    price: 90,
    image: [topseller3, topseller33, img20, img21],
    topSeller: true,
    fullstar: true,
    women: true,
    section: "women",
  },
  {
    id: 25,
    name: "Blue Full Rim Wayfarer",
    price: 350,
    image: [topseller4, topseller44, img44, img45],
    topSeller: true,
    nostar: true,
    accessories: true,
    section: "accessories",
    section1: "women",
    stock: 4,
  },
  {
    id: 26,
    name: "Long Sleeve Top Black",
    price: 40,
    image: [topseller5, topseller55, img58, img59],
    topSeller: true,
    fullstar: true,
    women: true,
    section: "women",
  },

  {
    id: 27,
    name: "Polka Pot Band Straw Hat",
    price: 40,
    image: [access1, access11, access111, access112],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 28,
    name: "UV-Protected Oval Sunglasses",
    oldPrice: 45,
    price: 35,
    image: [access9, access99, img34, img35],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 29,
    name: "Water-Resistant Kids Watch",
    price: 60,
    image: [access2, access22, img46, img47],
    accessories: true,
    section: "accessories",
    section1: "women",
    stock: 3,
  },
  {
    id: 30,
    name: "Salda Earrings",
    price: 60,
    image: [access10, access10],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 31,
    name: "Cake Shaped Keychain",
    price: 20,
    image: [accesskey, accesskey],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 32,
    name: "Runner Women Pink Shoes",
    price: 65,
    image: [access77, access7, img56, img57],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 33,
    name: "Cap with Placement Print",
    price: 50,
    image: [access5, access55, img26, img27],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 34,
    name: "Aurora Shoulder Bag",
    price: 150,
    image: [access8, access88, img17],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 35,
    name: "Zip-through hoodie set",
    price: 80,
    image: [fashion3, fashion33, img18, img19],
  },
  {
    id: 36,
    name: "Canvas Low-Top Lace-Up Sneakers",
    oldPrice: 86,
    price: 70,
    image: [fashion1, fashion11, img22, img23],
    shoes: true,
  },
  {
    id: 37,
    name: "Shorts In Light Blue",
    price: 50,
    image: [fashion6, fashion66, img24, img25],
    stock: 16,
  },
  {
    id: 38,
    name: "Long Sleeve Top - Blue",
    price: 70,
    image: [fashion7, fashion77, img28, img29],
    section: "women",
  },
  {
    id: 39,
    name: "Women Solid Belt",
    price: 20,
    image: [fashion8, fashion88, img30, img31],
    section: "women",
  },
  {
    id: 40,
    name: "Solid Crop Top Black",
    oldPrice: 65,
    price: 50,
    image: [fashion9, fashion99, img32, img33],
    section: "women",
  },
  {
    id: 41,
    name: "Slingback with Pointed Toe-Shape",
    price: 60,
    image: [fashion0, fashion00, img36, img37],
    section: "women",
  },
  {
    id: 42,
    name: "Sports Bra Pink",
    price: 40,
    image: [fashion01, fashion011, img40, img41],
    section: "women",
  },
  {
    id: 43,
    name: "Long Sleeve Top Silver",
    price: 80,
    image: [fashion02, fashion022, img42, img43],
    section: "women",
  },
  {
    id: 44,
    name: "Relaxed Fit Hoodie",
    oldPrice: 65,
    price: 50,
    image: [fashion03, fashion033, img50, img51],
    men: true,
    section: "men",
  },
  {
    id: 45,
    name: "Runner Profoam Running Shoes",
    price: 65,
    image: [fashion04, fashion044, img54, img55],
    men: true,
    section: "men",
  },
  {
    id: 46,
    name: "Cotton Hooded Sweatshirt",
    price: 60,
    image: [fashion05, fashion055, img52, img53],
    men: true,
    section: "men",
  },
  {
    id: 47,
    name: "Wide Leg Blue Denim",
    price: 80,
    image: [fashion06, fashion066, img62, img63],
    section: "women",
  },
  {
    id: 48,
    name: "Woven Basketball Short",
    oldPrice: 65,
    price: 50,
    image: [fashion07, fashion077, img64],
    men: true,
    section: "men",
  },
  {
    id: 49,
    name: "Mini Short Dress",
    oldPrice: 120,
    price: 100,
    image: [fashion21, fashion211, fashion2111, fashion2112],
    section: "women",
  },
  {
    id: 50,
    name: "Analogue Wrist Watch",
    price: 120,
    image: [access4, access44, img38, img39],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 51,
    image: [accessoriesbanner],
    sectionImg: "accessories",
  },
  {
    id: 52,
    image: [fashionbanner],
    sectionImg: "women",
  },
];

export const clothLoop = [
  {
    id: 10,
    name: "Everyday Tube Top Ribbed",
    oldPrice: 200,
    price: 180,
    colors: "",
    image: [arrival1, arrival11, img1, img2],
    arrivals: true,
    fullstar: true,
    women: true,
    section: "women",
  },
  {
    id: 11,
    name: "Long Maxi Dress",
    price: 70,
    colors: "",
    image: [arrival2, arrival22, img3, img4],
    arrivals: true,
    selling: "Best Selling!",
    onestar: true,
    women: true,
    section: "women",
  },
  {
    id: 12,
    name: "Solid Cargo Pant khaki",
    price: 90,
    colors: "",
    image: [arrival3, arrival33, img5, img6],
    arrivals: true,
    onestar: true,
    women: true,
    section: "women",
  },
  {
    id: 13,
    name: "Knee Length Denim Skirts",
    oldPrice: 90,
    price: 65,
    colors: "",
    image: [arrival4, arrival44, img7, img8],
    arrivals: true,
    sale: "Sale",
    nostar: true,
    women: true,
    section: "women",
    stock: 10,
  },
  {
    id: 14,
    name: "Crossbody Bag with Chain Strap",
    price: 140,
    image: [arrival5, arrival55, img9, img10],
    arrivals: true,
    nostar: true,
    accessories: true,
    section: "accessories",
    section1: "women",
    women: true,
    section1: "women",
  },
  {
    id: 15,
    name: "Toe Slip-On Shoes Black",
    oldPrice: 100,
    price: 85,
    image: [arrival6, arrival66, img11, img12],
    arrivals: true,
    fullstar: true,
    women: true,
    shoes: true,
    section: "women",
  },
  {
    id: 16,
    name: "Polo Solid Short Jumpsuits",
    price: 100,
    image: [arrival7, arrival77, img13, img14],
    arrivals: true,
    onestar: true,
  },
  {
    id: 17,
    name: "Tokyo Short Floral Dress",
    price: 140,
    image: [arrival8, arrival88, img15, img16],
    arrivals: true,
    onestar: true,
    women: true,
    section: "women",
  },

  {
    id: 22,
    name: "high heel black sandal",
    oldPrice: 150,
    price: 120,
    image: [topseller1, topseller11, img60, img61],
    topSeller: true,
    nostar: true,
    women: true,
    shoes: true,
    section: "women",
  },
  {
    id: 23,
    name: "Zip-Up Sweatshirt with Hood",
    price: 80,
    image: [topseller2, topseller22, img48, img49],
    topSeller: true,
    nostar: true,
    men: true,
    section: "men",
    stock: 6,
  },
  {
    id: 24,
    name: "Lula Multicolor Long Dress",
    price: 90,
    image: [topseller3, topseller33, img20, img21],
    topSeller: true,
    fullstar: true,
    women: true,
    section: "women",
  },
  {
    id: 25,
    name: "Blue Full Rim Wayfarer",
    price: 350,
    image: [topseller4, topseller44, img44, img45],
    topSeller: true,
    nostar: true,
    accessories: true,
    section: "accessories",
    section1: "women",
    stock: 4,
  },
  {
    id: 26,
    name: "Long Sleeve Top Black",
    price: 40,
    image: [topseller5, topseller55, img58, img59],
    topSeller: true,
    fullstar: true,
    women: true,
    section: "women",
  },

  {
    id: 27,
    name: "Polka Pot Band Straw Hat",
    price: 40,
    image: [access1, access11, access111, access112],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 28,
    name: "UV-Protected Oval Sunglasses",
    oldPrice: 45,
    price: 35,
    image: [access9, access99, img34, img35],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 29,
    name: "Water-Resistant Kids Watch",
    price: 60,
    image: [access2, access22, img46, img47],
    accessories: true,
    section: "accessories",
    section1: "women",
    stock: 3,
  },
  {
    id: 30,
    name: "Salda Earrings",
    price: 60,
    image: [access10, access10],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 59,
    name: "Allure Slingback Pump",
    price: 450,
    image: [lv6, lv66, lv666, lv6666],
    women: true,
    shoes: true,
    section: "women",
  },
  {
    id: 32,
    name: "Runner Women Pink Shoes",
    price: 65,
    image: [access77, access7, img56, img57],
    section1: "women",
    shoes: true,
  },
  {
    id: 33,
    name: "Cap with Placement Print",
    price: 50,
    image: [access5, access55, img26, img27],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 34,
    name: "Aurora Shoulder Bag",
    price: 150,
    image: [access8, access88, img17],
    accessories: true,
    section: "accessories",
    section1: "women",
  },
  {
    id: 35,
    name: "Zip-through hoodie set",
    price: 80,
    image: [fashion3, fashion33, img18, img19],
  },
  {
    id: 36,
    name: "Canvas Low-Top Lace-Up Sneakers",
    oldPrice: 86,
    price: 70,
    image: [fashion1, fashion11, img22, img23],
    shoes: true,
  },
  {
    id: 37,
    name: "Shorts In Light Blue",
    price: 50,
    image: [fashion6, fashion66, img24, img25],
    stock: 16,
  },
  {
    id: 58,
    name: "Sunset Flat Comfort Mule",
    price: 800,
    image: [lv5, lv55, lv555, lv5555],
    women: true,
    shoes: true,
    section: "women",
  },

  {
    id: 38,
    name: "Long Sleeve Top - Blue",
    price: 70,
    image: [fashion7, fashion77, img28, img29],
  },
  {
    id: 39,
    name: "Women Solid Belt",
    price: 20,
    image: [fashion8, fashion88, img30, img31],
  },
  {
    id: 40,
    name: "Solid Crop Top Black",
    oldPrice: 65,
    price: 50,
    image: [fashion9, fashion99, img32, img33],
  },
  {
    id: 41,
    name: "Slingback with Pointed Toe-Shape",
    price: 60,
    shoes: true,
    image: [fashion0, fashion00, img36, img37],
  },

  {
    id: 42,
    name: "Sports Bra Pink",
    price: 40,
    image: [fashion01, fashion011, img40, img41],
  },
  {
    id: 43,
    name: "Long Sleeve Top Silver",
    price: 80,
    image: [fashion02, fashion022, img42, img43],
  },
  {
    id: 57,
    name: "Damier Short-Sleeved Denim Shirt",
    price: 2000,
    image: [lv4, lv44, lv444, lv4444],
    men: true,
    section: "men",
  },
  {
    id: 60,
    name: "Laureate Platform Desert Boot",
    price: 2000,
    image: [lv7, lv77, lv777, lv7],
    women: true,
    shoes: true,
    section: "women",
  },
  {
    id: 44,
    name: "Relaxed Fit Hoodie",
    oldPrice: 65,
    price: 50,
    image: [fashion03, fashion033, img50, img51],
    men: true,
    section: "men",
  },
  // {
  //   id: 51,
  //   name: "GIVENCHY Wool & Leather Varsity Jacket",
  //   price: 3500,
  //   image: [new1, new11, new111, new1],
  //   men: true,
  //   section: "men",
  // },
  {
    id: 45,
    name: "Runner Profoam Running Shoes",
    price: 65,
    image: [fashion04, fashion044, img54, img55],
    men: true,
    shoes: true,
    section: "men",
  },
  {
    id: 46,
    name: "Cotton Hooded Sweatshirt",
    price: 60,
    image: [fashion05, fashion055, img52, img53],
    men: true,
    section: "men",
  },

  {
    id: 47,
    name: "Wide Leg Blue Denim",
    price: 80,
    image: [fashion06, fashion066, img62, img63],
  },
  {
    id: 48,
    name: "Woven Basketball Short",
    oldPrice: 65,
    price: 50,
    image: [fashion07, fashion077, img64],
    men: true,
    section: "men",
  },
  {
    id: 49,
    name: "Mini Short Dress",
    oldPrice: 120,
    price: 100,
    image: [fashion21, fashion211, fashion2111, fashion2112],
  },
  {
    id: 50,
    name: "Analogue Wrist Watch",
    price: 120,
    image: [access4, access44, img38, img39],
    accessories: true,
    section: "accessories",
    section1: "women",
  },

  {
    id: 55,
    name: "LV Initiales 40mm Reversible Belt",
    price: 2000,
    image: [lv2, lv22, lv222, lv2],
    men: true,
    accessories: true,
    section: "men",
  },

  {
    id: 56,
    name: "Speedy 25 Bandoulière",
    price: 4500,
    image: [lv3, lv33, lv333, lv3333],
    women: true,
    section: "women",
  },
];