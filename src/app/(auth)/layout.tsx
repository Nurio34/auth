import ProviderComponent from "@/store/Provider";
import AuthClient from "./Client";
import Footer from "./_components/Footer";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProviderComponent>
                <AuthClient />
            </ProviderComponent>
            {children}
            <Footer />
        </>
    );
}

export default layout;
