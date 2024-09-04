"use client"

import { useStore } from "@/lib/GlobalStore";
import { useEffect } from "react";

export default function Appinit({ children }) {

    const { userData, setUserData } = useStore();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        // console.log(data);
        setUserData(data)
    }, [!userData])

    useEffect(() => {
        const tid = setInterval(async() => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/health_check`);
                const data = await res.json();
                // console.log(data);
            } catch (error) {
                console.log("backend error:", error);
            }
        }, 10000);

        return () => {
            clearInterval(tid);
        }
    })

    return (
        <>
            {children}
        </>
    );
}