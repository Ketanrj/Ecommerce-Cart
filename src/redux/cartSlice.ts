import { createSlice } from "@reduxjs/toolkit";
import {type PayloadAction} from "@reduxjs/toolkit"
import  { type  productType } from "../types/productType";

export type Cartproduct = {
        id: productType[ 'id'];
        title : productType[ 'title'];
        thumbnail : productType[ 'thumbnail'];
        price : productType[ 'price'];
    }

export interface cartElements {
    totalCartCount: number
    products: Cartproduct[]
    
}


const initialState: cartElements = {
    totalCartCount: 0,
    products :  []
}

export const cartSlice = createSlice({
    name: "cartCounter",
    initialState,
    reducers: {
        AddtoCart: (state, action: PayloadAction<Cartproduct>) =>  {
            state.products.push(action.payload);
            state.totalCartCount += 1;
        },
        DeletefromCart: (state, action: PayloadAction<number | null>) =>  {
            state.products = state.products.filter((product) => (
                product.id !== action.payload
            ));
            state.totalCartCount = state.products.length;
        }
    }
})

export const { AddtoCart, DeletefromCart } = cartSlice.actions

export default cartSlice.reducer;
