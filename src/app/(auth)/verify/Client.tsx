"use client";

import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { pure } from "@/utils/domPurify";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Inputs from "./_components/Inputs";
<<<<<<< HEAD
import { setOtpExpires, setUser } from "@/store/slices/user";

function VerifyClient() {
    const { user, otpExpires } = useAppSelector((s) => s.user);

    const otpExpiresRef = otpExpires && new Date(otpExpires).getTime();
    const time = new Date().getTime();
    const timeDiff = otpExpiresRef && (otpExpiresRef - time) / 1000;
=======
import { setUser } from "@/store/slices/user";

function VerifyClient() {
    const { user } = useAppSelector((s) => s.user);
    const otpExpires = user?.otpExpires && new Date(user.otpExpires).getTime();
    const time = new Date().getTime();
    const timeDiff = otpExpires && (otpExpires - time) / 1000;
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
    const router = useRouter();

    const dispatch = useAppDispatch();

    //! *** PREVENT THIS ROUTE IS AUTHED ***
    useEffect(() => {
        if (!user || user?.isVerified) {
            router.push("/");
        }
    }, [user, router]);
    //! ************************************

    const resendOtp = async () => {
        try {
            const response = await axiosInstance.post("/auth/resend-otp", {
                email: user?.email,
            });

            if (response.data.status === "success") {
                dispatch(setUser(response.data.user));
<<<<<<< HEAD
                dispatch(setOtpExpires(response.data.otpExpires));
=======
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
                toast.success(response.data.message);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    //! *** PREVENT SENDİNG RESEND OTP AFTER FİRST SİGNUP ***
    let lastPage = sessionStorage.getItem("last-page");
    if (lastPage) {
        lastPage = JSON.parse(lastPage);
    }
    //! *****************************************************

    useEffect(() => {
        if (user && !user.isVerified && lastPage !== "signup") {
            resendOtp();
        } else {
            sessionStorage.setItem("last-page", JSON.stringify("verify"));
        }
    }, []);

    return (
        <>
            {user && !user?.isVerified && (
<<<<<<< HEAD
                <main className=" grid gap-y-[3vh]  justify-items-center py-[4vh] md:py-[16vh] px-[2vw] text-center">
=======
                <main className=" grid justify-items-center py-[16vh] px-[2vw] gap-y-[1vh] text-center">
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
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
<<<<<<< HEAD
                    <Inputs timeDiff={timeDiff!} />
=======
                    <Inputs timeDiff={timeDiff} />
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
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
