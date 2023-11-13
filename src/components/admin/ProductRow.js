import ProductActionsCell from "./ProductActionsCell";
import ProductImageCell from "./ProductImageCell";
import ProductInfoCell from "./ProductInfoCell";

const ProductRow = ({ item, isHighlighted }) => {
    return (
        <tr
            className={`${
                isHighlighted ? "bg-yellow-200" : ""
            } border-b-2 border-[#171515]`}
        >
            <ProductImageCell img={item.img} />
            <ProductInfoCell value={item.name} />
            <ProductInfoCell value={item.brand} />
            <ProductInfoCell value={item.description} />
            <ProductInfoCell value={`$${item.price}`} />
            <ProductActionsCell />
            <ProductInfoCell value={isHighlighted ? "Home" : ""} />
        </tr>
    );
};

export default ProductRow;
