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
const SideBar = ({ scrolled }) => {
  return (
    <div className={`${styles.sidebar} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={styles.list}>
        <li className={styles.items}>
          <SideBarItem name="Color" data={colorData} />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Motif" data={motifData} />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Fiber" data={fiberData} />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Construction" data={constructionData} />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Width" data={widthData} />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Collection" data={collectionData} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
