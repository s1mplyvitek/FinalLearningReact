import { useSelector } from "react-redux";


const OnePage = () => {
    const menu = useSelector(state => state.menu)
    let menuItem = menu.items.find((item) => item.id == 1)
    return (
        <div className="pt-5">
            <h1>Про блюдо</h1>
            <div>{menuItem.name}</div>
            <img src={menuItem.image}></img>
            <p>{menuItem.ingridients.join(", ")}</p>
        </div>
    );
};

export default OnePage;