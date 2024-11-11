import Image from "next/image";

function Logo() {
    return (
        <div className=" flex gap-2 items-center">
            <figure className=" relative w-9 aspect-square">
                <Image src={"/vercel.svg"} fill alt="logo" priority />
            </figure>
            <p
                className="text-2xl font-semibold"
                style={{ fontVariant: "small-caps" }}
            >
                My App
            </p>
        </div>
    );
}

export default Logo;
