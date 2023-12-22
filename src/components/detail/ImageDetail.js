import Image from "next/image";

const ImageDetail = ({ item }) => {
    const { name, brand, img } = item;
    console.log(img)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <h2 className="uppercase text-[#171515] mb-4">{brand}</h2>
            <div className="w-72 h-72 flex justify-center items-center mb-4">
                <Image
                    src={img}
                    alt={name}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    );
};

export default ImageDetail;
