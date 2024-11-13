import axiosInstance from "@/axios";
import { useAppDispatch } from "@/store/hooks";
import { persistor } from "@/store/Provider";
import { logoutUser } from "@/store/slices/user";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

function LogoutButton() {
    const dispatch = useAppDispatch();

    const logout = async () => {
        try {
            const response = await axiosInstance.post("/auth/logout");
            if (response.data.status === "success") {
                dispatch(logoutUser());
                persistor.purge();
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);

            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <button
            type="button"
            className="c-btn bg-[red] hover:bg-red-500"
            onClick={logout}
        >
            Logout
        </button>
    );
}

export default LogoutButton;
