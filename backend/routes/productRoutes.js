import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getAllProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProduct);

export default router;
