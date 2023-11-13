"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Todos", href: "/products/all" },
    { label: "Speakers", href: "/products/speaker" },
    { label: "Headphones", href: "/products/headphones" },
    { label: "Amplifiers", href: "/products/amplifier" },
    { label: "Microphones", href: "/products/microphones" },
];

const CategoriesMenu = () => {
    const pathname = usePathname();

    return (
        <div className="bg-[#ede0d0] h-96 mt-5  flex flex-col w-1/5 gap-24 rounded-tr-3xl rounded-br-3xl">
            <div className=" flex flex-col gap-4 justify-between ml-6 m-4 items-start">
                <div className="bg-[#1e1305] flex justify-center items-center p-1 self-stretch rounded-3xl">
                    <p className="text-[#ede0d0]">Search</p>
                </div>
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`${
                            pathname === link.href
                                ? " font-semibold bg-[#f1730c80] rounded-3xl w-full p-0.5 my-0.5 flex justify-center"
                                : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesMenu;
