import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsLoading } from "@/store/slices/user";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { ErrorsType } from "./Inputs";

function VerifyButton({
    ButtonElement,
    email,
    newPassword,
    newPasswordConfirm,
    otp,
    setErrors,
}: {
    ButtonElement: MutableRefObject<HTMLButtonElement | null>;
    email: string | null;
    newPassword: string;
    newPasswordConfirm: string;
    otp: string[];
    setErrors: Dispatch<SetStateAction<ErrorsType>>;
}) {
    const { isLoading } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const isOtpProvided = otp.every((box) => box);

    const router = useRouter();

    const ResetPasswordFormSchema = z
        .object({
            newPassword: z
                .string()
                .min(8, "Password must be at least 8 characters")
                .regex(
                    /[A-Z]/,
                    "Password must contain at least one uppercase letter",
                )
                .regex(/[0-9]/, "Password must contain at least one number")
                .regex(
                    /[-_!@#$%^&*(),.?":{}|<>]/,
                    "Password must contain at least one special character",
                ),
            newPasswordConfirm: z
                .string()
                .min(8, "Password confirmation must be at least 8 characters"),
        })
        .refine((data) => data.newPassword === data.newPasswordConfirm, {
            message: "Passwords don't match",
            path: ["newPasswordConfirm"],
        });

    const verify = async () => {
        const validate = ResetPasswordFormSchema.safeParse({
            newPassword,
            newPasswordConfirm,
        });

        if (!validate.success) {
            setErrors(validate.error.formErrors.fieldErrors as ErrorsType);
            return;
        }

        dispatch(setIsLoading(true));
        console.log(email);
        try {
            const response = await axiosInstance.post("/auth/reset-password", {
                email,
                newPassword,
                newPasswordConfirm,
                otp: otp.join(""),
            });

            if (response.data.status === "success") {
                router.push("/login");
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
            <span>{isLoading ? "Reseting Password" : "Reset Password"}</span>
            {isLoading && (
                <span className="loading loading-spinner loading-md"></span>
            )}
        </button>
    );
}

export default VerifyButton;
