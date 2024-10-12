import express from "express";
import {
  processPayment,
  getPaymentStatus,
} from "../controllers/paymentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route  POST /api/payments
 * @desc   Process payment for an order
 * @access Private
 */
router.route("/").post(authMiddleware, processPayment);

/**
 * @route  GET /api/payments/status/:orderId
 * @desc   Get Payment status
 *  @access Private
 */
router.route("/status/:orderId").get(authMiddleware, getPaymentStatus);

export default router;
