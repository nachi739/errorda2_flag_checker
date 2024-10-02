import React from "react";
import Navbar from "./Navbar/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
