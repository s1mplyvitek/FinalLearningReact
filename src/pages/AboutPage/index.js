import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="pt-5">
            <h1>О Нас!</h1>
            <p>Заведение для настоящих работяг!</p>

            <Link to="contacts">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Контакты
                </button>
            </Link>
        </div>
    );
};

export default AboutPage;