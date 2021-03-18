import React, { useState } from "react";
import styles from "./SideBarItem.module.css";
import SideBarItemList from "./SideBarItemList";
//import { data } from "./sidebar_data";
const SideBarItem = ({ name, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelected = (e) => {
    const { value } = e.target;
    if (selectedOptions.indexOf(value) === -1) {
      const newOptions = [...selectedOptions, value];
      const joinData = newOptions.join(",");
      const data = { "color-family": joinData };

      //axios.get('/products', data).then(res => JSON.parse(res))
      setSelectedOptions(newOptions);
    } else {
      const newOptions = selectedOptions.filter((item) => item !== value);
      console.log(newOptions);
      setSelectedOptions(newOptions);
    }
  };

  return (
    <div className={styles.item_container}>
      <div className={styles.item_line} onClick={handleClick}>
        <span className={styles.item_name}>{name}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <SideBarItemList
          data={data}
          selectedOptions={selectedOptions}
          handleSelected={handleSelected}
        />
      )}
    </div>
  );
};

export default SideBarItem;
