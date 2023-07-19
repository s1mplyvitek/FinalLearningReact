import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeOrder } from "../../store/slices/cardSlice";

const CardPage = ({ card, sum }) => {

    const dispatch = useDispatch();

    const [orderData, setOrderData] = useState({
        name: "",
        phone: ""
    });

    const onChangeInput = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const sendOrder = () => {
        const data = orderData
        data.foods = card.items.map((item) => item.food.id);
        data.items_qty = card.items.map((item) => item.qty);
        dispatch(makeOrder(data));
    };

    return (
        <>
            {card.items.loading !== "fulfilled" && (
                <div className="grid place-content-start">
                    <div className="p-5 text-2xl">
                        <ul>
                            {card.items.map(item => <li>{item.food.attributes?.name} - {item.food.attributes?.price} rub X {item.qty} qt.</li>)}
                        </ul>
                        <strong>Total: {sum} rub</strong>
                    </div>
                    {!!card.items.length && (
                        <>
                            <form className="max-w-[250px]">
                                <label>Name </label>
                                <input name="name" onChange={onChangeInput} className="border mb-2"></input>
                                <label>Phone </label>
                                <input name="phone" onChange={onChangeInput} className="border"></input>
                            </form>

                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 mt-2 mx-10 border border-gray-400 rounded shadow" disabled={card.loading == "pending"} onClick={sendOrder}>
                                Send an order
                            </button>
                        </>
                    )}
                </div>

            )}
            {card.loading === "fulfilled" && <div className="text-2xl text-start pl-5">Thank you!</div>}
        </>

    );
};

export default CardPage;