import Image from "next/image";
import React from "react";

function Logo() {
    return (
        <figure className=" relative w-9 aspect-square">
            <Image src={"/vercel.svg"} fill alt="logo" priority />
        </figure>
    );
}

export default Logo;
