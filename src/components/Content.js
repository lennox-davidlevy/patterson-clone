import React from "react";
import ContentItems from "./ContentItems";
import SideBar from "./SideBar";
import styles from "./Content.module.css";

const Content = ({
  scrolled,
  data,
  loading,
  handleNextPage,
  handlePrevPage,
  page,
  setSelectedItem,
  setMasterSelectedOptions,
}) => {
  return (
    <div className={styles.container}>
      <SideBar
        scrolled={scrolled}
        setMasterSelectedOptions={setMasterSelectedOptions}
      />
      {loading && <div>Loading...</div>}
      {!loading && data.length > 0 && (
        <ContentItems
          data={data}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
};

export default Content;
