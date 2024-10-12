import express from "express";
import {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
} from "../controllers/cartController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/cart
 * @desc    Add item to cart
 * @access  Private
 */
router.route("/").post(authMiddleware, addItemToCart);

/**
 * @route   GET /api/cart
 * @desc    Get item to cart
 * @access  Public
 */
router.route("/").get(authMiddleware, getCartItems);

/**
 * @route   DELETE /api/cart/:id
 * @desc    Delete item to cart
 * @access  Private
 */
router.route("/").delete(authMiddleware, removeItemFromCart);

export default router;
