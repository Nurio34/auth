import { configureStore } from "@reduxjs/toolkit";
import componentsReducer from "./slices/components";

export const store = configureStore({
    reducer: {
        components: componentsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
