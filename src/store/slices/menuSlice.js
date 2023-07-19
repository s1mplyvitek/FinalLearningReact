import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {items:[], loading: ""};

export const loadMenu = createAsyncThunk(
    "menu/loadMenu",
    async () => {
        return axios
            .get("http://localhost:1337/api/foods?populate=*")
            .then((resp) => resp.data);
    }
);

export const menuSlice = createSlice({
    name: "menu",

    initialState: initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadMenu.fulfilled, (state, action) => {
            state.loading = "fulfilled";
            state.items.length = 0;
            state.items.push(...action.payload.data);
        });
        builder.addCase(loadMenu.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(loadMenu.rejected, (state, action) => {
            state.loading = "rejected";
        });

    },
});

export const { } = menuSlice.actions;

export default menuSlice.reducer;