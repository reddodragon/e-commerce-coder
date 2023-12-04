'use client'
import Image from "next/image";
import useCommerce from "../../../hooks/useCommerce";


const CartTable = () => {
    const { cart, handleEditar, removeFromCart } = useCommerce();

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
      };
    return (
        <div className="max-h-96 scroll overflow-y-auto">
            <table className="table-auto  w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Imagen</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Marca</th>
                        <th className="px-4 py-2">Precio</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Total</th>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="px-4 py-2 text-center">
                                <div className="w-auto h-20 flex items-center justify-center">
                                    <Image
                                        width={100}
                                        height={100}
                                        alt={item.name}
                                        src={`/imgs/products/${item.img}.png`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 text-center">{item.name}</td>
                            <td className="px-4 py-2 text-center">{item.brand}</td>
                            <td className="px-4 py-2 text-center">${item.price}</td>
                            <td className="px-4 py-2 text-center">{item.quantity}</td>
                            <td className="px-4 py-2 text-center">
                                ${item.price * item.quantity}
                            </td>
                            <td className="px-4 py-2 text-center">
                                <button onClick={() => {
                                    handleEditar(item.id)

                                }} className="bg-blue-500 text-white px-4 py-2 rounded">Editar</button>
                            </td>

                            <td className="px-4 py-2 text-center">
                                <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;