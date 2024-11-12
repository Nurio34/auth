import { useAppSelector } from "@/store/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./index.css";
import IconsContainer from "./components/IconsContainer";

function Hero() {
    const { headerHeight } = useAppSelector((s) => s.components);
    const [minHeight, setMinHeight] = useState(0);

    useEffect(() => {
        if (headerHeight > 0) {
            const windowHeight = window.innerHeight;

            setMinHeight(windowHeight - headerHeight);
        }
    }, [headerHeight]);

    return (
        <>
            {minHeight > 0 && (
                <div
                    className="grid justify-items-center items-center text-center overflow-hidden pt-[10vh]"
                    style={{ minHeight }}
                >
                    <AnimatePresence mode="sync">
                        <motion.h1
                            key="title"
                            className="max-w-[23ch] text-[7vw] md:text-[4vw] font-bold"
                            style={{ lineHeight: 1.3 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1,
                                type: "tween",
                            }}
                        >
                            Build and ship software on a single, collaborative
                            platform
                        </motion.h1>

                        <motion.p
                            key="subtitle"
                            className="max-w-[55ch] md:font-medium md:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1,
                                type: "tween",
                            }}
                        >
                            Join the world’s most widely adopted AI-powered
                            developer platform where millions of developers,
                            businesses, and the largest open source community
                            build software that advances humanity.
                        </motion.p>

                        <motion.div
                            key="button"
                            className="c-btn border-2 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1,
                                type: "tween",
                            }}
                        >
                            <Link href="/signup">Sign up For Free</Link>
                        </motion.div>

                        <IconsContainer />
                    </AnimatePresence>
                </div>
            )}
        </>
    );
}

export default Hero;
