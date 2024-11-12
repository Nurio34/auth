import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { logoutUser } from "./user";

type ComponentsType = {
    headerHeight: number;
    isSideMenuOpen: boolean;
};

const initialState: ComponentsType = {
    headerHeight: 0,
    isSideMenuOpen: false,
};

export const componentsSlice = createSlice({
    name: "components",
    initialState,
    reducers: {
        getHeight: (state, action: PayloadAction<number>) => {
            state.headerHeight = action.payload;
        },
        setIsSideMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.isSideMenuOpen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state) => {
            state.isSideMenuOpen = false;
        });
    },
});

export const { getHeight, setIsSideMenuOpen } = componentsSlice.actions;
export default componentsSlice.reducer;

export const selectHeaderHeight = (state: RootState) =>
    state.components.headerHeight;
export const selectIsSideMenuOpen = (state: RootState) =>
    state.components.isSideMenuOpen;
