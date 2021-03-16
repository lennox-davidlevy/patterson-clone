import React from "react";
import Item from "./Item";
import styles from "./ContentItems.module.css";

const ContentItems = () => {
  const items = [];
  for (let i = 0; i < 99; i++) {
    items.push(<Item key={i} />);
  }
  return <div className={styles.container}>{items}</div>;
};

export default ContentItems;
