import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type productType } from "../types/productType";

type productState = {
    allProducts: productType[];
    filteredProducts: productType[];
}

const initialState : productState = {
    allProducts: [],
    filteredProducts: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setallProducts: (state, action: PayloadAction<productType[]>) => {
        state.allProducts = action.payload;
        state.filteredProducts = action.payload;
        },
        filterProducts: (state, action: PayloadAction<string>) => {
            state.filteredProducts = state.allProducts.filter(item =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        }
    }
})

export const { setallProducts, filterProducts } = productSlice.actions;

export default productSlice.reducer;

