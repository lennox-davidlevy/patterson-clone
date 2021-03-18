import React from "react";
import Item from "./Item";
import styles from "./ContentItems.module.css";

const ContentItems = ({
  data,
  handleNextPage,
  handlePrevPage,
  page,
  setSelectedItem,
}) => {
  const items = data.map((item, index) => {
    return (
      <Item
        key={item.id}
        item={item}
        index={index}
        setSelectedItem={setSelectedItem}
      />
    );
  });
  return (
    <div className={styles.container}>
      {items}
      <div className={styles.button_group}>
        <button onClick={handlePrevPage}>Prev</button>
        <div>
          <span>Page: </span> <span>{page}</span>
        </div>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default ContentItems;
