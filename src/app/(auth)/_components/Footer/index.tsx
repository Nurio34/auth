import ProviderComponent from "@/store/Provider";
import Image from "next/image";
import Link from "next/link";
import FooterClient from "./Client";

function Footer() {
    return (
        <ProviderComponent>
            <FooterClient />
        </ProviderComponent>
    );
}

export default Footer;
