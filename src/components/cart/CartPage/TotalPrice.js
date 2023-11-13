const TotalPrice = ({ cartItems }) => {
    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };
    return (
        <div className="flex py-4 justify-between mb-2">
            <span className="uppercase text-sm font-semibold">Total:</span>
            <span>${getTotalPrice()}</span>
        </div>
    );
};

export default TotalPrice;
