import { useEffect, useState } from "react";

function Countdown({ timeDiff }: { timeDiff: number }) {
    const [time, setTime] = useState(timeDiff);
    useEffect(() => {
        // Reset the time when timeDiff prop changes
        setTime(timeDiff);
    }, [timeDiff]);

    useEffect(() => {
        // Only start the interval if time is greater than zero
        if (time <= 0) return;

        const timeInterval = setInterval(() => {
            setTime((prev) => {
                // Stop the countdown when time reaches zero
                if (prev <= 1) {
                    clearInterval(timeInterval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, [time]);

    return (
        <p
            className={` font-semibold ${
                time > 0 ? "text-green-500" : "text-[red]"
            }`}
        >
            {time > 0 ? time.toFixed(0) : "Otp Expired"}
        </p>
    );
}

export default Countdown;
