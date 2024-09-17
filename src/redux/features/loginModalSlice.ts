import { createSlice } from "@reduxjs/toolkit";

const initialState: { isShow: boolean } = {
    isShow: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        switchModal: (state) => {
            state.isShow = !state.isShow
        }
    }
});

export const { switchModal } = loginSlice.actions;
export default loginSlice.reducer;