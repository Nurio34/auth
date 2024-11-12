import { useAppDispatch } from "@/store/hooks";
import { persistor } from "@/store/Provider";
import { logoutUser } from "@/store/slices/user";

function LogoutButton() {
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(logoutUser());
        persistor.purge();
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
