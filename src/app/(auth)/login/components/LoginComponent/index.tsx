import ProviderComponent from "@/store/Provider";
import LoginClientComponent from "./Client";

function LoginComponent() {
    return (
        <ProviderComponent>
            <LoginClientComponent />
        </ProviderComponent>
    );
}

export default LoginComponent;
