import React from "react";
import styles from "./NavBar.module.css";
const NavBar = ({ scrolled }) => {
  return (
    <div className={styles.navbar}>
      <header className={styles.header}>PFM</header>
      <ul className={styles.list}>
        <li className={styles.items}>New arrivals</li>
        <li className={styles.items}>In-Stock</li>
        <li className={styles.items}>Broadloom</li>
        <li className={styles.items}>Custom Rugs</li>
        <li className={styles.items}>Designer Collaborations</li>
        <li className={styles.items}>Fabrics & Wallpapers</li>
        <li className={styles.items}>Contact Us</li>
        <li className={styles.items}>New arrivals</li>
      </ul>
    </div>
  );
};

export default NavBar;
