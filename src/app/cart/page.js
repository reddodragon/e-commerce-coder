import CartTable from "../../components/cart/CartPage/CartTable";
import TotalPrice from "../../components/cart/CartPage/TotalPrice";

const Cart = () => {
    // Datos de ejemplo para productos en el carrito
    const cartItems = [
        {
            id: 1,
            img: "Ms-2",
            name: "Ms-2",
            brand: "marshall",
            price: 1200,
            quantity: 1,
        },
        {
            id: 2,
            img: "STOCKWELL II",
            name: "STOCKWELL II",
            brand: "marshall",
            price: 550,
            quantity: 1,
        },
        {
            id: 3,
            img: "WILLEN",
            name: "WILLEN",
            brand: "marshall",
            price: 750,
            quantity: 1,
        },
    ];

    return (
        <div className="shadow-xl mt-1 mx-auto w-5/6 rounded-3xl text-[#1e1305] h-4/5 bg-[#ede0d0]">
            <div className="flex flex-col h-full justify-between items-center">
                <TotalPrice cartItems={cartItems} />
                <CartTable cartItems={cartItems} />
                <button className="uppercase my-2 text-sm font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;
