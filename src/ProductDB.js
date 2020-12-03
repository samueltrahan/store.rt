import Pic01 from "./Assets/shoe01.jpg";
import Pic02 from "./Assets/shoe02.jpg";
import Pic03 from "./Assets/shoe03.jpg";
import Pic04 from "./Assets/shoe04.jpg";
import Pic05 from "./Assets/shoe05.jpg";
import Pic06 from "./Assets/shoe06.jpg";
import Pic07 from "./Assets/shoe07.jpg";
import Pic08 from "./Assets/shoe08.jpg";
import Pic09 from "./Assets/shoe09.jpg";
import { v4 as uuidv4 } from "uuid";



const products = [
  {
    "name": "Air Dunks",
    "price": 150,
    "image": Pic01,
    "id": uuidv4()
  },
  {
    "name": "Air Max",
    "price": 150,
    "image": Pic02,
    "id": uuidv4()
  },
  {
    "name": "Chuck Taylor Converse's",
    "price": 59,
    "image": Pic03,
    "id": uuidv4()
  },
  {
    "name": "Adidas",
    "price": 120,
    "image": Pic04,
    "id": uuidv4()
  },
  {
    "name": "Yeezys",
    "price": 160,
    "image": Pic05,
    "id": uuidv4()
  },
  {
    "name": "New Balance Green",
    "price": 90,
    "image": Pic06,
    "id": uuidv4()
  },
  {
    "name": "Air Jordans",
    "price": 150,
    "image": Pic07,
    "id": uuidv4()
  },
  {
    "name": "New Balance White",
    "price": 80,
    "image": Pic08,
    "id": uuidv4()
  },
  {
    "name": "Air Max",
    "price": 120,
    "image": Pic09,
    "id": uuidv4()
  },
]

export default products