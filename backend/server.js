import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
