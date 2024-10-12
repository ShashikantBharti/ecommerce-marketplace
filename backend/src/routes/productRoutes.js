import express from "express";
import {
  getAllProducts,
  getProductById,
  searchProducts,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Public
 */
router.route("/").get(getAllProducts);

/**
 * @route    GET /api/products/:id
 * @desc     Get product by id
 * @access   Public
 */
router.route("/:id").get(getProductById);

/**
 * @route   GET /api/products/search
 *  @desc    Search products
 *  @access  Public
 */
router.route("/search").get(searchProducts);

export default router;
