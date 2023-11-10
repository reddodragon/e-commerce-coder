'use client'
import { usePathname } from 'next/navigation'
import { Manrope } from "@next/font/google";
import Navbar from "../components/Navbar"
import "./globals.css";


const font = Manrope({
    weight: ["300", "400", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
});


 
export default function RootLayout({ children }) {
    const pathname = usePathname();
    
    return (
        <html lang="en">
            <body className={font.className}>
                <div className="bg-[#110d07] flex flex-col items-center justify-center min-h-screen overflow-hidden">
                    <main className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#1e1305] w-4/5 h-screen relative">
                        {pathname === '/admin/login' ? null : <Navbar />}
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
