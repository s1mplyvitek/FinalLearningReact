import { useState } from 'react';
import './App.css';
import Image from './hw1/Image';
import imgS from "./hw.jpg";
import OneDish from './hw1/OneDish';
import AllDish from './hw1/AllDish';
import Menu from './components/Menu';
import Main from './hw1/Main';


function App() {
 
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

    <div className="App container mx-auto">

      <div>
        <Menu />
        <Main />
      </div>

    </div>
  );
}

export default App;
