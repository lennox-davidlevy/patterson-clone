import React, { useState } from "react";
import styles from "./SideBarItemList.module.css";
const SideBarItemList = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.list}>
      {data.map((item) => {
        return (
          <label className={styles.item}>
            <input
              className={styles.radio}
              type="radio"
              name={item}
              value={item}
              checked={selectedOption === item}
              onChange={handleChange}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default SideBarItemList;
