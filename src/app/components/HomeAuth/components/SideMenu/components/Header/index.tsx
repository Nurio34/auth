import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import CloseSideMenuButton from "./CloseSideMenuButton";

function Header() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <header className=" flex items-center justify-between">
            <div className="flex gap-[1vw] items-center">
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
                    alt="avatar"
                />
                <p className="capitalize">{user?.username}</p>
            </div>
            <CloseSideMenuButton />
        </header>
    );
}

export default Header;
