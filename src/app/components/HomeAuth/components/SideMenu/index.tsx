import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import Header from "./components/Header";
import VerifyAccount from "./components/VerifyAccount";

function SideMenu() {
    const { isSideMenuOpen } = useAppSelector((s) => s.components);

    return (
        <AnimatePresence>
            {isSideMenuOpen && (
                <motion.nav
                    className=" fixed top-0 right-0 h-screen m-w-52 bg-gray-100 py-[1vh] px-[2vw] rounded-tl-lg rounded-bl-lg"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                        type: "tween",
                    }}
                >
                    <Header />
                    <VerifyAccount />
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default SideMenu;
