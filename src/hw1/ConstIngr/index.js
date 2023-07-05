const ConstIngr = ({ ingri }) => {

    const ingridient = (
        <div>
            {ingri.map((dish) => dish.ingridients.map((ingrid) => <div>{ingrid}</div>))}
        </div>
    );

    return (
        <div>
            {ingridient}
        </div>
    );
};

export default ConstIngr;