import { AnimatePresence, motion } from "framer-motion";
import LogoutButton from "./components/LogoutButton";
import { useAppSelector } from "@/store/hooks";
import CloseSideMenuButton from "./components/CloseSideMenuButton";

function SideMenu() {
    const { isSideMenuOpen } = useAppSelector((s) => s.components);

    return (
        <AnimatePresence>
            {isSideMenuOpen && (
                <motion.nav
                    className=" fixed top-0 right-0 h-screen w-96 bg-gray-200 space-x-9"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                        type: "tween",
                    }}
                >
                    <CloseSideMenuButton />
                    <LogoutButton />
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default SideMenu;
