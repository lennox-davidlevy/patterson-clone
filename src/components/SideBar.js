import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import {
  colorData,
  motifData,
  fiberData,
  constructionData,
  widthData,
  collectionData,
} from "./sidebar_data";
const SideBar = ({ scrolled, setMasterSelectedOptions }) => {
  return (
    <div className={`${styles.sidebar} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={styles.list}>
        <li className={styles.items}>
          <SideBarItem
            name="Color"
            data={colorData}
            setMasterSelectedOptions={setMasterSelectedOptions}
          />
        </li>
        <li className={styles.items}>
          <SideBarItem
            name="Motif"
            data={motifData}
            setMasterSelectedOptions={setMasterSelectedOptions}
          />
        </li>
        <li className={styles.items}>
          <SideBarItem
            name="Fiber"
            data={fiberData}
            setMasterSelectedOptions={setMasterSelectedOptions}
          />
        </li>
        <li className={styles.items}>
          <SideBarItem
            name="Construction"
            data={constructionData}
            setMasterSelectedOptions={setMasterSelectedOptions}
          />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Width" data={widthData} />
        </li>
        <li className={styles.items}>
          <SideBarItem
            name="Collection"
            data={collectionData}
            setMasterSelectedOptions={setMasterSelectedOptions}
          />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
