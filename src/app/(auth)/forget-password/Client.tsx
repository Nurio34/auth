"use client";

import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsLoading, setOtpExpires } from "@/store/slices/user";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

function ForgetPasswordPageClient() {
    const { user, isLoading } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [router]);

    const sendResetOtp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(setIsLoading(true));

        try {
            const response = await axiosInstance.post("/auth/forget-password", {
                email,
            });

            if (response.data.status === "success") {
                dispatch(setOtpExpires(response.data.resetPasswordOtpExpires));
                toast.success(response.data.message);
                router.push(`/reset-password?email=${email}`);
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
        <>
            {!user && (
                <main className=" grid place-content-center justify-items-center py-[16vh] gap-y-[2vh]">
                    <Image
                        src={
                            process.env.NEXT_PUBLIC_LOGO ||
                            "/logo-placeholder.svg"
                        }
                        width={
                            (process.env.NEXT_PUBLIC_LOGO_WIDTH as
                                | number
                                | undefined) || 80
                        }
                        height={
                            (process.env.NEXT_PUBLIC_LOGO_HEIGHT as
                                | number
                                | undefined) || 17
                        }
                        alt="logo"
                        priority
                    />

                    <h1 className="text-2xl">Forgot Your Password ?</h1>

                    <form
                        className="w-[150%] grid gap-[1vh] bg-blue-100 shadow-md shadow-blue-200 py-[2vh] px-[2vw] rounded-lg"
                        onSubmit={sendResetOtp}
                    >
                        <label htmlFor="email" className="font-semibold">
                            Email adress
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="py-1 px-[1vw] rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            className={`flex justify-center items-center gap-x-[1vw]
                                ${
                                    !isLoading
                                        ? "c-btn bg-[blue] hover:bg-blue-500 hover:scale-x-105 active:scale-95"
                                        : "c-d-btn"
                                }
                                `}
                            disabled={isLoading}
                        >
                            <span>
                                {isLoading
                                    ? "Sending OTP"
                                    : " Request Reset OTP"}
                            </span>
                            {isLoading && (
                                <span className="loading loading-spinner loading-md"></span>
                            )}
                        </button>

                        <Link
                            href={"/login"}
                            className=" justify-self-end text-[purple] hover:text-purple-500 underline underline-offset-4"
                        >
                            Back to Login Page
                        </Link>
                    </form>
                </main>
            )}
        </>
    );
}

export default ForgetPasswordPageClient;
