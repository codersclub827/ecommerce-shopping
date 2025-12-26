import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products Seeded Successfully");
  process.exit();
});
