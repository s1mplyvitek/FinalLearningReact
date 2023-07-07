import menu from "../../fakeData";

const OnePage = () => {    
    
    let menuItem = menu.find((item) => item.id == 1)
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