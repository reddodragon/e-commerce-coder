'use client';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

const EcomerceContext = createContext();

const EcomerceProvider = ({ children }) => {

  const router = useRouter()
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [editando, setEditando] = useState(false);
  const [itemEditandoId, setItemEditandoId] = useState(null); // Nuevo estado para almacenar el ID del item en edición

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
    router.push(`/cart`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleEdit = (itemId, newQuantity) => {
    // Actualiza la cantidad en el carrito
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
    setEditando(false); // Cambia el estado de edición a false
    router.push(`/cart`);
  };

  const handleEditar = (itemId) => {
    setEditando(true);
    setItemEditandoId(itemId);
    router.push(`/products/detail/${itemId}`);
  };
  
  return (
    <EcomerceContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      handleEditar,
      handleEdit, // Agregamos la nueva función handleEdit al contexto
      editando,
      itemEditandoId,
    }}>
      {children}
    </EcomerceContext.Provider>
  );
};

export { EcomerceProvider };
export default EcomerceContext;