import ProviderComponent from "@/store/Provider";
import ScoresPageClient from "./Client";

function ScoresPage() {
    return (
        <ProviderComponent>
            <ScoresPageClient />
        </ProviderComponent>
    );
}

export default ScoresPage;
