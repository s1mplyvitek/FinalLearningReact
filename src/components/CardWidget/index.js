import { useDispatch } from "react-redux";
import CartIcon from "../svg/CartIcon";
import { clearCard } from "../../store/slices/cardSlice";


const CardWidget = ({ card, sum }) => {
    const dispatch = useDispatch();
    return (
        <div className='shadow-lg rounded grid grid-rows-2 grid-flow-col  justify-end p-3 sticky top-0 bg-slate-200'>
            <div className='row-span-2 pr-3'><CartIcon /></div>
            <button onClick={() => dispatch(clearCard())} type="button" class="text-white row-span-2  py-2 px-4 mr-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center">
                ╳</button>
            <div>Количество: {card.length}</div>
            <div>Сумма: {sum}руб</div>
        </div>
    )
}

export default CardWidget;