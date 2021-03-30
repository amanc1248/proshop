import express from "express";
import { isAdmin, protect } from "../middleWare/authMiddleWare.js";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController.js";
import { getUsers } from "../controllers/userController.js";
router.route("/").post(registerUser).get(protect, isAdmin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/:id").delete(protect, isAdmin, deleteUser);
export default router;
