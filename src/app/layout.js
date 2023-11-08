
import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: "Pure Audio",
    description: "e-commerce audio",
};

export default function RootLayout({ children }) {
    return (

      <html lang="en">
      <body>
      <div className="overflow-hidden bg-[#110d07] flex flex-col items-center justify-center h-screen">
      
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] h-screen bg-[#1e1305] w-4/5">
      <nav className="bg-[#1e1305] flex flex-row justify-around h-20 items-center">
        <Link className="text-xl text-[#ede0d0]" href="/about" >About</Link>
        <Link className="text-xl text-[#ede0d0]" href="/" >Home</Link>
        <Link className="text-xl text-[#ede0d0]" href="/productos/all" >Products</Link>
      </nav>
        {children}
      </div>
    </div>
      </body>
      </html>
      
    );
}
