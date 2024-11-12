import ProviderComponent from "@/store/Provider";
import HomePageClient from "./Client";

export default function HomePage() {
    return (
        <ProviderComponent>
            <HomePageClient />
        </ProviderComponent>
    );
}
