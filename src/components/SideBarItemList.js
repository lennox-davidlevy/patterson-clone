import React, { useState } from "react";
import styles from "./SideBarItemList.module.css";
const SideBarItemList = ({ data, selectedOptions, handleSelected }) => {
  return (
    <div className={styles.list}>
      {data.map((item) => {
        return (
          <label key={item} className={styles.item}>
            <input
              key={item}
              className={styles.radio}
              type="radio"
              name={item}
              value={item}
              checked={selectedOptions.indexOf(item) !== -1}
              onClick={handleSelected}
              onChange={handleSelected}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default SideBarItemList;
