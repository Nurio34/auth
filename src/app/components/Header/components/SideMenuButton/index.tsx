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
<<<<<<< HEAD
                        process.env.NEXT_PUBLIC_AVATAR_IMAGE ||
                        "/avatar-placeholder.webp"
                    }
                    width={
                        (process.env.NEXT_PUBLIC_AVATAR_IMAGE_WIDTH as
=======
                        process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE ||
                        "/avatar-placeholder.webp"
                    }
                    width={
                        (process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE_WIDTH as
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
                            | number
                            | undefined) || 48
                    }
                    height={
<<<<<<< HEAD
                        (process.env.NEXT_PUBLIC_AVATAR_IMAGE_HEIGHT as
=======
                        (process.env.NEXT_PUBLIC_LOGO_AVATAR_IMAGE_HEIGHT as
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
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
