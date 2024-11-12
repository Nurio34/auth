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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

function SignupClientComponent() {
    const { form, isSubmitted } = useAppSelector((s) => s.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();

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
                    router.push("/");
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

    return <div hidden></div>;
}

export default SignupClientComponent;
