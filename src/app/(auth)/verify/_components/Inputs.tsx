import axiosInstance from "@/axios";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/user";
import { AxiosError } from "axios";
import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import toast from "react-hot-toast";

function Inputs() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const InputElements = useRef<(HTMLInputElement | null)[]>([]);

    const dispatch = useAppDispatch();

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

    const verify = async () => {
        try {
            const response = await axiosInstance.post("/auth/verify-email", {
                otp: otp.join(""),
            });

            if (response.data.status === "success") {
                dispatch(setUser(response.data.user));
                toast.success(response.data.message);
            }
            console.log(response);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
            console.log(error);
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
            <button
                type="button"
                className="bg-[green] text-white w-1/2 py-[1vh] rounded-lg capitalize font-bold tracking-widest transition-all
                    hover:bg-green-500 hover:scale-105 active:scale-95
                "
                style={{ fontVariant: "small-caps" }}
                onClick={verify}
            >
                Verify
            </button>
        </div>
    );
}

export default Inputs;
