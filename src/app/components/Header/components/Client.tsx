import Link from "next/link";
import Logo from "../../Logo";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useRef } from "react";
import { getHeight } from "@/store/slices/components";

function HeaderClient() {
    const HeaderElement = useRef<HTMLElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (HeaderElement.current) {
            const height = HeaderElement.current.getBoundingClientRect().height;
            dispatch(getHeight(height));
        }
    }, []);

    return (
        <header
            ref={HeaderElement}
            className="flex items-center justify-between py-[2vh] px-[2vw]"
        >
            <Logo />
            <Link
                href={"/login"}
                className=" font-semibold c-btn"
                style={{ fontVariant: "small-caps" }}
            >
                Login
            </Link>
        </header>
    );
}

export default HeaderClient;
