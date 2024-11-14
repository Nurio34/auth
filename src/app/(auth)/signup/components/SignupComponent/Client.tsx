"use client";

import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    writeErrors,
    writeIsLoading,
    writeIsSubmitted,
} from "@/store/slices/auth";
import { setUser } from "@/store/slices/user";
import { SignupFormSchema } from "@/type/form";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

function SignupClientComponent() {
    const { user } = useAppSelector((s) => s.user);
    const { form, isSubmitted } = useAppSelector((s) => s.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();

    //! *** PREVENT THIS ROUTE IS AUTHED ***
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, []);
    //! ************************************

    useEffect(() => {
        const signup = async () => {
            const validation = SignupFormSchema.safeParse(form);

            if (!validation.success) {
                dispatch(writeErrors(validation.error.formErrors.fieldErrors));
                return;
            }

            dispatch(writeIsLoading(true));

            try {
                const response = await axiosInstance.post("/auth/signup", form);

                if (response.data.status === "success") {
                    toast.success(response.data.message);
                    dispatch(setUser(response.data.user));
                    dispatch(writeErrors(null));
                    router.push("/verify");
                    sessionStorage.setItem(
                        "last-page",
                        JSON.stringify("signup"),
                    );
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.data.message);
                }
            } finally {
                dispatch(writeIsLoading(false));
                dispatch(writeIsSubmitted(false));
            }
        };

        if (isSubmitted) {
            signup();
        }
    }, [form, isSubmitted, dispatch, router]);

    return (
        <>
            {!user && (
                <section className="grid place-content-center py-[4vh]">
                    <div className="bg-blue-100 py-[1vh] px-[2vw] rounded-lg border-2 border-blue-200 shadow-md shadow-blue-200">
                        <article className="flex items-center gap-[1vw]">
                            <p>Already have an account ?</p>
                            <Link
                                href="/login"
                                className="text-purple-400 underline underline-offset-4"
                            >
                                Login
                            </Link>
                        </article>
                    </div>
                </section>
            )}
        </>
    );
}

export default SignupClientComponent;
