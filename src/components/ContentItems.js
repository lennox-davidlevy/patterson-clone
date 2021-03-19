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
        <div className={styles.btn_page} onClick={handlePrevPage}>
          Prev
        </div>
        <div className={styles.page_number_container}>
          <span className={styles.page}>Page: </span>{" "}
          <span className={styles.page_number}>{page}</span>
        </div>
        <div className={styles.btn_page} onClick={handleNextPage}>
          Next
        </div>
      </div>
    </div>
  );
};

export default ContentItems;

//<button onClick={handlePrevPage}>Prev</button>
//<div>
//<span>Page: </span> <span>{page}</span>
//</div>
//<button onClick={handleNextPage}>Next</button>
