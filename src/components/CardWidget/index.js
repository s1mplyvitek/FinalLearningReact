import { useDispatch } from "react-redux";
import CartIcon from "../svg/CartIcon";
import { clearCard } from "../../store/slices/cardSlice";
import MainMenu from "../../MainMenu";
import { Link } from "react-router-dom";


const CardWidget = ({ card, sum }) => {
    const dispatch = useDispatch();
    return (
        <div className='shadow-lg rounded  mt-2 p-3 sticky top-0 bg-slate-200'>
            <div className="grid grid-rows-1 grid-cols-3 justify-items-end">
                <div className="row-span-2 col-span-2"><MainMenu /></div>
                <div className='grid grid-rows-2 grid-cols-3'>
                    <Link to="/card " className="row-span-2 col-span-1 ml-10">
                        <div><CartIcon /></div>
                    </Link>
                    <button onClick={() => dispatch(clearCard())} type="button" className="text-white row-span-2  mx-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center">
                        ╳
                    </button>
                    <div className="row-span-1 col-span-1">Количество: {card.items.length}</div>
                    <div className="row-span-1 col-span-1">Сумма: {sum}руб</div>
                </div>
            </div>
        </div>
    )
}

export default CardWidget;