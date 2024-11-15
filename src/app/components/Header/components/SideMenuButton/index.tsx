import { useAppDispatch } from "@/store/hooks";
import { setIsSideMenuOpen } from "@/store/slices/components";
import Image from "next/image";

function SideMenuButton() {
    const dispatch = useAppDispatch();

    const openSideMenu = () => dispatch(setIsSideMenuOpen(true));

    return (
        <div className=" grid place-content-center">
            <button type="button" onClick={openSideMenu}>
                <Image
                    src={
                        process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE ||
                        "/avatar-placeholder.webp"
                    }
                    width={
                        (process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE_WIDTH as
                            | number
                            | undefined) || 48
                    }
                    height={
                        (process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE_HEIGHT as
                            | number
                            | undefined) || 48
                    }
                    alt="avatar image"
                    priority
                />
            </button>
        </div>
    );
}

export default SideMenuButton;
