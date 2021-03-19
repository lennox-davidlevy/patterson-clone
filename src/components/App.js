import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import styles from "./App.module.css";
import Content from "./Content";
import axios from "axios";
import ItemPage from "./ItemPage";
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [orderby, setOrderby] = useState("date");
  const [selectedItem, setSelectedItem] = useState(null);
  const [masterSelectedOptions, setMasterSelectedOptions] = useState({});

  //const [selectedOptions, setSelectedOptions] = useState([]);
  //const handleSelected = (e) => {
  //const { value } = e.target;
  //if (selectedOptions.indexOf(value) === -1) {
  //const newOptions = [...selectedOptions, value];
  //const joinData = newOptions.join(",");
  //const data = { "color-family": joinData };
  ////axios.get('/products', data).then(res => JSON.parse(res))
  //setSelectedOptions(newOptions);
  //} else {
  //const newOptions = selectedOptions.filter((item) => item !== value);
  //console.log(newOptions);
  //setSelectedOptions(newOptions);
  //}
  //};
  //useEffect(() => {
  ////axios.get()
  //}, [selectedOptions]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    console.log(masterSelectedOptions);
  }, [masterSelectedOptions]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setLoading(true);
    getItemsFromApi(page, orderby, masterSelectedOptions);
  }, [page, orderby]);
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

  const getItemsFromApi = (nPage, orderby, masterSelectedOptions) => {
    axios
      .get("/products", {
        params: {
          page: nPage,
          orderby: orderby,
          masterSelectedOptions: masterSelectedOptions,
        },
      })
      .then((result) => setState(result.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  const handleOrderbyChange = (e) => {
    setOrderby(e.target.value);
  };
  return (
    <div className={styles.container}>
      <NavBar scrolled={scrolled} setSelectedItem={setSelectedItem} />
      <div className={styles.select}>
        <select value={orderby} onChange={handleOrderbyChange}>
          <option value="date">Latest</option>
          <option value="title">A-Z</option>
        </select>
      </div>
      {selectedItem !== null && (
        <ItemPage
          setSelectedItem={setSelectedItem}
          data={state[selectedItem]}
        />
      )}
      {selectedItem === null && (
        <Content
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          loading={loading}
          scrolled={scrolled}
          data={state}
          page={page}
          setSelectedItem={setSelectedItem}
          setMasterSelectedOptions={setMasterSelectedOptions}
        />
      )}
    </div>
  );
}

export default App;
