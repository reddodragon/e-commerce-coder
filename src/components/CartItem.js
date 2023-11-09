import React from 'react';

import Image from 'next/image';
import CloseButton from './svg/Close';


const CartItem = ({ image, name, price }) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <Image src={image} alt={name} width={30} height={30} className=" rounded-full" />
      <div className="text-sm">
        <p >{name}</p>
        <p>{price}</p>
      </div>
      <button>
        <CloseButton color="#1e1305" size={16} />
      </button>
    </div>
  );
};

export default CartItem;