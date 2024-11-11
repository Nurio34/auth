"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import HeaderClient from "./Client";

function ProviderComponent() {
    return (
        <Provider store={store}>
            <HeaderClient />
        </Provider>
    );
}

export default ProviderComponent;
