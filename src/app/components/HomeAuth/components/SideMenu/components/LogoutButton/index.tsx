import axiosInstance from "@/axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { persistor } from "@/store/Provider";
import { logoutUser, setIsLoading } from "@/store/slices/user";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

function LogoutButton() {
    const { isLoading } = useAppSelector((s) => s.user);
    const dispatch = useAppDispatch();

    const logout = async () => {
        dispatch(setIsLoading(true));

        try {
            const response = await axiosInstance.post("/auth/logout");
            if (response.data.status === "success") {
                dispatch(logoutUser());
                persistor.purge();
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
            type="button"
            className={`flex justify-center items-center gap-[1vw]
                ${isLoading ? "c-d-btn" : "c-btn bg-[red] hover:bg-red-500"}    
            `}
            disabled={isLoading}
            onClick={logout}
        >
            <span>Logout</span>
            {isLoading && (
                <span className="loading loading-spinner loading-md"></span>
            )}
        </button>
    );
}

export default LogoutButton;
