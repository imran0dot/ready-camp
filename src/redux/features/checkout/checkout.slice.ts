import { createSlice } from "@reduxjs/toolkit";


interface ICheckout {
    checkout: {
        email: string;
        name: string;
        phone: string;
        address: {
            district: string;
            division: string;
            village: string;
            postCode: string | number;
        }
    } | null
}



// {
//     email: '',
//     name: '',
//     phone: '',
//     address: {
//         district: '',
//         division: '',
//         village: '',
//         postCode: 0,
//     }
// }


const initialState: ICheckout = {
    checkout: null
};


const checkOutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckout: (state: ICheckout, action) => {
            const checkoutData = action.payload;
            state.checkout = checkoutData;
        }
    }
});

export const { setCheckout } = checkOutSlice.actions;
export default checkOutSlice.reducer;