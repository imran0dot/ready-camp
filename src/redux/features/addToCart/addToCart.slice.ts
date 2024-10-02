import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IAddToCart {
    id: string,
    sku: string,
    name: string,
    price: string,
    quantity: number
}

const initialState: { cartItems: IAddToCart[] | [] } = {
    cartItems: []
}
const addToCartSlice = createSlice({
    name: "add-to-cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCart>) => {
            const exactItem = state.cartItems.find(item => item.id === action.payload.id);
            if (exactItem) {
                exactItem.quantity += action.payload.quantity
            } else {
                state.cartItems = [...state.cartItems, action.payload]
            }
        },

        removeAddToCart: (state, action: PayloadAction<{id: string}>) => {
           const removeItem = state.cartItems.filter(item => item.id !== action.payload.id);
           state.cartItems = [...removeItem]
        }
    }
});


export const { addToCart, removeAddToCart } = addToCartSlice.actions;
export const totalCartItems = (state: RootState) => state.addToCart.cartItems?.length;
export const currentCartItems = (state: RootState) => state.addToCart.cartItems;
export default addToCartSlice.reducer;