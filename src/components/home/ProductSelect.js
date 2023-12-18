import Image from "next/image";

const ProductSelect = ({ limitedData, selectedItem, onButtonClick }) => {
    return (
        <div className="py-5 flex items-center justify-center gap-1">
            {limitedData.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onButtonClick(item)}
                    value={item.id}
                >
                    <div
                        className={` ${
                            selectedItem.id === item.id
                                ? "bg-[#f1720c]"
                                : "bg-black"
                        } w-12 h-12 bg-opacity-20 p-1 rounded-full flex items-center`}
                    >
                        <Image
                            width={75}
                            height={75}
                            alt={item.name}
                            src={item.img}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ProductSelect;
