import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserType } from "@/type/user";

type UserSliceType = {
    isLoading: boolean;
    user: UserType | null;
    otpExpires: Date | null;
<<<<<<< HEAD
    isUserDeletedFromFirebase: boolean;
=======
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
};

const initialState: UserSliceType = {
    isLoading: false,
    user: null,
    otpExpires: null,
<<<<<<< HEAD
    isUserDeletedFromFirebase: false,
=======
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
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
<<<<<<< HEAD
        deleteUserFromFirebaseAction: (state) => {
            state.isUserDeletedFromFirebase = true;
        },
=======
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
        logoutUser: () => initialState,
    },
});

<<<<<<< HEAD
export const {
    setIsLoading,
    setUser,
    setOtpExpires,
    deleteUserFromFirebaseAction,
    logoutUser,
} = userSlice.actions;
=======
export const { setIsLoading, setUser, setOtpExpires, logoutUser } =
    userSlice.actions;
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
