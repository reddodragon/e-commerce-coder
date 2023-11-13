"use client";

import mockData from "../../mock/mockData";
import Link from "next/link";

import Rating from "../Rating";
import ProductDesc from "./ProductDesc";
import ProductImage from "./ProductImage";
import ProductSelect from "./ProductSelect";
import useSelectedItem from "../../hooks/useSelectedItem";

const HomeSelect = () => {
    const { selectedItem, handleButtonClick } = useSelectedItem();

    const limitedData = mockData.slice(0, 3);

    return (
        <div className="bg-[#ede0d0] h-full w-5/6 flex justify-center items-center rounded-3xl">
            <ProductDesc description={selectedItem.description} />
            <div className="  w-1/3 flex flex-col items-center">
                <ProductImage selectedItem={selectedItem} />
                <ProductSelect
                    limitedData={limitedData}
                    selectedItem={selectedItem}
                    onButtonClick={handleButtonClick}
                />
                <Link
                    href="/products/all"
                    className="relative top-3 uppercase font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl"
                >
                    View More
                </Link>
            </div>

            <div className="w-1/3">
                <Rating
                    stars={selectedItem.stars}
                    reviews={selectedItem.reviews}
                />
            </div>
        </div>
    );
};

export default HomeSelect;
