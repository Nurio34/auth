"use client";

import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    writeErrors,
    writeIsLoading,
    writeIsSubmitted,
} from "@/store/slices/auth";
import { setUser } from "@/store/slices/user";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

function LoginClientComponent() {
    const { user } = useAppSelector((s) => s.user);
    const { form, isSubmitted } = useAppSelector((s) => s.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();

    //! *** PREVENT THIS ROUTE IS AUTHED ***
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);
    //! ************************************

    useEffect(() => {
        const login = async () => {
            dispatch(writeIsLoading(true));

            try {
                const response = await axiosInstance.post("/auth/login", form);

                if (response.data.status === "success") {
                    toast.success(response.data.message);
                    dispatch(setUser(response.data.user));
                    router.push("/");
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.data.message);
                }
            } finally {
                dispatch(writeIsLoading(false));
                dispatch(writeErrors(null));
                dispatch(writeIsSubmitted(false));
            }
        };

        if (isSubmitted) {
            login();
        }
    }, [form, isSubmitted, dispatch, router]);

    return (
        <>
            {!user && (
                <section className=" grid place-content-center py-[4vh] ">
                    <div className=" bg-blue-100 py-[1vh] px-[2vw] rounded-lg border-2 border-blue-200 shadow-md shadow-blue-200  text-xs md:text-base space-y-[1vh] ">
                        <article className="flex items-center justify-center gap-[1vw]">
                            <p>Did you forget your password ?</p>
                            <Link
                                href={"/forget-password"}
                                className="text-purple-400 underline underline-offset-4"
                            >
                                Reset your password
                            </Link>
                        </article>
                        <article className="flex items-center justify-center gap-[1vw]">
                            <p>Are you new to MyApp ?</p>
                            <Link
                                href={"/signup"}
                                className="text-purple-400 underline underline-offset-4"
                            >
                                Create an account
                            </Link>
                        </article>
                    </div>
                </section>
            )}
        </>
    );
}

export default LoginClientComponent;
