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
}) => {
  return (
    <div className={styles.container}>
      <SideBar scrolled={scrolled} />
      {loading && <div>Loading...</div>}
      {!loading && (
        <ContentItems
          data={data}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
        />
      )}
    </div>
  );
};

export default Content;
