import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import styles from "./App.module.css";
import Content from "./Content";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header}>PFM</header>
      <NavBar scrolled={scrolled} />
      <Content scrolled={scrolled} />
    </div>
  );
}

export default App;
