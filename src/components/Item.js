import React from "react";
import styles from "./Item.module.css";
const Item = ({ item, index, setSelectedItem }) => {
  //console.log(item);
  const { name, images, sku, attributes, categories, meta_data } = item;
  const image = images[1]["src"];
  let metaFiber = "Wool";
  if (meta_data[1].value["pa_filter-fiber"]) {
    metaFiber = meta_data[1].value["pa_filter-fiber"]["pa_filter-fiber"];
  }

  const handleSelectedItem = (e) => {
    e.preventDefault();
    setSelectedItem(index);
  };
  return (
    <div onClick={handleSelectedItem} className={styles.container}>
      <img className={styles.img} src={image} alt="item" />
      <div className={styles.title}>{name}</div>
      <div className={styles.info}>
        <span>{sku} | </span> <span>{metaFiber}</span>
      </div>
    </div>
  );
};

export default Item;
