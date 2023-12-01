import { useContext } from "react";
import EcomerceContext from "../context/EcomerceContext";

const useCommerce = () => {
    return useContext(EcomerceContext)
}

export default useCommerce