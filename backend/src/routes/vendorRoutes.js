import express from "express";
import {
  createProduct,
  getVendorOrders,
  getVendorProducts,
  updateProduct,
} from "../controllers/vendorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { vendorMiddleware } from "../middlewares/vendorMiddleware.js";

const router = express.Router();

/**
 * @route   GET /api/vendors/products
 * @desc    Get all products from a vendor
 * @access  Private (Vendors only)
 */
router
  .route("/products")
  .get(authMiddleware, vendorMiddleware, getVendorProducts);

/**
 * @route   POST /api/vendors/products
 * @desc    Create a new product
 * @access  Private (Vendors Only)
 */
router.route("/products").post(authMiddleware, vendorMiddleware, createProduct);

/**
 * @route   PATCH /api/vendors/products/:id
 * @desc    Update a single product
 * @access  Private (Vendors Only)
 */
router
  .route("/products")
  .patch(authMiddleware, vendorMiddleware, updateProduct);

/**
 * @route   GET /api/vendors/orders
 * @desc    Get orders recieved by vendors
 * @access  Private
 */
router.route("/orders").get(authMiddleware, vendorMiddleware, getVendorOrders);

export default router;
