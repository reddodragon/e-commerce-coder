'use client'
import Link from 'next/link';
import { useState } from 'react';
import CartIcon from './svg/Cart';
import CartItem from './CartItem'; // Asegúrate de importar correctamente el componente
import CloseButton from './svg/Close';

const CartButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Datos de ejemplo para productos en el carrito
  const cartItems = [
    { id: 1, image: '/imgs/products/Twes5.png', name: 'Twes5', price: '$1300' },
    { id: 2, image: '/imgs/products/Wh-1000xm5.png', name: 'Wh-1000xm5', price: '$950' },
    { id: 3, image: '/imgs/products/Wh-1000xm5.png', name: 'Wh-1000xm5', price: '$950' },

  ];

  return (
    <div>
      <div className=" text-[#ede0d0]" onClick={toggleMenu}>
        <CartIcon />
      </div>
      {isMenuOpen && (
        <div className="fixed shadow-xl rounded-bl-3xl text-[#1e1305] top-0 right-0 w-56 h-1/2 bg-[#ede0d0]  ">
        <div className='h-full flex flex-col justify-between items-center'>
          <div onClick={() => closeMenu()}>
            <CloseButton />
          </div>
        
          <div className="text-[#1e1305] scroll pr-2 overflow-auto">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          <div className="p-4">
            <Link onClick={() => closeMenu()} className='uppercase text-sm font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl' href="/cart">Ver Carrito</Link>
              
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default CartButton;