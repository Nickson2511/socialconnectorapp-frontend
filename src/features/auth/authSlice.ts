import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/User";

interface AuthState {
    user: User | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem("access_token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("access_token", action.payload.token);
        },

        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("access_token");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
