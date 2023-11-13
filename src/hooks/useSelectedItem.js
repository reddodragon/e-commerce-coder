
import { useEffect, useState } from "react";
import mockData from "../mock/mockData";

const useSelectedItem = () => {
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
  
    return { selectedItem, handleButtonClick };
  };

  export default useSelectedItem;