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
                    src={"/avatar-placeholder.webp"}
                    width={48}
                    height={48}
                    alt="avatar-placeholder"
                    priority
                />
            </button>
        </div>
    );
}

export default SideMenuButton;
