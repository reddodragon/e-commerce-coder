import Image from "next/image";

const CartTable = ({ cartItems }) => {
    return (
        <div className="max-h-96 scroll w-5/6 overflow-y-auto">
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
                            <td className="px-4 py-2">
                                ${item.price * item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
