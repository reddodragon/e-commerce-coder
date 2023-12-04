'use client';
import { createContext, useState, useEffect } from 'react';

const EcomerceContext = createContext();

const EcomerceProvider = ({ children }) => {
  // Obtener el carrito de localStorage al inicio
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  // Actualizar localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity + 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const palabra = 'hola'

  return (
    <EcomerceContext.Provider value={{ cart, addToCart, removeFromCart, palabra }}>
      {children}
    </EcomerceContext.Provider>
  );
};

export { EcomerceProvider };
export default EcomerceContext;