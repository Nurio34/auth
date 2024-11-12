import ProviderComponent from "@/store/Provider";
import AuthClient from "./Client";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProviderComponent>
                <AuthClient />
            </ProviderComponent>
            {children}
        </>
    );
}

export default layout;
