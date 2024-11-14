import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsLoading, setUser } from "@/store/slices/user";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { MutableRefObject } from "react";
import toast from "react-hot-toast";

function VerifyButton({
    ButtonElement,
    otp,
}: {
    ButtonElement: MutableRefObject<HTMLButtonElement | null>;
    otp: string[];
}) {
    const { isLoading } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const isOtpProvided = otp.every((box) => box);

    const router = useRouter();

    const verify = async () => {
        dispatch(setIsLoading(true));

        try {
            const response = await axiosInstance.post("/auth/verify-email", {
                otp: otp.join(""),
            });

            if (response.data.status === "success") {
                dispatch(setUser(response.data.user));
                router.push("/");
                toast.success(response.data.message);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return (
        <button
            ref={ButtonElement}
            type="button"
            className={`flex items-center justify-center gap-1 w-1/2 py-[1vh] rounded-lg capitalize font-bold tracking-widest transition-all
                ${
                    !isOtpProvided || isLoading
                        ? "bg-gray-500 text-gray-400 cursor-none pointer-events-none"
                        : "bg-green-500 text-white hover:bg-green-500 hover:scale-105 active:scale-95"
                }        
            `}
            style={{ fontVariant: "small-caps" }}
            onClick={verify}
        >
            <span>{isLoading ? "Verifing" : "Verify"}</span>
            {isLoading && (
                <span className="loading loading-spinner loading-md"></span>
            )}
        </button>
    );
}

export default VerifyButton;
