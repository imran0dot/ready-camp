import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IAddToCart {
    name: string,
    price: string,
    quantity: number
}

const initialState: { cartItems: IAddToCart[] | null } = {
    cartItems: []
}
const addToCartSlice = createSlice({
    name: "add-to-cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCart>) => {
            if (state.cartItems) {
                state.cartItems.push(action.payload);
            } else {
                state.cartItems = [action.payload];
            }
        }
    }
});


export const { addToCart } = addToCartSlice.actions;
export const totalCartItems =  (state: RootState) => state.addToCart.cartItems?.length;
export default addToCartSlice.reducer;