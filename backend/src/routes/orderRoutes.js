import express from "express";
import {
  createOrder,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { vendorMiddleware } from "../middlewares/vendorMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/orders
 * @desc    Create new order
 * @access  Private (Authenticated Users Only)
 */
router.route("/").post(authMiddleware, createOrder);

/**
 * @route  POST /api/orders/user
 * @desc   Get user's orders
 * @access Private (Authenticated Users only)
 */
router.route("/user").get(authMiddleware, getUserOrders);

/**
 * @route   PATCH /api/orders
 * @desc    Update status
 * @access  Private (Vendors Only)
 */
router
  .route("/:id/status")
  .patch(authMiddleware, vendorMiddleware, updateOrderStatus);

export default router;
