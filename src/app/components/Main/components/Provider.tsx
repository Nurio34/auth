"use client";

import { Provider } from "react-redux";
import MainClient from "./Client";
import { store } from "@/store";

function ProviderComponent() {
    return (
        <Provider store={store}>
            <MainClient />;
        </Provider>
    );
}

export default ProviderComponent;
