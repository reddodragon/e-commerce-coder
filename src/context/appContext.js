'use client';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EcomerceContext = createContext();

const EcomerceProvider = ({ children }) => {  
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [editando, setEditando] = useState(false);
  const [itemEditandoId, setItemEditandoId] = useState(null);

  // Inicializar el carrito desde localStorage solo en el lado del cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(initialCart);
    }
  }, []);

  // Actualizar localStorage cuando el carrito cambia
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
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

  const handleEdit = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    setCart(updatedCart);
    setEditando(false);
    router.push(`/cart`);
  };

  const handleEditar = (itemId) => {
    setEditando(true);
    setItemEditandoId(itemId);
    router.push(`/products/detail/${itemId}`);
  };

  const emptyCart = () => {
    setCart([]); 
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify([])); 
    }
  };
  
  return (
    <EcomerceContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      handleEditar,
      handleEdit, 
      editando,
      itemEditandoId,
      emptyCart
    }}>
      {children}
    </EcomerceContext.Provider>
  );
};

export { EcomerceProvider };
export default EcomerceContext;