import { useAppDispatch } from "@/store/hooks";
import { setIsSideMenuOpen } from "@/store/slices/components";
import { IoMdClose } from "react-icons/io";

function CloseSideMenuButton() {
    const dispatch = useAppDispatch();

    const closeSideMenu = () => dispatch(setIsSideMenuOpen(false));

    return (
        <button
            type="button"
            onClick={closeSideMenu}
            className="p-[1vw] rounded-md transition-all hover:bg-gray-200"
        >
            <IoMdClose />
        </button>
    );
}

export default CloseSideMenuButton;
