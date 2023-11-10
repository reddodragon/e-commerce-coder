import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

const Navbar = () => {
    return (
        <nav className="bg-[#1e1305] flex flex-row justify-around h-20 items-center">
            <Link className="text-xl text-[#ede0d0]" href="/">
                Home
            </Link>
            <Link className="text-xl text-[#ede0d0]" href="/about">
                About
            </Link>
            <Link className="text-xl text-[#ede0d0]" href="/products/all">
                Products
            </Link>
            <div className="   flex items-center">
                <button className="text-xl text-[#ede0d0]">
                    <CartButton />
                </button>
            </div>
        </nav>
    );
};

export default Navbar