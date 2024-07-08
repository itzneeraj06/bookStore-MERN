
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: { cart:0 },
    reducers: {
        cartCount: (state, action) => {
            const cart = action.payload;
            state.cart = cart;
        }
    },

});

export const { cartCount } = cartSlice.actions;
export default cartSlice.reducer;