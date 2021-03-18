import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const SideBar = ({ scrolled }) => {
  return (
    <div className={`${styles.sidebar} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={styles.list}>
        <li className={styles.items}>
          <SideBarItem name="Color" />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Motif" />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Fiber" />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Construction" />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Width" />
        </li>
        <li className={styles.items}>
          <SideBarItem name="Collection" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
