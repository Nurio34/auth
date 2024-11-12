import { z } from "zod";

export const SignupFormSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username must be at least 3 characters")
            .max(20, "Username must be at most 20 characters"),
        email: z.string().email("Invalid email format"),
        password: z
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
        passwordConfirm: z
            .string()
            .min(8, "Password confirmation must be at least 8 characters"),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords don't match",
        path: ["passwordConfirm"],
    });

export type FormType = {
    username?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
};

export const initialFormData: FormType = {
    username: "nurio34",
    email: "hacerkaya1968a@gmail.com",
    password: "Cameuaifucan6_",
    passwordConfirm: "Cameuaifucan6_",
};

export type ErrorsType = {
    username?: string[];
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
} | null;
