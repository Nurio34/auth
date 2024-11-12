import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

function Logo() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <div className=" flex gap-2 items-center">
            <figure className=" relative w-9 aspect-square">
                <Image
                    src={!user ? "/vercel.svg" : "/next.svg"}
                    fill
                    alt="logo"
                    priority
                />
            </figure>
            <p
                className={`text-2xl font-semibold ${!user && "text-white"}`}
                style={{ fontVariant: "small-caps" }}
            >
                My App
            </p>
        </div>
    );
}

export default Logo;
