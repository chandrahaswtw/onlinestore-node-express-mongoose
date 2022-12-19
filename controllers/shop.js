const Product = require("../models/products");

const getProducts = async (req, res, next) => {
  const products = await Product.find();
  console.log(products);
  res.render("./shop/allProducts", {
    prod: products,
    path: "/",
    docTitle: "Home",
  });
};

const viewProduct = async (req, res, next) => {
  const id = req.params.id;
  const productData = await Product.findById(id);
  res.render("./shop/viewProduct", {
    prod: productData,
    path: "/",
    docTitle: productData.title,
  });
};

module.exports = { getProducts, viewProduct };
