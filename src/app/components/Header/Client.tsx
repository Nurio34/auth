"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";
import { getHeight } from "@/store/slices/components";
import Logo from "./components/Logo";
import LoginLinkButton from "./components/LoginLinkButton";
import SideMenuButton from "./components/SideMenuButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HeaderClient() {
    const HeaderElement = useRef<HTMLElement | null>(null);

    const { user } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const path = usePathname().split("/")[1];

    const isHomepage = path === "";
    console.log({ isHomepage });

    const isGamePage = path.includes("game") || path.includes("scores");

    useEffect(() => {
        if (HeaderElement.current) {
            const height = HeaderElement.current.getBoundingClientRect().height;
            dispatch(getHeight(height));
        }
    }, [dispatch]);

    return (
        <>
            {isHomepage && (
                <header
                    ref={HeaderElement}
                    className={`flex items-center justify-between py-[1vh] px-[2vw] text-white
                        ${user && "shadow-md"}  
                        ${isGamePage && "bg-gray-400"}  
                    `}
                >
                    <Logo />
                    {!path.includes("game") && <Link href={"/game"}>Game</Link>}
                    {path.includes("game") && (
                        <Link href={"/scores"}>Scores</Link>
                    )}
                    {!user && <LoginLinkButton />}
                    {user && <SideMenuButton />}
                </header>
            )}
        </>
    );
}

export default HeaderClient;
