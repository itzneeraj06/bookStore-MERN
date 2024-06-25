
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, role: "user" },
    reducers: {
        login:(state)=> {
            state.isLoggedIn = true;

        },
        logout:(state)=> {
            state.isLoggedIn = false;

        },
        changeRole:(state, action)=> {
            const role = action.payload;
            state.role = role;
        }
    },

});

export const {login,logout,changeRole} = authSlice.actions;//{login,logout,role}
export default authSlice.reducer;