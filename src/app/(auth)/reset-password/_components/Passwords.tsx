import { Dispatch, SetStateAction } from "react";
import { ErrorsType } from "./Inputs";

function Passwords({
    newPassword,
    setNewPassword,
    newPasswordConfirm,
    setNewPasswordConfirm,
    errors,
}: {
    newPassword: string;
    setNewPassword: Dispatch<SetStateAction<string>>;
    newPasswordConfirm: string;
    setNewPasswordConfirm: Dispatch<SetStateAction<string>>;
    errors: ErrorsType;
}) {
    return (
        <form
            className="py-[2vh] px-[2vw] rounded-lg bg-blue-100 space-y-[1vh]"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="grid gap-y-[1vh]">
                <label htmlFor="newPassword" className=" justify-self-start">
                    New password
                </label>
                <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="py-1 px-[1vw] rounded-md"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoFocus
                />
                <p className="text-sm font-semibold justify-self-start text-[red]">
                    {errors && errors.newPassword && errors.newPassword[0]}
                </p>
            </div>
            <div className="grid gap-y-[1vh]">
                <label
                    htmlFor="newPasswordConfirm"
                    className=" justify-self-start"
                >
                    Confirm password
                </label>
                <input
                    type="password"
                    name="newPasswordConfirm"
                    id="newPasswordConfirm"
                    className="py-1 px-[1vw] rounded-md"
                    value={newPasswordConfirm}
                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                />
                <p className="text-sm font-semibold justify-self-start text-[red]">
                    {errors &&
                        errors.newPasswordConfirm &&
                        errors.newPasswordConfirm[0]}
                </p>
            </div>
        </form>
    );
}

export default Passwords;
