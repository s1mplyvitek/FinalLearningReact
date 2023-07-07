import { Link } from "react-router-dom"

const MainMenu = () => {
    let menuItems = [
        {title: "Главная", link: "/"},
        {title: "О нас", link: "/about"},
        {title: "Отзывы", link: "/reviews"},
        {title: "Про блюдо", link: "/one"}
    ]

    return (
        <div className="flex gap-6 pl-5 text-2xl p-3">
            {menuItems.map(item => <Link to={item.link}>{item.title}</Link>)}
        </div>
    )
}

export default MainMenu;