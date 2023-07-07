import CartIcon from "../svg/CartIcon";


const CardWidget = ({ card }) => {
    return (
        <div className='shadow-lg rounded grid grid-rows-2 grid-flow-col  justify-end p-3 sticky top-0 bg-slate-200'>
            <div className='row-span-2 pr-3'><CartIcon /></div>
            <div>Количество: {card.length}</div>
            <div>Сумма: {card.reduce((sum, dish) => (sum += dish.price), 0)}руб</div>
        </div>
    )
}

export default CardWidget;