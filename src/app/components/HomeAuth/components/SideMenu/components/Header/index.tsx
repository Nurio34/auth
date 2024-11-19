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
                    alt="avatar"
                />
                <p className="capitalize">{user?.username}</p>
            </div>
            <CloseSideMenuButton />
        </header>
    );
}

export default Header;
