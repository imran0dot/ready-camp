import { createSlice } from "@reduxjs/toolkit";

type TAuthSlice = {
    user: null | object,
    token: null | string
};


const initialState: TAuthSlice = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: TAuthSlice, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const {setUser, logOut} = authSlice.actions;
export default authSlice.reducer;