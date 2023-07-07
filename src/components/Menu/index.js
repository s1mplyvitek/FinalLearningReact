import menu from "../../fakeData";
import DishCard from "./DishCard";


const Menu = ({ onItemBy }) => {    
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
            {menu.map(item => <DishCard dish={item} onClickBuy={onItemBy} />)}
        </div>
    );
};

export default Menu