"use client";
import { useState } from "react";

const QuantityDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { price } = item;

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="flex justify-around w-full items-center ">
            <div className="flex items-center justify-between gap-2">
                <button
                    onClick={handleDecrement}
                    className="bg-[#f1720c]  px-4 py-2 rounded-full"
                >
                    -
                </button>
                <p className=" text-center rounded-full w-5 px-auto">
                    {quantity}
                </p>
                <button
                    onClick={handleIncrement}
                    className="bg-[#f1720c]  px-4 py-2 rounded-full"
                >
                    +
                </button>
            </div>

            <p className=" font-bold text-xl">
                <span className="text-[#f1720c]">$</span>
                {price * quantity}
            </p>
        </div>
    );
};

export default QuantityDetail;
