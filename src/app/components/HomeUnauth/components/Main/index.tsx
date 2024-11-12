import ProviderComponent from "@/store/Provider";
import MainClient from "./Client";

function Main() {
    return (
        <ProviderComponent>
            <MainClient />
        </ProviderComponent>
    );
}

export default Main;
