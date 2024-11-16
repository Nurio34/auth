import { useEffect, useState } from "react";

function Score({ score }: { score: number }) {
    const [scoreToRender, setScoreToRender] = useState(0);
    console.log(scoreToRender);

    useEffect(() => {
        //! score'dan eski skoru çıkart
        let timeout: NodeJS.Timeout;

        const int = setInterval(() => {
            setScoreToRender((pre) => {
                if (pre === score - 1) {
                    clearInterval(int);
                    clearTimeout(timeout);
                }

                return pre + 1;
            });
        }, 10);

        timeout = setTimeout(() => {
            clearInterval(int);
            setScoreToRender(score);
        }, 3000);

        return () => {
            clearInterval(int);
            clearTimeout(timeout);
        };
        // oldScore.current = score;
    }, [score]);

    return (
        <p className="w-1/2 text-center font-bold py-1 px-2">{scoreToRender}</p>
    );
}

export default Score;
