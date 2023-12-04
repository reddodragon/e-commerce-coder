"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ProductDesc from './ProductDesc';
import ProductImage from './ProductImage';
import ProductSelect from './ProductSelect';
import Rating from '../Rating'; // Asegúrate de importar Rating si aún no lo has hecho


const HomeSelect = ({limitedData}) => {
  const [selectedItem, setSelectedItem] = useState(limitedData[0]);

  const handleButtonClick = (newSelectedItem) => {
    setSelectedItem(newSelectedItem);
  };

  return (
    <div className="bg-[#ede0d0] h-full w-5/6 flex justify-center items-center rounded-3xl">
      <ProductDesc description={selectedItem?.description} />
      <div className="w-1/3 flex flex-col items-center">
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
        <Rating stars={selectedItem?.stars} reviews={selectedItem?.reviews} />
      </div>
    </div>
  );
};

export default HomeSelect;