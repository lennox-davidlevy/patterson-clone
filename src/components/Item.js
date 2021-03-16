import React from "react";
import styles from "./Item.module.css";
const Item = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://pfm-website-images.s3.amazonaws.com/wp-content/uploads/2021/03/10162426/81479-150x150.jpg"
        alt="item"
      />
      <div className={styles.title}>JACKS RIGHT</div>
      <div className={styles.info}>
        <span>81479 | </span> <span>WOOL</span>
      </div>
    </div>
  );
};

export default Item;
