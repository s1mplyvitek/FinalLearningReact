import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import MenuItemPage from "../pages/MenuItemPage";
import ReviewsPage from "../pages/ReviewsPage";
import OnePage from "../pages/OnePage";

import Menu from "../components/Menu";
import CardPage from "../pages/CardPage";
import CardProvider from "../components/providers/CardProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Menu />
            },
            {
                path: "catalog/:id",
                element: <MenuItemPage />
            },
            {
                path: "card",
                element: <CardProvider>
                            <CardPage />
                        </CardProvider>
            },
            {
                path: "about",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <AboutPage />
                    },
                    {
                        path: "contacts",
                        element: <ContactsPage />
                    },
                ],
            },
            {
                path: "reviews",
                element: <ReviewsPage />
            },
            {
                path: "one",
                element: <OnePage />
            },
        ],
    },

]);

export default router;