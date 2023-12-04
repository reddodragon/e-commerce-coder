"use client";
import React, { useState, useContext } from "react";
import EcomerceContext from '../../context/appContext'; // Reemplaza con la ruta correcta

const QuantityDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { price } = item;

    // Importa y utiliza el contexto directamente
    const { addToCart } = useContext(EcomerceContext);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({
            ...item,
            quantity: quantity,
        });
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

            {/* Botón "Add to Cart" debajo y centrado */}
            <button
                className="bg-[#f1720c] px-4 py-2 rounded-3xl mt-2"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default QuantityDetail;