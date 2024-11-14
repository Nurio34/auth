import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserType } from "@/type/user";

type UserSliceType = {
    isLoading: boolean;
    user: UserType | null;
    otpExpires: Date | null;
};

const initialState: UserSliceType = {
    isLoading: false,
    user: null,
    otpExpires: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state.user = action.payload;
        },
        setOtpExpires: (state, action: PayloadAction<Date | null>) => {
            state.otpExpires = action.payload;
        },
        logoutUser: () => initialState,
    },
});

export const { setIsLoading, setUser, setOtpExpires, logoutUser } =
    userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
