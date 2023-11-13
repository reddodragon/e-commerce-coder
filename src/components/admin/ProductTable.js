import ProductRow from "./ProductRow";

const ProductTable = ({ data }) => {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Imagen</th>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Marca</th>
                    <th className="px-4 py-2">Descripción</th>
                    <th className="px-4 py-2">Precio</th>
                    <th className="px-4 py-2">Acciones</th>
                    <th className="px-4 py-2">Home</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <ProductRow
                        key={index}
                        item={item}
                        isHighlighted={index < 3}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
