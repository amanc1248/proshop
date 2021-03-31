import express from "express";
const router = express.Router();

import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { isAdmin, protect } from "../middleWare/authMiddleWare.js";

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct);

export default router;
