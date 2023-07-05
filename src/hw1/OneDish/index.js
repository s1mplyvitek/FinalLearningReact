const OneDish = ({one}) => {
    return (
        <div>
            {one[1].name}, {one[1].price}руб. Ингридиенты {one[1].ingridients.join(", ")}
        </div>
    );
};

export default OneDish;