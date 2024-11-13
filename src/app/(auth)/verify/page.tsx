import ProviderComponent from "@/store/Provider";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import VerifyClient from "./Client";

function Verify() {
    return (
        <ProviderComponent>
            <VerifyClient />
        </ProviderComponent>
    );
}

export default Verify;
