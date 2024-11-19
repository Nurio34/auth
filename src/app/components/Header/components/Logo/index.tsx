import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

function Logo() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <div className=" flex gap-2 items-center">
<<<<<<< HEAD
            <figure className=" relative w-10 aspect-square">
                <Image
                    src={
                        process.env.NEXT_PUBLIC_LOGO || "/logo-placeholder.svg"
                    }
                    fill
                    alt="logo"
                    priority
                />
            </figure>
            <p
                className={`text-2xl font-semibold capitalize font-serif ${
                    !user && "text-white"
                }`}
                style={{ fontVariant: "small-caps" }}
            >
                {process.env.NEXT_PUBLIC_LOGO_NAME || "my app"}
=======
            <Image
                src={process.env.NEXT_PUBLIC_LOGO || "/logo-placeholder.svg"}
                width={
                    (process.env.NEXT_PUBLIC_LOGO_WIDTH as
                        | number
                        | undefined) || 80
                }
                height={
                    (process.env.NEXT_PUBLIC_LOGO_HEIGHT as
                        | number
                        | undefined) || 17
                }
                alt="logo"
                priority
            />
            <p
                className={`text-2xl font-semibold ${!user && "text-white"}`}
                style={{ fontVariant: "small-caps" }}
            >
                My App
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
            </p>
        </div>
    );
}

export default Logo;
