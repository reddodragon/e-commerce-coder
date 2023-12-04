'use client'
import useCommerce from "../../../hooks/useCommerce";

const TotalPrice = () => {
    const { cart } = useCommerce(); 
    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };
    return (
        <div className="flex py-4 justify-center mb-2">
            <span className="uppercase text-sm font-semibold">Total: ${getTotalPrice()}</span>

        </div>
    );
};

export default TotalPrice;
