import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth'
import cartSlice from './cart'
const store = configureStore(
    {
        reducer: {
            auth: authSlice,
            cart: cartSlice

        }
    }
);
export default store;
