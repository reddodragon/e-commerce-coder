'use client'
const ProductActionsCell = () => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/admin/route`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: productId }),
            });

            if (response.ok) {
                console.log('Producto eliminado con éxito');
                // Realizar acciones adicionales como actualizar la lista de productos
            } else {
                console.error('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <td className="px-4 py-2">
            <div className="flex justify-center flex-col gap-3">
                <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded-3xl">
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
