import express from "express";
import { protect } from "../middleWare/authMiddleWare.js";
const router = express.Router();

import { authUser, getUserProfile } from "../controllers/userController.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
export default router;
