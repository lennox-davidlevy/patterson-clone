import React from "react";
import ContentItems from "./ContentItems";
import SideBar from "./SideBar";
import styles from "./Content.module.css";

const Content = ({ scrolled }) => {
  return (
    <div className={styles.container}>
      <SideBar scrolled={scrolled} />
      <ContentItems />
    </div>
  );
};

export default Content;
