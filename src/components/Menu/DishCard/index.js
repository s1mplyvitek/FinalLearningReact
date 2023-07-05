const DishCard = ({ dish }) => {
    return (
        <div className=" rounded overflow-hidden shadow-lg">
            <img src={dish.image} className="container" />
            <div className="text-3xl">{dish.name}</div>
            <div>{dish.ingridients.join(", ")} </div>             
        </div>
    );
};

export default DishCard;