import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
    return (
        <article className="bg-[#ede0d0] rounded-3xl">
            <Link
                href={`/products/detail/${item.id}`}
                className="flex flex-col gap-1 justify-center pb-1 items-center"
            >
                <div className="flex items-center" >
                    <div className="w-36 h-36 flex items-center" >
                        <Image
                            width={200}
                            height={200}
                            alt="Hola"
                            src={`/imgs/products/${item.img}.png`}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
                <div className="font-bold text-[#f1720c]">{item.name}</div>
                <div className="text-sm font-light text-[#171515]">
                    {item.brand}
                </div>
                <div id="Element2" className="font-bold text-[#f1720c]">
                    $<span className="text-[#171515]">{item.price}</span>
                </div>
            </Link>
        </article>
    );
};

export default ProductCard;