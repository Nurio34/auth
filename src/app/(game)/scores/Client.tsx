"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import Score from "./_components/Score";

function ScoresPageClient() {
    const socketRef = useRef<Socket | null>(null);

    type ScoreType = {
        player: string;
        score: number;
    };

    const [scores, setScores] = useState<ScoreType[]>([] as ScoreType[]);
    const [sorted, setSorted] = useState<ScoreType[]>([] as ScoreType[]);

    useEffect(() => {
        //! *** SOCKET CONNECTION ***
        socketRef.current = io("http://localhost:5000", {
            withCredentials: true,
        });

        socketRef.current.on("connect", () => {
            console.log("Socket connected:", socketRef.current?.id);
        });

        socketRef.current.on("scores", (data) => {
            setScores(data.scores);
        });

        //! *** MONGODB "SCORES" COLLECTION REAL TIME CONNECTOIN ***
        // socket.on("scoreInserted", (data) => {
        //     console.log({ status: "Score inserted:", message: data });
        // });

        // // Listen for the 'scoreUpdated' event
        // socket.on("scoreUpdated", (data) => {
        //     console.log({ status: "Score updated:", message: data });
        // });

        // // Listen for the 'scoreDeleted' event
        // socket.on("scoreDeleted", (data) => {
        //     console.log({ status: "Score deleted:", message: data });
        // });
        //! **********************************************************

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    useEffect(() => {
        const sorted = scores
            .reduce((acc, scoreObj) => {
                if (acc.length === 0) {
                    acc.push(scoreObj);
                } else {
                    const index = acc.findIndex(
                        (obj) => obj.player === scoreObj.player,
                    );

                    if (index > -1) {
                        acc[index].score = acc[index].score + scoreObj.score;
                    } else {
                        acc.push(scoreObj);
                    }
                }

                return acc;
            }, [] as ScoreType[])
            .sort((a, b) => b.score - a.score);

        setSorted(sorted);
    }, [scores]);

    return (
        <main className="grid place-content-center">
            <div className=" border-2 w-96">
                <div className="flex gap-4">
                    <h2 className="w-1/2 text-center font-bold py-1 px-2 border-r-2">
                        Player
                    </h2>
                    <h2 className="w-1/2 text-center font-bold py-1 px-2">
                        Score
                    </h2>
                </div>
                {sorted.map((obj, ind) => {
                    return (
                        <div key={ind} className="flex gap-4 border-t-2">
                            <p className="w-1/2 text-center font-bold py-1 px-2 border-r-2">
                                {obj.player}
                            </p>
                            <Score score={obj.score} />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default ScoresPageClient;
