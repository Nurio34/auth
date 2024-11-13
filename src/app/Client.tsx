"use client";

import { useAppSelector } from "@/store/hooks";
import HomeUnauth from "./components/HomeUnauth";
import HomeAuth from "./components/HomeAuth";
import { useEffect } from "react";

function HomePageClient() {
    const { user } = useAppSelector((s) => s.user);

    return !user ? <HomeUnauth /> : <HomeAuth />;
}

export default HomePageClient;
