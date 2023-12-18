import Image from "next/image";
import CloseButton from "../../svg/Close";
import { useContext } from "react";
import EcomerceContext from "../../../context/appContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(EcomerceContext);

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center justify-between gap-1">
      <Image
        src={item.img}
        alt={item.name}
        width={30}
        height={30}
        className=" rounded-full"
      />
      <p className="text-sm">{item.name}</p>
      <div className="text-sm">
        <p>${item.price}</p>
        <p>{item.quantity}</p>
      </div>

      <button onClick={handleRemoveFromCart}>
        <CloseButton color="#1e1305" />
      </button>
    </div>
  );
};

export default CartItem;