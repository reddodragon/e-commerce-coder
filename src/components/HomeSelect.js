'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { mockData } from "@/mock/mockData";

const HomeSelect = () => {
    const [selectedItem, setSelectedItem] = useState(mockData[0]);

    const handleButtonClick = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    const limitedData = mockData.slice(0, 3);

    // Actualiza el selectedItem cada vez que cambia el botón seleccionado
    useEffect(() => {
        const newSelectedItem = mockData.find((item) => item.id === selectedItem.id);
        setSelectedItem(newSelectedItem);
    }, [selectedItem]);


    return (
        <div>
            <div className="flex items-center">
                <Image
                    width={200}
                    height={500}
                    alt="Hola"
                    src={`/imgs/products/${selectedItem.img}.png`}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="flex">
                {limitedData.map((item) => (
                    <button
                        key={item.id}
                        className="mr-2"
                        onClick={() => handleButtonClick(item)}
                        value={item.id} // Añade el valor correspondiente al ID
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomeSelect;