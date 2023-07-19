import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cardStorageString = localStorage.getItem("card");

const initialState = { loading: "initial", items: [] };

export const makeOrder = createAsyncThunk(
    "card/makeOrder",
    async (orderData) => {
        return axios
            .post("http://localhost:1337/api/orders", { data: orderData })
            .then((resp) => resp.data);
    }
);

export const cardSlice = createSlice({
    name: "card",

    initialState: cardStorageString
        ? JSON.parse(cardStorageString)
        : initialState,
    reducers: {
        addToCard: (state, action) => {
            let itemToAdd = action.payload;
            let index = state.items.findIndex(
                (item) => item.food.id === itemToAdd.id
            );
            if (index >= 0) {
                state.items[index].qty++;
            } else {
                state.items.push({ qty: 1, food: itemToAdd });
            }

        },
        clearCard: (state) => {
            state.items.length = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(makeOrder.fulfilled, (state, action) => {
            state.loading = "fulfilled";
            state.items.length = 0;
        });
        builder.addCase(makeOrder.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(makeOrder.rejected, (state, action) => {
            state.loading = "rejected";
        });

    },
});

export const { addToCard, clearCard } =
    cardSlice.actions;

export default cardSlice.reducer;