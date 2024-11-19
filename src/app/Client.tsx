"use client";

import { useAppSelector } from "@/store/hooks";
import HomeUnauth from "./components/HomeUnauth";
import HomeAuth from "./components/HomeAuth";

function HomePageClient() {
<<<<<<< HEAD
    const { user, isUserDeletedFromFirebase } = useAppSelector((s) => s.user);

    return !user ? (
        <HomeUnauth />
    ) : (
        <HomeAuth
            user={user}
            isUserDeletedFromFirebase={isUserDeletedFromFirebase}
        />
    );
=======
    const { user } = useAppSelector((s) => s.user);

    return !user ? <HomeUnauth /> : <HomeAuth />;
>>>>>>> 53a45dd3232ed3ff54076086937d8867dbdc20b6
}

export default HomePageClient;
