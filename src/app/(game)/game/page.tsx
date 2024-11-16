import ProviderComponent from "@/store/Provider";
import GamePageClient from "./Client";

function GamePage() {
    return (
        <ProviderComponent>
            <GamePageClient />
        </ProviderComponent>
    );
}

export default GamePage;
