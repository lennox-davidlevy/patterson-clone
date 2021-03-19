import React, { useEffect, useState } from "react";
import styles from "./SideBarItem.module.css";
import SideBarItemList from "./SideBarItemList";
//import { data } from "./sidebar_data";
const SideBarItem = ({ name, data, setMasterSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelected = (e) => {
    const { value } = e.target;
    if (selectedOptions.indexOf(value) === -1) {
      const newOptions = [...selectedOptions, value];
      handleMasterFunction(name, newOptions);
      //const newMasterOptions = { [name]: newOptions };
      //setMasterSelectedOptions((prevOptions) => {
      //return { ...prevOptions, ...newMasterOptions };
      //});

      setSelectedOptions(newOptions);
    } else {
      const newOptions = selectedOptions.filter((item) => item !== value);
      //const newMasterOptions = { [name]: newOptions };
      //setMasterSelectedOptions((prevOptions) => {
      //return { ...prevOptions, ...newMasterOptions };
      //});

      handleMasterFunction(name, newOptions);
      setSelectedOptions(newOptions);
    }
  };

  const handleMasterFunction = (name, options) => {
    if (name === "Width") return;
    const newOptions = { [name]: options };
    setMasterSelectedOptions((prevOptions) => {
      return { ...prevOptions, ...newOptions };
    });
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
