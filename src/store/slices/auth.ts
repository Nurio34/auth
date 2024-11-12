import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ErrorsType, initialFormData, FormType } from "@/type/form";
import { logoutUser } from "./user";

type AuthType = {
    form: FormType;
    isLoading: boolean;
    errors: ErrorsType;
    isSubmitted: boolean;
};

const initialState: AuthType = {
    form: initialFormData,
    isLoading: false,
    errors: null,
    isSubmitted: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        writeForm: (state, action: PayloadAction<FormType>) => {
            state.form = action.payload;
        },
        writeIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        writeErrors: (state, action: PayloadAction<ErrorsType>) => {
            state.errors = action.payload;
        },
        writeIsSubmitted: (state, action: PayloadAction<boolean>) => {
            state.isSubmitted = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, () => initialState);
    },
});

export const { writeForm, writeIsLoading, writeErrors, writeIsSubmitted } =
    authSlice.actions;
export const selectForm = (state: RootState) => state.auth.form;
export default authSlice.reducer;
