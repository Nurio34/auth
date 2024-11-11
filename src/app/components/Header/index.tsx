import React from "react";
import HeaderClient from "./components/Client";
import { Provider } from "react-redux";
import { store } from "@/store";
import ProviderComponent from "./components/Provider";

function Header() {
    return <ProviderComponent />;
}

export default Header;
