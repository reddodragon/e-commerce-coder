import Image from 'next/image';
import React from 'react';

const Cart = () => {
    // Datos de ejemplo para productos en el carrito
    const cartItems = [
        {
            id: 1,
            img: 'Ms-2',
            name: 'Ms-2',
            brand: 'marshall',
            price: 1200,
            quantity: 1,
        },
        {
            id: 2,
            img: 'STOCKWELL II',
            name: 'STOCKWELL II',
            brand: 'marshall',
            price: 550,
            quantity: 1,
        },
        {
            id: 3,
            img: 'WILLEN',
            name: 'WILLEN',
            brand: 'marshall',
            price: 750,
            quantity: 1,
        },
        // Agrega más elementos según sea necesario
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="shadow-xl mt-1 mx-auto w-5/6 rounded-3xl text-[#1e1305] h-4/5 bg-[#ede0d0]">
            <div className="flex flex-col justify-between items-center">
                <div className="flex py-4 justify-between mb-2">
                    <span className="uppercase text-sm font-semibold">Total:</span>
                    <span>${getTotalPrice()}</span>
                </div>
                <div className="max-h-96 scroll w-5/6 overflow-y-auto"> {/* Ajusta la altura máxima según tus necesidades */}
                    <table className="table-auto w-full">
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2">
                                        <div className="w-20 h-20">
                                            <Image
                                                width={100}
                                                height={100}
                                                alt={item.name}
                                                src={`/imgs/products/${item.img}.png`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.brand}</td>
                                    <td className="px-4 py-2">${item.price}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;