import React, {useEffect} from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import {signIn, useSession} from "next-auth/react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const session = useSession();

    useEffect(() => {
        if (session.status === "unauthenticated") {
            void signIn();
        }
    }, [session]);

    return (
        <div className="flex max-h-screen min-h-screen max-w-full flex-col justify-between overflow-x-hidden">
            <Header/>
            <div className="relative flex flex-grow flex-col content-center items-center justify-start p-2 pt-4">
                {children}
            </div>
            <Navigation/>
        </div>
    );
};

export default Layout;
