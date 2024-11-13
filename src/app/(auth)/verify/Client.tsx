"use client";

import axiosInstance from "@/axios";
import { useAppSelector } from "@/store/hooks";
import { pure } from "@/utils/domPurify";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Inputs from "./_components/Inputs";

function VerifyClient() {
    const { user } = useAppSelector((s) => s.user);

    const router = useRouter();

    //! *** PREVENT THIS ROUTE IS AUTHED ***
    useEffect(() => {
        if (!user || user?.isVerified) {
            router.push("/");
        }
    }, [user, router]);
    //! ************************************

    const resendOtp = useCallback(async () => {
        try {
            const response = await axiosInstance.post("/auth/resend-otp", {
                email: user?.email,
            });

            console.log(response);

            if (response.data.status === "success") {
                toast.success(response.data.message);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    }, [user?.email]);

    useEffect(() => {
        if (user && !user.isVerified) {
            resendOtp();
        }
    }, [resendOtp, user]);

    return (
        <>
            {user && !user?.isVerified && (
                <main className=" grid justify-items-center py-[16vh] px-[2vw] gap-y-[1vh] text-center">
                    <div>
                        <MdOutlineMarkEmailRead color="green" size={72} />
                    </div>
                    <h1 className="font-semibold text-lg">
                        Please check your email.
                    </h1>
                    <p>
                        We have sent an Otp Code to{" "}
                        <span className="text-[green]">
                            {pure(user?.email)}
                        </span>
                    </p>
                    <Inputs />
                    <div className="flex items-center gap-x-[1vw]">
                        <p>Did not get the code ?</p>
                        <button
                            type="button"
                            className="text-purple-500 underline underline-offset-2"
                            onClick={resendOtp}
                        >
                            Click to resend.
                        </button>
                    </div>
                </main>
            )}
        </>
    );
}

export default VerifyClient;
