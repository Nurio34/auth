import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserType } from "@/type/user";

type UserSliceType = {
    user: UserType | null;
};

const initialState: UserSliceType = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state.user = action.payload;
        },
        logoutUser: () => initialState,
    },
});

export const { setUser, logoutUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
