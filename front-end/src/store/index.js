import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth'
const store = configureStore(
    {
        reducer: {
            auth: authSlice

        }
    }
);
export default store;
