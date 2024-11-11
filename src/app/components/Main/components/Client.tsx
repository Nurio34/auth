import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

function MainClient() {
    const { headerHeight } = useAppSelector((s) => s.components);
    const [minHeight, setMinHeight] = useState(0);

    console.log(minHeight);

    useEffect(() => {
        if (headerHeight > 0) {
            const windowHeight = window.innerHeight;

            setMinHeight(windowHeight - headerHeight);
        }
    }, [headerHeight]);

    return (
        <main
            className=" 
               
            "
        >
            <div
                className="grid  justify-items-center items-center text-center
                            pt-[10vh]"
                style={{ minHeight }}
            >
                <h1
                    className=" max-w-[23ch] text-[8vw] md:text-[4vw] font-bold "
                    style={{
                        lineHeight: 1.3,
                    }}
                >
                    Build and ship software on a single, collaborative platform
                </h1>
                <p className="max-w-[55ch] font-medium text-xl">
                    Join the world’s most widely adopted AI-powered developer
                    platform where millions of developers, businesses, and the
                    largest open source community build software that advances
                    humanity.
                </p>
                <Link href={"/signup"} className="c-btn border-2">
                    Sign up For Free
                </Link>
                <div className=" h-72"></div>
            </div>
        </main>
    );
}

export default MainClient;
