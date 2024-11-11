import { motion } from "framer-motion";
import Lights from "../Lights";
import FloatingIcons from "../FloatingIcons";

function IconsContainer() {
    return (
        <motion.div
            key="icons-container"
            className="w-screen max-w-[410px] md:w-auto md:h-72 aspect-square relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 1,
                type: "tween",
            }}
        >
            <Lights />
            <FloatingIcons />
        </motion.div>
    );
}

export default IconsContainer;
