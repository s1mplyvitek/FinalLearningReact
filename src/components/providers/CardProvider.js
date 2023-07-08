import React, { useEffect } from "react";
import { useSelector } from "react-redux"

const CardProvider = ({ children }) => {
    const card = useSelector((state) => state.card);

    useEffect(() => {
        localStorage.setItem("card", JSON.stringify(card));
    }, [card]);

    const sum = card.reduce((sum, item) => {
        sum += item.food.price * item.qty;
        return sum;
    }, 0);

    return React.cloneElement(children, { card, sum });
};

export default CardProvider;