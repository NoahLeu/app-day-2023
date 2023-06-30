import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
                {children}
            <Navigation/>
        </div>
    )
}

export default Layout;