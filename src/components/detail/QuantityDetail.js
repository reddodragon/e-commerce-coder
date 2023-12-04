'use client'
import React, { useState, useEffect } from "react";
import useCommerce from "../../hooks/useCommerce";

const QuantityDetail = ({ item }) => {
    const { addToCart, editando, itemEditandoId, cart, handleEdit } = useCommerce();
    const [quantity, setQuantity] = useState(1);
    const { price } = item;
  
    useEffect(() => {
      if (editando && item.id === itemEditandoId) {
        // Busca el producto en el carrito por su ID
        const productInCart = cart.find(cartItem => cartItem.id === item.id);
  
        // Si el producto está en el carrito, actualiza la cantidad en el detalle
        if (productInCart) {
          setQuantity(productInCart.quantity);
        }
      }
    }, [editando, itemEditandoId, item.id, cart]);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleClick = () => {
      if (editando) {
        // Si estás en modo de edición, utiliza la función handleEdit
        handleEdit(item.id, quantity);
      } else {
        // Si no estás en modo de edición, utiliza la función addToCart
        addToCart({
          ...item,
          quantity: quantity,
        });
      }
    };
  
    return (
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handleDecrement}
            className="bg-[#f1720c] px-4 py-2 rounded-full"
          >
            -
          </button>
          <p className="text-center rounded-full w-5 px-auto">{quantity}</p>
          <button
            onClick={handleIncrement}
            className="bg-[#f1720c] px-4 py-2 rounded-full"
          >
            +
          </button>
        </div>
  
        <p className="font-bold text-xl">
          <span className="text-[#f1720c]">${price * quantity}</span>
        </p>
  
        <button
          className="bg-[#f1720c] px-4 py-2 rounded-3xl mt-2"
          onClick={handleClick}
        >
          {editando ? "Edit" : "Add to Cart"}
        </button>
      </div>
    );
  };
  
  export default QuantityDetail;