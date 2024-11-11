import React from "react";

function Lights() {
    return (
        <div className="w-full h-full  absolute flex">
            <div
                className=" h-[150%] grow -rotate-45 bg-gradient-to-t from-purple-400 to-purple-100  opacity-70 blur-3xl"
                style={{ filter: "dropShadow : 0 0 20px red" }}
            ></div>
            <div className=" h-[150%] grow rotate-45 bg-gradient-to-t from-purple-400 to-purple-100  opacity-70 blur-3xl"></div>
        </div>
    );
}

export default Lights;
