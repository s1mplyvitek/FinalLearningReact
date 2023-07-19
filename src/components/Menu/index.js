import { useEffect } from "react";
import DishCard from "../DishCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";
import LoadRejec from "../LoadRejec";
import LoadPend from "../LoadPend";


const Menu = () => {
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMenu())
    }, [])

    return (
        <>
            {menu.loading == "fulfilled" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
                    {menu.items.map((item) => (
                        <DishCard dish={item} />
                    ))}
                </div>
            )}

            {menu.loading == "pending" && (<LoadPend />)}

            {menu.loading == "rejected" && (<LoadRejec />)}
        </>
    );
};

export default Menu;