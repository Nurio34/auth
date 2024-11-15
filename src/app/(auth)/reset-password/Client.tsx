"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Inputs from "./_components/Inputs";
import { setOtpExpires } from "@/store/slices/user";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useEffect } from "react";

function ResetPasswordPageClient() {
    const { user, otpExpires } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const resetPasswordOtpExpires = new Date(otpExpires!).getTime();
    const time = new Date().getTime();
    const timeDiff = (resetPasswordOtpExpires - time) / 1000;

    const params = useSearchParams();
    const email = params.get("email");

    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
            return;
        }
    }, []);

    const resendResetOtp = async () => {
        try {
            const response = await axiosInstance.post("/auth/forget-password", {
                email,
            });

            if (response.data.status === "success") {
                dispatch(setOtpExpires(response.data.resetPasswordOtpExpires));
                toast.success(response.data.message);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <>
            {!user && (
                <main className=" grid justify-items-center py-[16vh] px-[2vw] gap-y-[1vh] text-center">
                    <div>
                        <MdOutlineMarkEmailRead color="green" size={72} />
                    </div>
                    <h1 className="font-semibold text-lg">
                        Please check your email.
                    </h1>
                    <p>
                        We have sent an Reset Password Otp code to{" "}
                        <span className="text-[green]">{email}</span>
                    </p>
                    <Inputs email={email} timeDiff={timeDiff} />
                    <div className="flex items-center gap-x-[1vw]">
                        <p>Did not get the code ?</p>
                        <button
                            type="button"
                            className="text-purple-500 underline underline-offset-2"
                            onClick={resendResetOtp}
                        >
                            Click to resend.
                        </button>
                    </div>
                </main>
            )}
        </>
    );
}

export default ResetPasswordPageClient;
