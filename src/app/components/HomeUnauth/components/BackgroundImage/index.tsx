function BackgroundImage() {
    const bgImage = process.env.NEXT_PUBLIC_UNAUTH_BACKGOUND_IMAGE;
    return (
        <div
            className=" fixed top-0 left-0 w-screen h-screen -z-50"
            style={{
                backgroundImage: `${
                    bgImage ? `url("${bgImage}")` : "url('/unauth_bg.webp')"
                }`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
    );
}

export default BackgroundImage;
