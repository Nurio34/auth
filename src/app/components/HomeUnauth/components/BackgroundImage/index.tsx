import React from "react";

function BackgroundImage() {
    return (
        <div
            className=" fixed top-0 left-0 w-screen h-screen -z-50"
            style={{
                backgroundImage: "url('/space.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
    );
}

export default BackgroundImage;
