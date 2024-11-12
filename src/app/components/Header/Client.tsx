"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";
import { getHeight } from "@/store/slices/components";
import Logo from "./components/Logo";
import LoginLinkButton from "./components/LoginLinkButton";
import SideMenuButton from "./components/SideMenuButton";

function HeaderClient() {
    const HeaderElement = useRef<HTMLElement | null>(null);
    const dispatch = useAppDispatch();

    const { user } = useAppSelector((s) => s.user);

    useEffect(() => {
        if (HeaderElement.current) {
            const height = HeaderElement.current.getBoundingClientRect().height;
            dispatch(getHeight(height));
        }
    }, [dispatch]);

    return (
        <header
            ref={HeaderElement}
            className={`flex items-center justify-between py-[1vh] px-[2vw]
                ${user && "shadow-md"}    
            `}
        >
            <Logo />
            {!user && <LoginLinkButton />}
            {user && <SideMenuButton />}
        </header>
    );
}

export default HeaderClient;
