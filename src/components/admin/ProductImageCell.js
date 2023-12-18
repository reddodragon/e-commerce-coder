const { default: Image } = require("next/image");

const ProductImageCell = ({ img }) => {
    return (
        <td className="px-4 py-2">
            <div className="w-32 h-32 flex items-center">
                <Image
                    width={100}
                    height={100}
                    alt="Hola"
                    src={img}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </td>
    );
};
export default ProductImageCell;
