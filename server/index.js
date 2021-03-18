const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerceAPI = require("woocommerce-api");
const app = express();
const api = new WooCommerceRestApi({
  //url: "https://pattersonflynnmartin.com/wp-json/wc/v3/",
  url: "https://pattersonflynnmartin.com",
  //consumerKey: "ck_177fb4d06cf1ca0a26efdad888858cd9ca8f407e",
  //consumerSecret: "cs_585af0b30e134702b4d4440cfe4571b89697fb17",
  consumerKey: "jd@lostin.com",
  consumerSecret: "bbQgQAIp8Z6oWcSLtkZghAvG",
  //queryStringAuth: true,
  version: "wc/v3",
});

// app.use(express.json({ extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//test route
app.get("/products", (req, res) => {
  const page = req.query.page;
  const orderby = req.query.orderby;
  console.log(`PAGE: ${page}`);
  api
    .get("products", {
      orderby: orderby,
      order: "desc",
      page: page,
      per_page: 100,
      attribute_term: 8,
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
