import ProviderComponent from "@/store/Provider";
import SignupClientComponent from "./Client";

function SignupComponent() {
    return (
        <ProviderComponent>
            <SignupClientComponent />
        </ProviderComponent>
    );
}

export default SignupComponent;
