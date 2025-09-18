import kidsImage from "./kids.jpg";
import MenImage from "./men.jpg";
import WomenImage from "./women.jpg";
import hoodieImage from './hoddie.jpg'
import jeansImage from './jeans.jpg'
import topImage from './top.jpg'
import shoeImage from './shoe.jpg'
import poloImage from './polo.jpg'
import knitImage from './cardigan.jpg'
import windImage from './jacket.jpg'

export const products = [
  {
    id: 1,
    name: "Kid Tapered Slim Fit Trouser",
    price: 38,
    image: kidsImage,
    bestSeller: false,
    category: "kids",
    type: "bottomwear"
  },
  {
    id: 2,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 64,
    image: MenImage,
    bestSeller: true,
    category: "men",
    type: "topwear"
  },
  {
    id: 3,
    name: "Women Floral Summer Dress",
    price: 79,
    image: WomenImage,
    bestSeller: false,
    category: "women",
    type: "topwear"
  },
  {
    id: 4,
    name: "Kid Casual Hoodie",
    price: 45,
    image: hoodieImage,
    bestSeller: true,
    category: "kids",
    type: "winterwear"
  },
  {
    id: 5,
    name: "Men Slim Fit Jeans",
    price: 70,
    image: jeansImage,
    bestSeller: true,
    category: "men",
    type: "bottomwear"
  },
  {
    id: 6,
    name: "Women Summer Top",
    price: 55,
    image: topImage,
    bestSeller: false,
    category: "women",
    type: "topwear"
  },
  {
    id: 7,
    name: "Kid Sports Shorts",
    price: 30,
    image: shoeImage,
    bestSeller: false,
    category: "kids",
    type: "bottomwear"
  },
  {
    id: 8,
    name: "Men Polo Shirt",
    price: 60,
    image: poloImage,
    bestSeller: false,
    category: "men",
    type: "topwear"
  },
  {
    id: 9,
    name: "Women Knit Cardigan",
    price: 85,
    image: knitImage,
    bestSeller: false,
    category: "women",
    type: "winterwear"
  },
  {
    id: 10,
    name: "Men Windcheater",
    price: 50,
    image: windImage,
    bestSeller: false,
    category: "men",
    type: "winterwear"
  },
];
