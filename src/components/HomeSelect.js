"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { mockData } from "@/mock/mockData";
import Link from "next/link";
import Rating from "./Rating";

const HomeSelect = () => {
    const [selectedItem, setSelectedItem] = useState(mockData[0]);

    useEffect(() => {
        const newSelectedItem = mockData.find(
            (item) => item.id === selectedItem.id
        );
        setSelectedItem(newSelectedItem);
    }, [selectedItem]);

    const handleButtonClick = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    const limitedData = mockData.slice(0, 3);

    const isButtonSelected = (id) => {
        return selectedItem.id === id;
    };



    return (
        <div className="bg-[#ede0d0] h-72  w-5/6 flex justify-center items-center  rounded-3xl">
            <div className="w-1/3 flex flex-col items-center">
                <p className="px-5">
                    {selectedItem.description}
                </p>
            </div>
            <div className="  w-1/3 flex flex-col items-center">
                <div className="w-44 h-44 flex items-center">
                    <Image
                        width={200}
                        height={500}
                        alt="Hola"
                        src={`/imgs/products/${selectedItem.img}.png`}
                        className="home-image mb-16"
                    />
                </div>
                <div className="py-5 flex items-center justify-center gap-1">
                    {limitedData.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleButtonClick(item)}
                            value={item.id}

                        >
                            <div className={` ${isButtonSelected(item.id) ? "bg-[#f1720c]" : "bg-black"} w-12 h-12 bg-opacity-20 p-1 rounded-full flex items-center"`}>
                                <Image
                                    width={75}
                                    height={75}
                                    alt="Hola"
                                    src={`/imgs/products/${item.img}.png`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </button>
                    ))}
                </div>
                <Link
                    href="/productos/all"
                    className=" relative top-3 uppercase font-semibold p-3 px-5 bg-[#f1720c] rounded-3xl"
                >
                    View More
                </Link>
            </div>
            <div className="w-1/3">
                <Rating stars={selectedItem.stars}  reviews={selectedItem.reviews}/>
            </div>
        </div>
    );
};

export default HomeSelect;
