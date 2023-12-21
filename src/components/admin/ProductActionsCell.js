'use client'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Link from 'next/link';

const ProductActionsCell = ({ productId }) => {
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "Productos", productId.toString()));
            console.log("Producto eliminado con éxito");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    return (
        <td className="px-4 py-2">
            <div className="flex justify-center flex-col gap-3">
                <button 
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded-3xl"
                >
                    Eliminar
                </button>
                <Link href={`/admin/${productId}`} passHref>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-3xl">
                        Editar
                    </button>
                </Link>
            </div>
        </td>
    );
};

export default ProductActionsCell;