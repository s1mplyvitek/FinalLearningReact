import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";
import menuReducer from "./slices/menuSlice";

export const store = configureStore({
    
    reducer: {
        card: cardReducer,
        menu: menuReducer,
    },
});