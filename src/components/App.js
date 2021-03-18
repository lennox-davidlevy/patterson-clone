import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import styles from "./App.module.css";
import Content from "./Content";
import axios from "axios";
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    setLoading(true);
    getItemsFromApi(page);
  }, [page]);
  const handleNextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const getItemsFromApi = (nPage, orderby = "date") => {
    axios
      .get("/products", { params: { page: nPage, orderby: orderby } })
      .then((result) => setState(result.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <NavBar scrolled={scrolled} />
      <Content
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        loading={loading}
        scrolled={scrolled}
        data={state}
        page={page}
      />
    </div>
  );
}

export default App;
