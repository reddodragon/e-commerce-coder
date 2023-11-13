import Image from "next/image";
import Link from "next/link";

const ProductImage = ({ selectedItem }) => {
    return (
        <div className="w-1/3 flex flex-col items-center">
            <Link href={`/products/detail/${selectedItem.id}`}>
                <div className="w-44 h-44 flex items-center">
                    <Image
                        width={200}
                        height={500}
                        alt="Hola"
                        src={`/imgs/products/${selectedItem.img}.png`}
                        className="home-image mb-16"
                    />
                </div>
            </Link>
        </div>
    );
};

export default ProductImage;
