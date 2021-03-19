const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const app = express();
const api = new WooCommerceRestApi({
  url: "https://pattersonflynnmartin.com",
  consumerKey: "jd@lostin.com",
  consumerSecret: "bbQgQAIp8Z6oWcSLtkZghAvG",
  version: "wc/v3",
});

// app.use(express.json({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/attributes", (req, res) => {
  api
    .get("products/attributes/2/terms", {})
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(JSON.stringify(error));
    })
    .finally(() => {
      // Always executed.
    });
});

app.get("/categories", (req, res) => {
  api
    .get("products/categories", {})
    .then((response) => {
      // Successful request
      res.send(response.data);
    })
    .catch((error) => {
      res.send(JSON.stringify(error));
    })
    .finally(() => {
      // Always executed.
    });
});

app.get("/tags", (req, res) => {
  api
    .get("products/tags", {})
    .then((response) => {
      // Successful request
      res.send(response.data);
    })
    .catch((error) => {
      res.send(JSON.stringify(error));
    })
    .finally(() => {
      // Always executed.
    });
});

app.get("/products", (req, res) => {
  const page = req.query.page;
  const orderby = req.query.orderby;
  const filterList = req.query.masterSelectedOptions;
  //Filter list has this shape:
  //{[name of attribute_1]:["attribute 1", "attribute 2"....], [name_of_attribute_2]:["attribute 1", "attribute 2"....]}
  //I would then take the data from the filter list and use it create an object as a query param;
  api
    .get("products", {
      orderby: orderby,
      order: "desc",
      page: page,
      per_page: 100,
    })
    .then((response) => {
      // Successful request
      res.send(response.data);
    })
    .catch((error) => {
      res.send(JSON.stringify(error));
    })
    .finally(() => {
      // Always executed.
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`server started on ${PORT}...`);
});
