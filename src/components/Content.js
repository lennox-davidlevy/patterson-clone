import React from "react";
import ContentItems from "./ContentItems";
import SideBar from "./SideBar";
import styles from "./Content.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
      {loading && (
        <Loader
          className={styles.loader}
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
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
