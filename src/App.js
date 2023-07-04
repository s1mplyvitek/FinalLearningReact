import { useState } from 'react';
import './App.css';
import Image from './components/Image';
import imgS from "./hw.jpg";
import OneDish from './components/OneDish';
import AllDish from './components/AllDish';


function App() {
  let [a, setA] = useState(0);

  setTimeout(() => {
    setA(a + 1);
  }, 1000);
  // =======================================
  let items = [
    { imgSrc: imgS, text: "1" },
    { imgSrc: imgS, text: "2" },
  ];
  // =======================================
  let dish = [

    {
      id: 1,
      name: 'Buuzas',
      price: 70,
      expense: 0,
      ingridients: ['meat', 'water', 'solt', 'onion', 'dough',],
      image: "/content/face.png",
    },

    {
      id: 2,
      name: 'Shulen',
      price: 100,
      expense: 0,
      ingridients: ['meat', 'water', 'solt',],
      image: "/content/face.png",
    },

    {
      id: 3,
      name: 'Brtuch',
      price: 150,
      expense: 0,
      ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
      image: "/content/face.png",
    },

    {
      id: 4,
      name: 'Classic salad',
      price: 60,
      expense: 0,
      ingridients: ['salad', 'onion', 'solt', 'cucmber', 'tomato'],
      image: "/content/face.png",
    },

    {
      id: 5,
      name: 'Cofee',
      price: 50,
      expense: 0,
      ingridients: ['water', 'sugar', 'coffee'],
      image: "/content/face.png",
    },

    {
      id: 6,
      name: 'Tea',
      price: 40,
      expense: 0,
      ingridients: ['tea', 'water', 'milk'],
      image: "/content/face.png",
    },
  ];
  // ==========================================
  return (
    <div className="App">
===============================
      <OneDish one={dish} />
===============================

      {dish.map((item) => {
        return (
          <AllDish all={item} />
        );
      })}
================================
      <p>Hello World! <br/> {a}</p>

================================


      <div>
        {items.map((item) => {
          return <Image imgSrc={item.imgSrc} text={item.text} />
        })}
      </div>
    </div>
  );
}

export default App;
