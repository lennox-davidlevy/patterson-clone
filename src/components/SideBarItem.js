import React, { useState } from "react";
import styles from "./SideBarItem.module.css";
import SideBarItemList from "./SideBarItemList";
import { data } from "./sidebar_data";
const SideBarItem = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.item_container}>
      <div className={styles.item_line} onClick={handleClick}>
        <span className={styles.item_name}>{name}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <SideBarItemList data={data} />}
    </div>
  );
};

export default SideBarItem;
