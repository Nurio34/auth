import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import VerifyButton from "./VerifyButton";
import Countdown from "./Countdown";

function Inputs({ timeDiff }: { timeDiff: number | undefined }) {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const InputElements = useRef<(HTMLInputElement | null)[]>([]);
    const ButtonElement = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (InputElements.current) {
            InputElements.current[0]?.focus();
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp = [...otp];
        const value = e.target.value.slice(-1);
        newOtp[index] = value;
        setOtp(newOtp);

        if (InputElements.current[index + 1]) {
            InputElements.current[index + 1]?.focus();
        } else {
            ButtonElement.current?.focus();
        }
    };

    const handleDelete = (
        e: KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            const newOtp = [...otp];

            //! if there is value in input ***
            if (otp[index]) {
                newOtp[index] = "";
                setOtp(newOtp);
                return;
            }
            //! ******************************

            //! *** if input is empty ***
            else {
                if (InputElements.current[index - 1]) {
                    InputElements.current[index - 1]?.focus();
                }
            }
            //! *************************
        }
    };

    return (
        <div className="space-y-[1vh]">
            <div className="flex items-center gap-[1vw]">
                {otp.map((_, index) => {
                    return (
                        <input
                            key={index}
                            type="number"
                            ref={(el) => {
                                InputElements.current[index] = el;
                            }}
                            className="bg-blue-100 w-1/12 max-w-[182px] text-5xl md:text-9xl aspect-square grow no-spinner rounded-lg text-center"
                            value={otp[index]}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleDelete(e, index)}
                        />
                    );
                })}
            </div>
            <div className="flex items-center justify-center gap-[2vw]">
                <VerifyButton ButtonElement={ButtonElement} otp={otp} />
                <Countdown timeDiff={timeDiff} />
            </div>
        </div>
    );
}

export default Inputs;
