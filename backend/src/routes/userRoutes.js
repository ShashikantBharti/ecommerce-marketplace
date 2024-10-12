// routes/userRoutes.js
import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route    POST /api/users/register
// @desc     Register a new user (buyer/vendor)
// @access   Public
router.post("/register", registerUser);

// @route    POST /api/users/login
// @desc     Authenticate user and get token
// @access   Public
router.post("/login", loginUser);

// @route    GET /api/users/profile
// @desc     Get user profile
// @access   Private (Authenticated users only)
router.get("/profile", authMiddleware, getUserProfile);

// @route    PUT /api/users/profile
// @desc     Update user profile
// @access   Private (Authenticated users only)
router.put("/profile", authMiddleware, updateUserProfile);

module.exports = router;
