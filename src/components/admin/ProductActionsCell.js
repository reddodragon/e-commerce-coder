const ProductActionsCell = () => {
    return (
        <td className="px-4 py-2">
            <div className="flex justify-center flex-col gap-3">
                <button className="bg-red-500 text-white px-2 py-1 rounded-3xl">
                    Eliminar
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-3xl">
                    Editar
                </button>
            </div>
        </td>
    );
};

export default ProductActionsCell;
