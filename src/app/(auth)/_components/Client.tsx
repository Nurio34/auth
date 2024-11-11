import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { z, ZodIssue } from "zod";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import axios from "axios";

const formControl = [
    {
        name: "username",
        label: "username",
        type: "text",
        icon: <FaUser />,
        visiblePath: ["signup"],
    },
    {
        name: "email",
        label: "email",
        type: "email",
        icon: <MdEmail />,
        visiblePath: ["login", "signup"],
    },
    {
        name: "password",
        label: "password",
        type: "password",
        icon: <RiLockPasswordFill />,
        visiblePath: ["login", "signup"],
    },
    {
        name: "passwordConfirm",
        label: "comfirm password",
        type: "password",
        icon: <GiConfirmed />,
        visiblePath: ["signup"],
    },
];

export const FormSchema = z
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

export type FormType = z.infer<typeof FormSchema>;

const initialFormData: FormType = {
    username: "nurio34",
    email: "hacerkaya1968a@gmail.com",
    password: "Cameuaifucan6_",
    passwordConfirm: "Cameuaifucan6_",
};

function Client() {
    const path = usePathname().split("/")[1];

    const [form, setForm] = useState<FormType>(initialFormData);
    const [errors, setErrors] = useState<{
        username?: string[];
        email?: string[];
        password?: string[];
        passwordConfirm?: string[];
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation = FormSchema.safeParse(form);

        if (!validation.success) {
            setErrors(validation.error.formErrors.fieldErrors);
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/v1/auth/signup",
                form,
                { withCredentials: true },
            );
            console.log(response);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className=" w-screen h-screen grid place-content-start justify-center py-[4vh]">
            <Image
                src={"/next.svg"}
                width={80}
                height={17}
                alt="logo"
                priority
                className=" justify-self-center"
            />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="py-[4vh] text-xl font-light tracking-wider text-center">
                        {path === "login" ? "Login" : "Signup"} to the App
                    </legend>
                    <div
                        className=" bg-blue-100 py-[2vh] px-[2vw] rounded-lg border-2 border-blue-100 shadow-lg shadow-blue-100
                        grid gap-[1vh]
                    "
                    >
                        {formControl.map((control) => (
                            <label
                                key={control.name}
                                htmlFor={control.name}
                                className={`space-y-[0.5vh] 
                                    ${
                                        !control.visiblePath.includes(path) &&
                                        "hidden"
                                    }    
                                `}
                            >
                                <p className=" text-sm capitalize">
                                    {control.label}
                                </p>
                                <div className=" relative">
                                    <input
                                        type={control.type}
                                        name={control.name}
                                        id={control.name}
                                        className="w-full min-w-64 py-1 px-[1vw] rounded-md"
                                        value={
                                            form[control.name as keyof FormType]
                                        }
                                        onChange={handleChange}
                                    />
                                    <div className=" absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2">
                                        {control.icon}
                                    </div>
                                </div>
                                {errors &&
                                    errors[
                                        control.name as keyof FormType
                                    ]?.[0] && (
                                        <p className=" text-[red] text-sm py-1">
                                            {
                                                errors[
                                                    control.name as keyof FormType
                                                ]?.[0]
                                            }
                                        </p>
                                    )}
                            </label>
                        ))}
                        <button
                            type="submit"
                            className={`flex justify-center items-center gap-2
                                ${
                                    isLoading
                                        ? "c-d-btn"
                                        : "c-btn bg-green-500 hover:bg-[green] "
                                }
                                `}
                            disabled={isLoading}
                        >
                            {path === "login" ? "Login" : "Signup"}
                            {isLoading && (
                                <span className="loading loading-spinner loading-md"></span>
                            )}
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
    );
}

export default Client;
