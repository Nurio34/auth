import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    const { user } = useAppSelector((s) => s.user);

    return (
        <div className=" flex gap-2 items-center">
            <Link href={"/"}>
                <Image
                    src={
                        process.env.NEXT_PUBLIC_LOGO || "/logo-placeholder.svg"
                    }
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
            </Link>
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
