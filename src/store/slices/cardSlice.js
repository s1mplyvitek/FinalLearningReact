import { createSlice } from "@reduxjs/toolkit";

const cardStorageString = localStorage.getItem("card");
const initialState = [];

export const cardSlice = createSlice({
    name: "card",

    initialState: cardStorageString
        ? JSON.parse(cardStorageString)
        : initialState,
    reducers: {
        addToCard: (state, action) => {
            let itemToAdd = action.payload;
            let index = state.findIndex(
                (item) => item.food.id === itemToAdd.id
            );
            if (index >= 0) {
                state[index].qty++;
            } else {
                state.push({ qty: 1, food: itemToAdd });
            }

        },
        clearCard: (state) => {
            state.length = 0;
        }
    },
});

export const { addToCard, clearCard } =
    cardSlice.actions;

export default cardSlice.reducer;