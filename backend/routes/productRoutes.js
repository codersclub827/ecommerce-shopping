import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../models/product.js";

const router = express.Router();

/* FIX __dirname (ES Module) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Ensure upload folder exists */
const uploadPath = path.join(__dirname, "../uploads/products");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

/* Multer config */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

/* Upload product */
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: `/uploads/products/${req.file.filename}`,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Get all products */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
