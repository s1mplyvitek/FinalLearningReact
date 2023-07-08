import { useOutletContext } from "react-router-dom";
import menu from "../../fakeData";
import DishCard from "../DishCard";


const Menu = () => {    
   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
            {menu.map(item => <DishCard dish={item}/>)}
        </div>
    );
};

export default Menu;