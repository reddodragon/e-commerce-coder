"use client";
import Image from "next/image";
import Rating from "../../../../components/Rating";
import mockData from "../../../../mock/mockData";
import { useState } from "react";
import ErrorPage from "../../../not-found";

const ProductDetail = ({ params }) => {
    const { id } = params;
    const [quantity, setQuantity] = useState(1);

    // Find the product with the matching id
    const item = mockData.find((item) => item.id === parseInt(id));

    // Check if item exists
    if (!item) {
        return <ErrorPage errorMessage='Este ítem no existe'/>;
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Implement your logic to add the item to the cart
        console.log(`Added ${quantity} ${item.name} to the cart.`);
    };

    return (
        <div className="flex bg-[#ede0d0] justify-between rounded-3xl mx-20 my-8 p-8">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
                <h2 className="uppercase text-[#171515] mb-4">{item.brand}</h2>
                <div className="w-72 h-72 flex justify-center items-center mb-4">
                    <Image
                        src={`/imgs/products/${item.img}.png`}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-around items-center mt-5">
                <p className="text-lg font-light text-[#171515] mb-4">
                    {item.description}
                </p>
                <div className="flex justify-around w-full items-center ">
                    <div className="flex items-center justify-between gap-2">
                        <button
                            onClick={handleDecrement}
                            className="bg-[#f1720c]  px-4 py-2 rounded-full"
                        >
                            -
                        </button>
                        <p className=" text-center rounded-full w-5 px-auto">{quantity}</p>
                        <button
                            onClick={handleIncrement}
                            className="bg-[#f1720c]  px-4 py-2 rounded-full"
                        >
                            +
                        </button>
                    </div>

                    <p className=" font-bold text-xl">
                        <span className="text-[#f1720c]">$</span>{item.price * quantity}
                    </p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="bg-[#f1720c] px-4 py-2 rounded-3xl"
                >
                    Add to Cart
                </button>

                <div>
                    <Rating stars={item.stars} reviews={item.reviews} />
                    <p className="text-sm  font-light text-[#171515] mb-4">
                        Category: {item.category}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
