import { useContext } from "react";
import EcomerceContext from "../context/appContext";

const useCommerce = () => {
    return useContext(EcomerceContext)
}

export default useCommerce