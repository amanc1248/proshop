import express from "express";
import { protect } from "../middleWare/authMiddleWare.js";
const router = express.Router();

import { addOrderItems } from "../controllers/orderController.js";

router.route("/").post(protect, addOrderItems);
export default router;
