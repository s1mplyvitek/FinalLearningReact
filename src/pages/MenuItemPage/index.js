import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const MenuItemPage = () => {
    const menu = useSelector(state => state.menu)   
    const { id } = useParams();
    let menuItem = menu.items.find((item) => item.id == id)
    return (
        <>
            <h1>Страница товара</h1>
            <div>{menuItem.name}</div>
            <img src={menuItem.image}></img>
            <p>{menuItem.ingridients.join(", ")}</p>
        </>
    );
};

export default MenuItemPage;