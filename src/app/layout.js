import { Manrope } from '@next/font/google'
import "./globals.css";
import Link from "next/link";

import CartButton from '@/components/CartButton';

const font = Manrope({
  weight: ['300','400','600','700'],
  style: ['normal'],
  subsets:['latin']
})

export const metadata = {
    title: "Pure Audio",
    description: "e-commerce audio",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
  <body className={font.className}>
    <div className="bg-[#110d07] flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#1e1305] w-4/5 h-screen relative">
        <nav className="bg-[#1e1305] flex flex-row justify-around h-20 items-center">
          <Link className="text-xl text-[#ede0d0]" href="/about">
            About
          </Link>
          <Link className="text-xl text-[#ede0d0]" href="/">
            Home
          </Link>
          <Link className="text-xl text-[#ede0d0]" href="/products/all">
            Products
          </Link>
          <div className="   flex items-center">
            <button className="text-xl text-[#ede0d0]"><CartButton/></button>
          </div>
        </nav>
        {children}
      </div>
    </div>
  </body>
</html>
  );
}