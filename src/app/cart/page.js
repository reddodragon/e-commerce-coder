import CartTable from "../../components/cart/CartPage/CartTable";
import TotalPrice from "../../components/cart/CartPage/TotalPrice";
import Link from 'next/link'


const Page = () => {

    return (
        <div className="shadow-xl mt-1 mx-auto w-5/6 rounded-3xl text-[#1e1305] h-4/5 bg-[#ede0d0]">
            <div className="flex flex-col h-full justify-between items-center">
                <div className="w-full">
                    <TotalPrice  />
                    <CartTable  />

                </div>
                <Link href="/checkout">
                    <button className="uppercase my-2 text-sm font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl">
                        Finalizar Compra
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;