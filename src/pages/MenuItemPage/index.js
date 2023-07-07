import { useParams } from "react-router-dom";
import menu from "../../fakeData";

const MenuItemPage = () => {    
    const { id } = useParams();
    let menuItem = menu.find((item) => item.id == id)
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