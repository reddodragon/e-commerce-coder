"use client";
import { useState } from "react";
import CartIcon from "../../svg/Cart";
import CartItem from "./CartItem";
import CloseButton from "../../svg/Close";
import Link from "next/link";
import useCommerce from "../../../hooks/useCommerce";  // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const CartButton = () => {
  const { cart } = useCommerce();  // Utiliza el hook para obtener el contexto

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="text-[#ede0d0]" onClick={toggleMenu}>
        <CartIcon />
      </div>
      {isMenuOpen && (
        <div className="fixed shadow-xl rounded-bl-3xl text-[#1e1305] top-0 right-0 w-56 h-1/2 bg-[#ede0d0]">
          <div className="h-full flex flex-col justify-between items-center">
            <div className="flex justify-center flex-col w-full px-5">
              <div className="py-4 mx-auto" onClick={() => closeMenu()}>
                <CloseButton />
              </div>

              <div className="text-[#1e1305] scroll  overflow-auto">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>
            <div className="p-4">
              <Link
                onClick={() => closeMenu()}
                className="uppercase text-sm font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl"
                href="/cart"
              >
                Ver Carrito
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;