const AllDish = ({ all }) => {
    return (
        <div>
            {all.name} {all.price}rub {all.ingridients.join(", ")}
        </div>
    );
};

export default AllDish;