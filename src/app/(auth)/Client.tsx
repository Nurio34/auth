"use client";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { initialFormData, FormType } from "@/type/form";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { writeForm, writeIsSubmitted } from "@/store/slices/auth";

export const formControl = [
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

function AuthClient() {
    const path = usePathname().split("/")[1];

    const [form, setForm] = useState<FormType>(initialFormData);

    const { errors, isLoading } = useAppSelector((s) => s.auth);
    const { user } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(writeForm(form));
        dispatch(writeIsSubmitted(true));
    };

    const handleIconClick = (name: string) => {
        if (name === "password") {
            const passwordInput = document.querySelector(
                "#password",
            ) as HTMLInputElement;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }
        if (name === "passwordConfirm") {
            const passwordInput = document.querySelector(
                "#passwordConfirm",
            ) as HTMLInputElement;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }
    };

    const pathCondition = path === "login" || path == "signup";

    return (
        <>
            {!user && pathCondition && (
                <main className="  grid place-content-start justify-center pt-[4vh]">
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
                        className=" justify-self-center"
                    />
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className="py-[4vh] text-xl font-light tracking-wider text-center">
                                {path === "login" ? "Login" : "Signup"} to the
                                App
                            </legend>
                            <div
                                className=" bg-blue-100 py-[2vh] px-[2vw] rounded-lg border-2 border-blue-200 shadow-lg shadow-blue-200
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
                                                    form[
                                                        control.name as keyof FormType
                                                    ]
                                                }
                                                onChange={handleChange}
                                            />
                                            <button
                                                type="button"
                                                className=" absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2"
                                                onClick={() =>
                                                    handleIconClick(
                                                        control.name,
                                                    )
                                                }
                                            >
                                                {control.icon}
                                            </button>
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
            )}
        </>
    );
}

export default AuthClient;
