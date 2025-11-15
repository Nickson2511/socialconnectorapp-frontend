import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    user: {
        id: string;
        name: string;
        avatar: string;
        bio?: string;
    } | null;
    loading: boolean;
}

const initialState: ProfileState = {
    user: null,
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<ProfileState["user"]>) {
            state.user = action.payload;
        },
        updateBio(state, action: PayloadAction<string>) {
            if (state.user) state.user.bio = action.payload;
        },
        clearProfile(state) {
            state.user = null;
        },
        setProfileLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const { setProfile, updateBio, clearProfile, setProfileLoading } =
    profileSlice.actions;

export default profileSlice.reducer;
