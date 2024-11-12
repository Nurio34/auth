import Link from "next/link";

function LoginLinkButton() {
    return (
        <Link
            href={"/login"}
            className=" font-semibold c-btn"
            style={{ fontVariant: "small-caps" }}
        >
            Login
        </Link>
    );
}

export default LoginLinkButton;
