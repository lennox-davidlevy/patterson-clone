import React from "react";
import styles from "./ItemPage.module.css";
const ItemPage = ({ data, setSelectedItem }) => {
  const handleBack = (e) => {
    e.preventDefault();
    setSelectedItem(null);
  };

  const { name, images, sku, attributes, categories } = data;
  const [image1, image2] = images;
  const collection = categories[0].name;
  let color;
  let fiber;
  let construction;
  attributes.forEach((item) => {
    if (item.id === 1) {
      color = item.options[0];
    }
    if (item.id === 13) {
      fiber = item.options[0];
    }
    if (item.id === 3) {
      construction = item.options[0];
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.btn_back} onClick={handleBack}>
        Back
      </div>
      <div className={styles.item_container}>
        <div className={styles.thumbnail_container}>
          <img src={image1.src} alt="" />
          <img src={image2.src} alt="" />
        </div>
        <div className={styles.image_container}>
          <img src={image1.src} alt="" />
        </div>
        <div className={styles.info_container}>
          <div className={styles.item_title}>
            <span>Pattern:</span>
            <br />
            <br />
            <span className={styles.item_title_bold}>{name}</span>
          </div>
          <div className={styles.sku}>
            <span>Sku: </span> <span>{sku}</span>
          </div>
          <div className={styles.collection}>
            <span>Collection: </span> <span>{collection}</span>
          </div>
          <div className={styles.color}>
            <span>Color: </span>{" "}
            <span className={styles.color_bold}>{color}</span>
          </div>
          <div className={styles.fiber}>
            <span>Fiber: </span>{" "}
            <span className={styles.fiber_bold}>{fiber}</span>
          </div>
          <div className={styles.construction}>
            <span>Construction: </span>{" "}
            <span className={styles.construction_bold}>{construction}</span>
          </div>
          <div className={styles.btn_order}>Order cutting</div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
