import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="flex gap-[1vw] justify-center items-center">
            <Link href={"/"} className="c-btn relative w-16 aspect-video">
                <Image src={"/next.svg"} fill alt="logo link" />
            </Link>
            <Link
                href="/terms"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Terms
            </Link>
            <Link
                href="/privacy"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Privacy
            </Link>
            <Link
                href="/security"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Security
            </Link>
            <Link
                href="/status"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Status
            </Link>
            <Link
                href="/docs"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Docs
            </Link>
            <Link
                href="/contact"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Contact
            </Link>
            <Link
                href="/manage-cookies"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Manage Cookies
            </Link>
            <Link
                href="/do-not-share"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4"
            >
                Do not share my personel information
            </Link>
        </footer>
    );
}

export default Footer;
