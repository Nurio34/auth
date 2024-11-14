import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import CloseSideMenuButton from "./CloseSideMenuButton";

function Header() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <header className=" flex items-center justify-between">
            <div className="flex gap-[1vw] items-center">
                <Image
                    src={"/avatar-placeholder.webp"}
                    width={48}
                    height={48}
                    alt="avatar"
                />
                <p className="capitalize">{user?.username}</p>
            </div>
            <CloseSideMenuButton />
        </header>
    );
}

export default Header;
