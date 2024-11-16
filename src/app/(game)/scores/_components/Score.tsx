import { useEffect, useState } from "react";

function Score({ score }: { score: number }) {
    const [scoreToRender, setScoreToRender] = useState(0);
    console.log(scoreToRender);

    useEffect(() => {
        //! Calculate the score increment
        const int = setInterval(() => {
            setScoreToRender((pre) => {
                if (pre === score - 1) {
                    clearInterval(int);
                }
                return pre + 1;
            });
        }, 10);

        // Use const instead of let
        const timeout = setTimeout(() => {
            clearInterval(int);
            setScoreToRender(score);
        }, 3000);

        // Cleanup function
        return () => {
            clearInterval(int);
            clearTimeout(timeout);
        };
    }, [score]);
    return (
        <p className="w-1/2 text-center font-bold py-1 px-2">{scoreToRender}</p>
    );
}

export default Score;
