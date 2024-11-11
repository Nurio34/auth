import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type ComponentsType = {
    headerHeight: number;
};

const initialState: ComponentsType = {
    headerHeight: 0,
};

export const componentsSlice = createSlice({
    name: "components",
    initialState,
    reducers: {
        getHeight: (state, action: PayloadAction<number>) => {
            state.headerHeight = action.payload;
        },
    },
});

export const { getHeight } = componentsSlice.actions;
export const selectHeaderHeight = (state: RootState) =>
    state.components.headerHeight;
export default componentsSlice.reducer;
