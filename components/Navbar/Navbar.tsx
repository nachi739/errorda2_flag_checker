import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/" className="text-2x1 font-medium no-underline hover:underline">
                    Home
                </Link>
                <div>
                    <ul className="flex items-center text-sm py-3">
                        <li>
                            <Link
                                href="https://github.com/nachi739/Errorda2"
                                className="bloc px-4 py-2 no-underline hover:underline"
                            >
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://qiita.com/nachi19961025"
                                className="bloc px-4 py-2 text-teal-600 no-underline hover:underline"
                            >
                                Qiita
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
