"use client";

import { useAppSelector } from "@/store/hooks";
import { FormEvent, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

function GamePageClient() {
    const { user } = useAppSelector((s) => s.user);

    const [score, setScore] = useState(0);

    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        socketRef.current = io("http://localhost:5000", {
            withCredentials: true,
        });

        socketRef.current.on("connect", () => {
            console.log("Connected");
        });
    }, []);

    function endGame(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (socketRef.current) {
            socketRef.current.emit("score", {
                player: user?.username,
                score,
            });
        }
    }

    return (
        <div className="py-[2vh] px-[2vw]">
            <form className=" flex gap-2" onSubmit={endGame}>
                <input
                    type="text"
                    name="score"
                    id="score"
                    className="input input-bordered "
                    placeholder="Score ..."
                    value={score}
                    onChange={(e) => setScore(parseInt(e.target.value))}
                />
                <button type="submit" className="btn bg-green-500 ">
                    End
                </button>
            </form>
        </div>
    );
}

export default GamePageClient;
