"use client";

import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";

function FooterClient() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <footer
            className={`flex gap-[4vw] md:gap-[1vw] justify-center items-center flex-wrap
            ${
                user &&
                user.isVerified &&
                "fixed bottom-0 left-1/2 -translate-x-1/2"
            }
        `}
        >
            <Link href={"/"} className="c-btn relative w-16 aspect-video">
                <Image src={"/next.svg"} fill alt="logo link" />
            </Link>
            <Link
                href="/terms"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Terms
            </Link>
            <Link
                href="/privacy"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Privacy
            </Link>
            <Link
                href="/security"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Security
            </Link>
            <Link
                href="/status"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Status
            </Link>
            <Link
                href="/docs"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Docs
            </Link>
            <Link
                href="/contact"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Contact
            </Link>
            <Link
                href="/manage-cookies"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Manage Cookies
            </Link>
            <Link
                href="/do-not-share"
                className="text-sm hover:text-purple-400 hover:underline hover:underline-offset-4 min-w-max"
            >
                Do not share my personel information
            </Link>
        </footer>
    );
}

export default FooterClient;