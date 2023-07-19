import { Link } from "react-router-dom";
import style from "./DishCard.module.css"
import { addToCard } from "../../store/slices/cardSlice";
import { useDispatch } from "react-redux";

const DishCard = ({ dish }) => {
    const dispatch = useDispatch();
    return (
        <div className={" rounded overflow-hidden shadow-lg xl:bg-slate-200 " + style.card}>
            <div>
                <Link to={`/catalog/${dish.id}`}>
                    <div>
                        <img src={
                            "http://localhost:1337" +
                            dish?.attributes?.image?.data?.attributes?.formats?.small?.url
                        }
                            className="container object-cover h-96" />
                    </div>
                    <div className="p-2">
                        <div className="text-3xl">{dish?.attributes?.name} - {dish?.attributes?.price + " rub"}</div>
                        <div>{dish.attributes.ingridients.join(", ")} </div>                        
                    </div>
                </Link>
            </div>
            <button onClick={() => dispatch(addToCard(dish))} class="w-11/12 my-2.5 py-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                Take me!
            </button>
        </div>

    );
};

export default DishCard;