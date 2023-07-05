import { useState } from "react";
import AllDish from "../AllDish";
import Image from "../Image";
import OneDish from "../OneDish";
import imgS from "../../hw.jpg"
import ConstIngr from "../ConstIngr";

const Main = () => {

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

    return (
        
        <>
            <div className='mt-40'>
===============================
        <OneDish one={dish} />
        </div>
===============================

      {dish.map((item) => {
        return (
          <AllDish all={item} />
        );
      })}
================================
      <p>Hello World! <br/> {a}</p>

================================

      <div className=""><ConstIngr ingri={dish}/></div>

================================


      <div className="grid place-items-center">
        {items.map((item) => {
          return <Image imgSrc={item.imgSrc} text={item.text} />
        })}
      </div>
        </>
    );
};

export default Main;